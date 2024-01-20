import { ProfileSteps } from '@/pages/profile';
import {
  Box,
  Flex,
  Step,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  Stepper,
} from '@chakra-ui/react';

export default function ProfileBasicInformationForm({
  steps,
  activeStep,
}: {
  steps: ProfileSteps;
  activeStep: number;
}) {
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
      <Flex></Flex>
    </Flex>
  );
}
