import {
  Box,
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Heading,
  Input,
  Select,
  Text,
} from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';
import { ChevronDownIcon } from '@chakra-ui/icons';
import * as C from './components';
import { GENDER_OPTIONS } from '@/models/profile';
import { ChangeEvent, useState } from 'react';

/**
 * @todo year, month, day 모두 하나의 에러 메세지로 출력하기
 */
export function ProfileBasicInformationForm() {
  const { register, control } = useFormContext();
  const [currentDate, setCurrentDate] = useState(
    new Date(new Date().getFullYear(), 0, 1),
  );
  console.log(
    Array.from(
      {
        length: new Date(
          currentDate.getFullYear(),
          currentDate.getMonth() + 1,
          0,
        ).getDate(),
      },
      (_, i) => i + 1,
    ),
  );

  function handleChangeYear(event: ChangeEvent<HTMLSelectElement>) {
    setCurrentDate(
      new Date(
        Number(event.target.value),
        currentDate.getMonth(),
        currentDate.getDate(),
      ),
    );
  }

  function handleChangeMonth(event: ChangeEvent<HTMLSelectElement>) {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        Number(event.target.value) - 1,
        currentDate.getDate(),
      ),
    );
  }

  function handleChangeDay(event: ChangeEvent<HTMLSelectElement>) {
    setCurrentDate(
      new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        Number(event.target.value),
      ),
    );
  }

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
            {/**
             * @todo focus 시키기
             */}
            <FormLabel htmlFor="name">
              <Heading size="sm">이름*</Heading>
              <FormErrorMessage>이름을 입력해주세요.</FormErrorMessage>
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
              {...register('nickname')}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="gender">
              <Heading size="sm">성별*</Heading>
              <FormErrorMessage>성별을 선택해주세요.</FormErrorMessage>
            </FormLabel>
            <C.RadioGroup
              name="gender"
              control={control}
              options={GENDER_OPTIONS}
            />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="birthday">
              <Heading size="sm">생일*</Heading>
              <FormErrorMessage>생일을 입력해주세요.</FormErrorMessage>
            </FormLabel>
            <Flex gap="32px">
              <Flex gap="8px" flex="1.25" alignItems="flex-end">
                <Select
                  icon={<ChevronDownIcon />}
                  {...register('year', {
                    onChange: handleChangeYear,
                  })}
                  defaultValue=""
                >
                  <option hidden disabled value="">
                    {currentDate.getFullYear()}
                  </option>
                  {Array.from(
                    { length: 100 },
                    (_, i) => new Date().getFullYear() - i,
                  ).map((year) => (
                    <option key={year} value={year}>
                      {year}
                    </option>
                  ))}
                </Select>
                <FormLabel m="0" color="gray.400">
                  <Text>년</Text>
                </FormLabel>
              </Flex>
              <Flex gap="8px" flex="1" alignItems="flex-end">
                <Select
                  icon={<ChevronDownIcon />}
                  {...register('month', {
                    onChange: handleChangeMonth,
                  })}
                  defaultValue=""
                >
                  <option hidden disabled value="">
                    1
                  </option>
                  {Array.from({ length: 12 }, (_, i) => i + 1).map((month) => (
                    <option key={month} value={month}>
                      {month}
                    </option>
                  ))}
                </Select>
                <FormLabel m="0" color="gray.400">
                  <Text>월</Text>
                </FormLabel>
              </Flex>
              <Flex gap="8px" flex="1" alignItems="flex-end">
                <Select
                  icon={<ChevronDownIcon />}
                  {...register('day', {
                    onChange: handleChangeDay,
                  })}
                  defaultValue=""
                >
                  <option hidden disabled value="">
                    1
                  </option>
                  {Array.from(
                    {
                      length: new Date(
                        currentDate.getFullYear(),
                        currentDate.getMonth() + 1,
                        0,
                      ).getDate(),
                    },
                    (_, i) => i + 1,
                  ).map((day) => (
                    <option key={day} value={day}>
                      {day}
                    </option>
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
