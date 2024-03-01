import { useFunnel } from '@/hooks/common/useFunnel';
import {
  ProfileBaseInformationSchema,
  profileBaseInformationSchema,
} from '@/models/profile';
import { Flex, VStack, Heading, Text } from '@chakra-ui/react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  AdditionalInformationForm,
  BasicInformationForm,
  CreateProfileComplete,
} from '@/components/pages/profile';
import { Stepper } from '@/components/pages/profile';
import { Header } from '@/components/pages/profile';
import LogoutIcon from '@/assets/icons/logout.svg';

const STEPS = [
  '프로필 상세 정보 입력 - 기본 정보',
  '프로필 상세 정보 입력 - MBTI 및 관심사',
  '프로필 상세 정보 입력 - 완료',
] as const;

export type ProfileSteps = typeof STEPS;

export default function CreateProfile() {
  const [Funnel, step, setStep] = useFunnel({
    steps: STEPS,
    initialStep: '프로필 상세 정보 입력 - 기본 정보',
  });
  const profileBaseInformationForm = useForm<ProfileBaseInformationSchema>({
    resolver: zodResolver(profileBaseInformationSchema),
  });

  function handleSubmitProfileBaseInformation(
    profileBasicInformation: ProfileBaseInformationSchema,
  ) {
    /**
     * @todo year, month, day 뽑아서 birthday로 만들기
     * @todo API 연결하기
     */
    setStep('프로필 상세 정보 입력 - MBTI 및 관심사');
  }

  return (
    <VStack w="100%" bg="waggle.gray.100">
      <Header />
      <Flex w="100%" flexDirection="column" justifyContent="center" gap="55px">
        <Flex
          w="100%"
          paddingX="24px"
          flexDirection="column"
          alignItems="center"
          gap="32px"
        >
          <Heading size="md">프로필 상세 정보 입력</Heading>
          <Stepper steps={STEPS} activeStepIndex={0} />
          <Flex
            w="100%"
            flexDirection="column"
            alignItems="center"
            gap="24px"
            bg="white"
            borderRadius="16px"
            padding="24px"
          >
            <Funnel>
              <Funnel.Step name="프로필 상세 정보 입력 - 기본 정보">
                <FormProvider {...profileBaseInformationForm}>
                  <BasicInformationForm
                    onSubmit={handleSubmitProfileBaseInformation}
                  />
                </FormProvider>
              </Funnel.Step>
              <Funnel.Step name="프로필 상세 정보 입력 - MBTI 및 관심사">
                <AdditionalInformationForm />
              </Funnel.Step>
              <Funnel.Step name="프로필 상세 정보 입력 - 완료">
                <CreateProfileComplete />
              </Funnel.Step>
            </Funnel>
          </Flex>
        </Flex>
        <Flex
          w="fit-content"
          padding="0 0 24px 31px"
          alignItems="center"
          gap="8px"
          cursor="pointer"
        >
          <LogoutIcon color="#36373F" />
          <Text fontSize="12px" fontWeight="700">
            로그아웃
          </Text>
        </Flex>
      </Flex>
    </VStack>
  );
}
