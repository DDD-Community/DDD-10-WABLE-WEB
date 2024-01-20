import ProfileBasicInformationForm from '@/components/profile/ProfileBasicInformationForm';
import { useFunnel } from '@/hooks/common/useFunnel';
import { ProfileSchema, profileSchema } from '@/models/profile';
import { Center, Container, useSteps } from '@chakra-ui/react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

const STEPS = [
  '프로필 상세 정보 입력 - 기본 정보',
  '프로필 상세 정보 입력 - MBTI 및 관심사',
  '프로필 상세 정보 입력 - 완료',
] as const;

export type ProfileSteps = typeof STEPS;

/**
 * @todo localStorage에 프로필 정보 저장 필요.
 */
export default function Profile() {
  const [Funnel, step, setStep] = useFunnel({ steps: STEPS });
  const { activeStep } = useSteps({
    index: STEPS.indexOf(step),
    count: STEPS.length,
  });
  const methods = useForm<ProfileSchema>({
    resolver: zodResolver(profileSchema),
  });

  function handleSubmit(profile: ProfileSchema) {
    console.log(profile);
  }

  return (
    <FormProvider {...methods}>
      <Container centerContent>
        <Center maxWidth="400px" w="100%">
          <form onSubmit={methods.handleSubmit(handleSubmit)}>
            <Funnel>
              <Funnel.Step name="프로필 상세 정보 입력 - 기본 정보">
                <ProfileBasicInformationForm
                  steps={STEPS}
                  activeStep={activeStep}
                />
              </Funnel.Step>
            </Funnel>
          </form>
        </Center>
      </Container>
    </FormProvider>
  );
}
