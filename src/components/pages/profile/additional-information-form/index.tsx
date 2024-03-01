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
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useRef, useState } from 'react';
import { MBTI } from '@/constants/mbti';
import { DEFAULT_INTERESTS } from '@/constants/interest';

export function AdditionalInformationForm() {
  const [interests, setInterests] = useState<string[]>(DEFAULT_INTERESTS);
  const inputRef = useRef<HTMLInputElement>(null);

  function handleAdditionalInterest(
    event: React.KeyboardEvent<HTMLInputElement>,
  ) {
    if (!inputRef.current?.value) return;

    if (event.key === 'Enter') {
      setInterests([...interests, inputRef.current?.value]);

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
            {MBTI.map((mbti) => (
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
            {interests.map((interest) => (
              <Flex
                key={interest}
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
                  {interest}
                </Text>
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
        <Button flex="1" bg="gray.100" color="black" border="none">
          이전
        </Button>
        <Button flex="1" variant="primary">
          건너뛰기
        </Button>
      </Flex>
    </Center>
  );
}
