import { ProfileSteps } from '@/pages/profile/create';
import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Step,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  Stepper,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

export function ProfileBasicInformationForm({
  steps,
  activeStepIndex,
}: {
  steps: ProfileSteps;
  activeStepIndex: number;
}) {
  const { register } = useFormContext();

  return (
    <Flex w="100%" gap="32px" flexDirection="column" alignItems="center">
      <Stepper index={1} w="264px">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepNumber />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>
            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      <Flex
        w="100%"
        bg="white"
        padding="24px"
        borderRadius="16px"
        justifyContent="center"
      >
        <Flex maxW="412px" w="100%" flexDirection="column" gap="20px">
          <Box>이미지 업로드</Box>
          <FormControl>
            <FormLabel htmlFor="name">이름*</FormLabel>
            <Input
              id="name"
              placeholder="이름을 입력해주세요."
              {...register('name')}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="name">닉네임</FormLabel>
            <Input
              id="name"
              placeholder="이름을 입력해주세요."
              {...register('name')}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="name">성별</FormLabel>
            <Input
              id="name"
              placeholder="이름을 입력해주세요."
              {...register('name')}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="name">생일</FormLabel>
            <Input
              id="name"
              placeholder="이름을 입력해주세요."
              {...register('name')}
            />
          </FormControl>
          <Button type="submit" variant="primary">
            다음으로
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
