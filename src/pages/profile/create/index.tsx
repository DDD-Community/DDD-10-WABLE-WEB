import { useFunnel } from '@/hooks/common/useFunnel';
import {
  ProfileAdditionalInformationSchema,
  ProfileBaseInformationSchema,
  mapProfileToRequestDto,
  profileAdditionalInformationSchema,
  profileBaseInformationSchema,
} from '@/models/profile';
import { Flex, VStack, Heading, Text } from '@chakra-ui/react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  AdditionalInformationForm,
  BaseInformation,
  CreateProfileComplete,
} from '@/components/pages/profile';
import { Stepper } from '@/components/pages/profile';
import { Header } from '@/components/pages/profile';
import LogoutIcon from '@/assets/icons/logout.svg';
import { useCreateUserProfile } from '@/hooks/queries/profile/useCreateUserProfile';

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
  const profileAdditionalInformationForm =
    useForm<ProfileAdditionalInformationSchema>({
      resolver: zodResolver(profileAdditionalInformationSchema),
    });
  const { mutate } = useCreateUserProfile({
    onSuccess: () => {
      setStep('프로필 상세 정보 입력 - 완료');
    },
  });

  function handleSubmitProfileBaseInformation() {
    setStep('프로필 상세 정보 입력 - MBTI 및 관심사');
  }

  function handleSubmitProfileAdditionalInformation(
    profileAdditionalInformation: ProfileAdditionalInformationSchema,
  ) {
    const profileBaseInformation = profileBaseInformationForm.getValues();
    const profile = mapProfileToRequestDto({
      ...profileBaseInformation,
      ...profileAdditionalInformation,
    });

    mutate(profile);
  }

  function handleClickGoBackButton() {
    setStep('프로필 상세 정보 입력 - 기본 정보');
  }

  function getIndex(step: ProfileSteps[number]) {
    return STEPS.indexOf(step);
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
          <Heading size="md">새로운 그룹 프로필 정보 입력</Heading>
          <Stepper steps={STEPS} activeStepIndex={getIndex(step)} />
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
                  <BaseInformation
                    onSubmit={handleSubmitProfileBaseInformation}
                  />
                </FormProvider>
              </Funnel.Step>
              <Funnel.Step name="프로필 상세 정보 입력 - MBTI 및 관심사">
                <FormProvider {...profileAdditionalInformationForm}>
                  <AdditionalInformationForm
                    onSubmit={handleSubmitProfileAdditionalInformation}
                    onClickGoBackButton={handleClickGoBackButton}
                  />
                </FormProvider>
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
