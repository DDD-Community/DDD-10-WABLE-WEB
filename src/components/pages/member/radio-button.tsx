import { Box, type UseRadioProps, useRadio } from '@chakra-ui/react';

export default function RadioButton(
  props: React.PropsWithChildren<UseRadioProps>,
) {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        cursor="pointer"
        borderWidth="1px"
        borderColor="gray.500"
        borderRadius="6px"
        _checked={{
          bg: 'gray.500',
          color: 'white',
          borderColor: 'teal.600',
        }}
        px={6}
        py={2}
        fontWeight={600}
        whiteSpace="nowrap"
      >
        {props.children}
      </Box>
    </Box>
  );
}
