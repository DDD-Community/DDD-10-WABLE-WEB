import { ProfileBaseInformationSchema } from '@/models/profile';
import {
  HStack,
  useRadioGroup,
  useRadio,
  Box,
  Flex,
  Heading,
  UseRadioProps,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { Control, useController } from 'react-hook-form';

type RadioGroupProps = {
  name: keyof ProfileBaseInformationSchema;
  control: Control<ProfileBaseInformationSchema, any>;
  options: readonly string[];
};

export function RadioGroup({ name, control, options }: RadioGroupProps) {
  const { field } = useController({
    name,
    control,
  });

  const { getRootProps, getRadioProps } = useRadioGroup({
    ...field,
  });

  return (
    <HStack {...getRootProps()} gap="18px">
      {options.map((option) => (
        <Radio key={option} {...getRadioProps({ value: option })}>
          {option}
        </Radio>
      ))}
    </HStack>
  );
}

function Radio({
  children,
  ...props
}: UseRadioProps & { children: ReactNode }) {
  const { getInputProps, getRadioProps } = useRadio(props);
  const input = getInputProps();
  const radio = getRadioProps();

  return (
    <Box as="label" flex="1 0 0">
      <input {...input} />
      <Flex
        {...radio}
        cursor="pointer"
        alignItems="center"
        justifyContent="center"
        borderRadius="6px"
        paddingY="16px"
        bg="gray.100"
        _checked={{
          bg: 'black',
          color: 'white',
        }}
      >
        <Heading size="sm">{children}</Heading>
      </Flex>
    </Box>
  );
}
