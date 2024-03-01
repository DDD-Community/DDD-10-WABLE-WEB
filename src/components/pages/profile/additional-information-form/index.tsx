import {
  Button,
  Center,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
  Select,
  Text,
} from '@chakra-ui/react';
import { ChevronDownIcon } from '@chakra-ui/icons';
import { useRef, useState } from 'react';
import { MBTI } from '@/constants/profile/mbti';
import { DEFAULT_INTEREST_OPTIONS } from '@/constants/profile/interest';
import { useFormContext } from 'react-hook-form';
import { ProfileAdditionalInformationSchema } from '@/models/profile';

export function AdditionalInformationForm({
  onSubmit,
  onClickGoBackButton,
}: {
  onSubmit: (data: ProfileAdditionalInformationSchema) => void;
  onClickGoBackButton: () => void;
}) {
  const { register, handleSubmit, watch, setValue } =
    useFormContext<ProfileAdditionalInformationSchema>();
  const [interestOptions, setInterestOptions] = useState<string[]>(
    DEFAULT_INTEREST_OPTIONS,
  );
  const inputRef = useRef<HTMLInputElement>(null);
  const interests = watch('interests');

  function handleClickAdditionalInterestOption() {
    if (!inputRef.current?.value) return;

    setInterestOptions([...interestOptions, inputRef.current?.value]);
    setValue('interests', [...(interests ?? []), inputRef.current.value]);

    inputRef.current.value = '';
  }

  function handleClickInterestOption(interest: string) {
    return () => {
      if (interests?.includes(interest)) {
        setValue(
          'interests',
          interests.filter((selectedInterest) => selectedInterest !== interest),
        );
        return;
      }

      setValue('interests', [...(interests ?? []), interest]);
    };
  }

  function isSelectedInterestOption(interestOption: string) {
    return interests?.includes(interestOption);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Center maxW="412px" w="100%" gap="24px" flexDirection="column">
        <Flex w="100%" flexDirection="column" gap="16px">
          <FormControl>
            <FormLabel>
              <Heading size="sm" color="black">
                MBTI
              </Heading>
            </FormLabel>
            <Select
              icon={<ChevronDownIcon />}
              defaultValue=""
              {...register('mbti')}
            >
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
              {interestOptions.map((interestOption) => (
                <Flex
                  key={interestOption}
                  as="button"
                  type="button"
                  gap="4px"
                  h="48px"
                  paddingX="20px"
                  borderRadius="6px"
                  border="1px"
                  alignItems="center"
                  justifyItems="center"
                  borderColor={
                    isSelectedInterestOption(interestOption)
                      ? 'gray.400'
                      : 'gray.200'
                  }
                  bg={
                    isSelectedInterestOption(interestOption)
                      ? 'gray.500'
                      : 'white'
                  }
                  onClick={handleClickInterestOption(interestOption)}
                >
                  <Text
                    size="md"
                    color={
                      isSelectedInterestOption(interestOption)
                        ? 'gray.200'
                        : 'gray.400'
                    }
                  >
                    {interestOption}
                  </Text>
                </Flex>
              ))}
            </Flex>
          </FormControl>
          <InputGroup>
            <Input
              ref={inputRef}
              size="md"
              fontSize="16px"
              placeholder="관심사를 입력해주세요."
              _placeholder={{ color: 'gray.400' }}
            />
            <InputRightAddon
              onClick={handleClickAdditionalInterestOption}
              cursor="pointer"
            >
              +
            </InputRightAddon>
          </InputGroup>
        </Flex>
        <Flex w="100%" gap="18px">
          <Button
            flex="1"
            bg="gray.100"
            color="black"
            border="none"
            onClick={onClickGoBackButton}
          >
            이전
          </Button>
          <Button flex="1" variant="primary" type="submit">
            {watch('interests') || watch('mbti') ? '완료' : '건너뛰기'}
          </Button>
        </Flex>
      </Center>
    </form>
  );
}
