import {
  Children,
  isValidElement,
  ReactElement,
  ReactNode,
  useEffect,
  useMemo,
  useState,
} from 'react';

type NonEmptyArray<T> = readonly [T, ...T[]];

export function useFunnel<Steps extends NonEmptyArray<string>>({
  steps,
  initialStep = steps[0],
}: {
  steps: Steps;
  initialStep?: Steps[number];
}) {
  const [step, setStep] = useState<Steps[number]>(initialStep);

  const FunnelComponent = useMemo(
    () =>
      Object.assign(
        function _Funnel(props: Omit<FunnelProps<Steps>, 'step'>) {
          return <Funnel<Steps> step={step} {...props} />;
        },
        {
          Step: function _Step(props: StepProps<Steps>) {
            return <Step<Steps> {...props} />;
          },
        },
      ),
    [step],
  );

  return [FunnelComponent, setStep] as const;
}

type FunnelProps<Steps extends NonEmptyArray<string>> = {
  step: Steps[number];
  children:
    | Array<ReactElement<StepProps<Steps>>>
    | ReactElement<StepProps<Steps>>;
};

function Funnel<Steps extends NonEmptyArray<string>>({
  step,
  children,
}: FunnelProps<Steps>) {
  const validElements = Children.toArray(children).filter(isValidElement);
  const targetStepElement = validElements.find(
    (element) => (element.props as StepProps<Steps>).name === step,
  );

  if (!targetStepElement) return null;

  return <>{targetStepElement}</>;
}

type StepProps<Steps extends NonEmptyArray<string>> = {
  name: Steps[number];
  onEnter?: () => void;
  children: ReactNode;
};

function Step<Steps extends NonEmptyArray<string>>({
  onEnter,
  children,
}: StepProps<Steps>) {
  useEffect(() => {
    onEnter?.();
  }, [onEnter]);

  return <>{children}</>;
}
