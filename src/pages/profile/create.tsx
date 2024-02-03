import { ProfileBasicInformationForm } from '@/components/pages/profile/components/ProfileBasicInformationForm';
import { useFunnel } from '@/hooks/common/useFunnel';
import { ProfileSchema, profileSchema } from '@/models/profile';
import { Flex, VStack, useSteps, Heading } from '@chakra-ui/react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import * as C from '@/components/pages/profile/components';

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
  const { activeStep: activeStepIndex } = useSteps({
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
    <VStack backgroundColor="#f8f9fa" h="100vh">
      <C.Header />
      <FormProvider {...methods}>
        <Flex w="100%" justifyContent="center">
          <Flex
            as="form"
            w="100%"
            paddingX="24px"
            flexDirection="column"
            alignItems="center"
            gap="32px"
            onSubmit={methods.handleSubmit(handleSubmit)}
          >
            <Heading size="md">프로필 상세 정보 입력</Heading>
            <Funnel>
              <Funnel.Step name="프로필 상세 정보 입력 - 기본 정보">
                <ProfileBasicInformationForm
                  steps={STEPS}
                  activeStepIndex={activeStepIndex}
                />
              </Funnel.Step>
            </Funnel>
          </Flex>
        </Flex>
      </FormProvider>
    </VStack>
  );
}
