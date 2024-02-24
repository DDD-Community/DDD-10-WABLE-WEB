import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { DEFAULT_INTERESTS, MBTIS } from './data';
import { useRef, useState } from 'react';

type Interests = (typeof DEFAULT_INTERESTS)[number][];

export function AdditionalInformationForm() {
  const {} = useFormContext();
  const [interests, setInterests] = useState<Interests>(DEFAULT_INTERESTS);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleAdditionalInterest(
    event: React.KeyboardEvent<HTMLInputElement>,
  ) {
    if (!inputRef.current?.value) return;

    if (event.key === 'Enter') {
      setInterests([
        ...interests,
        { name: inputRef.current?.value, emoji: null },
      ]);

      inputRef.current.value = '';
    }
  }

  return (
    <Center maxW="412px" w="100%" gap="24px" flexDirection="column">
      <Flex w="100%" flexDirection="column" gap="16px">
        <FormControl>
          <FormLabel>
            <Heading size="sm" color="black">
              MBTI
            </Heading>
          </FormLabel>
          <Select icon={<ChevronDownIcon />} defaultValue="">
            <option hidden disabled value="">
              MBTI
            </option>
            {MBTIS.map((mbti) => (
              <option key={mbti} value={mbti}>
                {mbti}
              </option>
            ))}
          </Select>
        </FormControl>
        <FormControl>
          <FormLabel>
            <Heading size="sm" color="black">
              관심사
            </Heading>
          </FormLabel>
          <Flex flexWrap="wrap" gap="8px">
            {/**
             * @todo 선택된 interest이면 bg, color 변경하기
             * @todo 다시 선택하면 bg, color 원래대로 변경하기
             */}
            {interests.map(({ name, emoji }) => (
              <Flex
                key={name}
                as="button"
                gap="4px"
                h="48px"
                paddingX="20px"
                borderRadius="6px"
                border="1px"
                borderColor="gray.200"
                alignItems="center"
                justifyItems="center"
              >
                <Text size="md" color="gray.400">
                  {name}
                </Text>
                {emoji}
              </Flex>
            ))}
          </Flex>
        </FormControl>
        <Input
          ref={inputRef}
          onKeyUp={handleAdditionalInterest}
          size="lg"
          fontSize="16px"
          placeholder="관심사를 입력해주세요."
          _placeholder={{ color: 'gray.400' }}
        />
      </Flex>
      <Flex w="100%" gap="18px">
        <Button flex="1" bg="gray.100" color="black">
          이전
        </Button>
        <Button flex="1" bg="black" color="white" _hover={{ opacity: 0.8 }}>
          건너뛰기
        </Button>
      </Flex>
    </Center>
  );
}
