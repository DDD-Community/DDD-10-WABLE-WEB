import { Fragment } from 'react';
import { Flex, Divider, Heading } from '@chakra-ui/react';
import { isLastIndex } from '@/utils/array';
import { isLessOrEqual } from '@/utils/number';

type StepperProps<T> = {
  steps: readonly T[];
  activeStepIndex: number;
};

export function Stepper<T>({ steps, activeStepIndex }: StepperProps<T>) {
  return (
    <Flex gap="12px">
      {steps.map((_, index) => {
        return (
          <Fragment key={index}>
            <Flex
              w="36px"
              h="36px"
              borderRadius="50%"
              bg={
                isLessOrEqual(index, activeStepIndex) ? 'black' : 'transparent'
              }
              border="1px"
              borderColor={
                isLessOrEqual(index, activeStepIndex) ? 'black' : '#d9d9d9'
              }
              justifyContent="center"
              alignItems="center"
            >
              <Heading
                size="xs"
                color={
                  isLessOrEqual(index, activeStepIndex) ? 'point' : 'black'
                }
              >
                {index + 1}
              </Heading>
            </Flex>
            {!isLastIndex(index, steps as T[]) && (
              <Flex w="56px" alignItems="center">
                <Divider
                  borderColor={
                    isLessOrEqual(index + 1, activeStepIndex)
                      ? 'black'
                      : '#d9d9d9'
                  }
                  borderBottomWidth="2px"
                />
              </Flex>
            )}
          </Fragment>
        );
      })}
    </Flex>
  );
}
