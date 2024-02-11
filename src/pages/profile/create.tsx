import { ProfileBasicInformationForm } from '@/components/pages/profile/components/ProfileBasicInformationForm';
import { useFunnel } from '@/hooks/common/useFunnel';
import { ProfileSchema, profileSchema } from '@/models/profile';
import { Flex, VStack, Heading, Text } from '@chakra-ui/react';
import { FormProvider, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import * as C from '@/components/pages/profile/components';
import { Stepper } from '@/components/pages/profile/components/Stepper';
import LogoutIcon from '@/assets/icons/logout.svg';

const STEPS = [
  '프로필 상세 정보 입력 - 기본 정보',
  '프로필 상세 정보 입력 - MBTI 및 관심사',
  '프로필 상세 정보 입력 - 완료',
] as const;

export type ProfileSteps = typeof STEPS;

export default function Profile() {
  const [Funnel, step, setStep] = useFunnel({ steps: STEPS });
  const methods = useForm<ProfileSchema>({
    resolver: zodResolver(profileSchema),
  });

  function handleSubmit(profile: ProfileSchema) {
    console.log(profile);
  }

  return (
    <VStack bg="#f8f9fa">
      <C.Header />
      <FormProvider {...methods}>
        <Flex
          w="100%"
          flexDirection="column"
          justifyContent="center"
          gap="55px"
        >
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
            <Stepper steps={STEPS} activeStepIndex={0} />
            <Funnel>
              <Funnel.Step name="프로필 상세 정보 입력 - 기본 정보">
                <ProfileBasicInformationForm />
              </Funnel.Step>
            </Funnel>
          </Flex>
          <Flex
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
      </FormProvider>
    </VStack>
  );
}
