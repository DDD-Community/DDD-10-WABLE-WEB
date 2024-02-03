import { isLastIndex } from '@/utils/array';
import { isLessThanEqual } from '@/utils/number';
import { Flex, Divider, Heading } from '@chakra-ui/react';
import { Fragment } from 'react';

export function Stepper<T>({
  steps,
  activeStepIndex,
}: {
  steps: readonly T[];
  activeStepIndex: number;
}) {
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
                isLessThanEqual(index, activeStepIndex)
                  ? 'black'
                  : 'transparent'
              }
              border="1px"
              borderColor={
                isLessThanEqual(index, activeStepIndex) ? 'black' : '#d9d9d9'
              }
              justifyContent="center"
              alignItems="center"
            >
              <Heading
                size="xs"
                color={
                  isLessThanEqual(index, activeStepIndex) ? 'point' : 'black'
                }
              >
                {index + 1}
              </Heading>
            </Flex>
            {!isLastIndex(index, steps as T[]) && (
              <Flex w="56px" alignItems="center">
                <Divider
                  borderColor={
                    isLessThanEqual(index + 1, activeStepIndex)
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
