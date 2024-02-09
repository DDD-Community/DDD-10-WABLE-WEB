import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  HStack,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Select,
  Text,
  UseRadioProps,
  useRadio,
  useRadioGroup,
} from '@chakra-ui/react';
import { ReactNode } from 'react';
import { useFormContext } from 'react-hook-form';
import { ChevronDownIcon } from '@chakra-ui/icons';

const GENDER_OPTIONS = ['남성', '여성'];

export function ProfileBasicInformationForm() {
  const { register } = useFormContext();
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: 'gender',
    defaultValue: '남성',
    onChange: console.log,
  });
  const group = getRootProps();

  return (
    <Flex w="100%" gap="32px" flexDirection="column" alignItems="center">
      <Flex
        w="100%"
        bg="white"
        padding="24px"
        borderRadius="16px"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap="24px"
      >
        <Flex maxW="412px" w="100%" flexDirection="column" gap="16px">
          <Box>이미지 업로드</Box>
          <FormControl>
            <FormLabel htmlFor="name">
              <Heading size="sm">이름*</Heading>
            </FormLabel>
            <Input
              id="name"
              size="lg"
              placeholder="이름을 입력해주세요."
              {...register('name')}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="nickname">
              <Heading size="sm">닉네임</Heading>
            </FormLabel>
            <Input
              id="nickname"
              size="lg"
              placeholder="이름을 입력해주세요."
              {...register('name')}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="gender">
              <Heading size="sm">성별*</Heading>
            </FormLabel>
            <HStack {...group} gap="18px">
              {GENDER_OPTIONS.map((option) => {
                const radio = getRadioProps({ value: option });

                return (
                  <Radio key={option} {...radio}>
                    {option}
                  </Radio>
                );
              })}
            </HStack>
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="birthday">
              <Heading size="sm">생일*</Heading>
            </FormLabel>
            <Flex gap="32px">
              <Flex gap="8px" flex="1.25" alignItems="flex-end">
                <Select icon={<ChevronDownIcon />}>
                  <option>2021</option>
                </Select>
                <FormLabel m="0" color="gray.400">
                  <Text>년</Text>
                </FormLabel>
              </Flex>
              <Flex gap="8px" flex="1" alignItems="flex-end">
                <Select icon={<ChevronDownIcon />}>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                    <option key={month}>{month}</option>
                  ))}
                </Select>
                <FormLabel m="0" color="gray.400">
                  <Text>월</Text>
                </FormLabel>
              </Flex>
              <Flex gap="8px" flex="1" alignItems="flex-end">
                <Select icon={<ChevronDownIcon />}>
                  {Array.from({ length: 31 }, (_, i) => i + 1).map((day) => (
                    <option key={day}>{day}</option>
                  ))}
                </Select>
                <FormLabel m="0" color="gray.400">
                  <Text>일</Text>
                </FormLabel>
              </Flex>
            </Flex>
          </FormControl>
        </Flex>
        <Button type="submit" variant="primary" maxW="412px" w="100%" h="48px">
          다음으로
        </Button>
      </Flex>
    </Flex>
  );
}

function Radio(props: UseRadioProps & { children: ReactNode }) {
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
        <Heading size="sm">{props.children}</Heading>
      </Flex>
    </Box>
  );
}
