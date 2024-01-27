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
  activeStep,
}: {
  steps: ProfileSteps;
  activeStep: number;
}) {
  const { register } = useFormContext();

  return (
    <Flex w="100%" gap="60px" flexDirection="column" alignItems="center">
      <Stepper index={activeStep} w="100%">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepNumber />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>
            <StepSeparator style={{ color: 'black' }} />
          </Step>
        ))}
      </Stepper>
      <Box>이미지 업로드</Box>
      <Flex flexDirection="column" gap="20px">
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
      </Flex>
      <Button>다음으로</Button>
    </Flex>
  );
}
