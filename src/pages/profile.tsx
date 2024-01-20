import ProfileBasicInformationForm from '@/components/profile/ProfileBasicInformationForm';
import { useFunnel } from '@/hooks/common/useFunnel';
import { Center, Container, useSteps } from '@chakra-ui/react';

const STEPS = [
  '프로필 상세 정보 입력 - 기본 정보',
  '프로필 상세 정보 입력 - MBTI 및 관심사',
  '프로필 상세 정보 입력 - 완료',
] as const;

export type ProfileSteps = typeof STEPS;

export default function Profile() {
  const [Funnel, step, setStep] = useFunnel({ steps: STEPS });
  const { activeStep } = useSteps({
    index: STEPS.indexOf(step),
    count: STEPS.length,
  });

  return (
    <Container centerContent>
      <Center maxWidth="400px" w="100%">
        <Funnel>
          <Funnel.Step name="프로필 상세 정보 입력 - 기본 정보">
            <ProfileBasicInformationForm
              steps={STEPS}
              activeStep={activeStep}
            />
          </Funnel.Step>
        </Funnel>
      </Center>
    </Container>
  );
}
