import {
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
import { GENDER_OPTIONS, ProfileSchema } from '@/models/profile';
import { ChangeEvent, useState } from 'react';

/**
 * @todo year, month, day 모두 하나의 에러 메세지로 출력하기
 */
export function ProfileBasicInformationForm() {
  const {
    register,
    control,
    formState: { errors },
  } = useFormContext<ProfileSchema>();
  /**
   * @todo hook으로 분리하기
   */
  const [currentDate, setCurrentDate] = useState(
    new Date(new Date().getFullYear(), 0, 1),
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
    <Flex
      w="100%"
      flexDirection="column"
      alignItems="center"
      gap="24px"
      bg="white"
      borderRadius="16px"
      padding="24px"
    >
      <Flex
        w="100%"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap="44px"
      >
        <C.ImageUpload />
        <Flex maxW="412px" w="100%" flexDirection="column" gap="16px">
          <FormControl isInvalid={!!errors.name}>
            <FormLabel htmlFor="name">
              <Flex gap="12px" alignItems="flex-end">
                <Heading size="sm">이름*</Heading>
                <FormErrorMessage m="0">
                  {errors.name?.message}
                </FormErrorMessage>
              </Flex>
            </FormLabel>
            <Input
              id="name"
              size="lg"
              placeholder="이름을 입력해주세요."
              {...register('name')}
            />
          </FormControl>
          <FormControl isInvalid={!!errors.nickname}>
            <FormLabel htmlFor="nickname">
              <Flex gap="12px" alignItems="flex-end">
                <Heading size="sm">닉네임</Heading>
                <FormErrorMessage m="0">
                  {errors.nickname?.message}
                </FormErrorMessage>
              </Flex>
            </FormLabel>
            <Input
              id="nickname"
              size="lg"
              placeholder="이름을 입력해주세요."
              {...register('nickname')}
            />
          </FormControl>
          <FormControl isInvalid={!!errors.gender}>
            <FormLabel htmlFor="gender">
              <Flex gap="12px" alignItems="flex-end">
                <Heading size="sm">성별*</Heading>
                <FormErrorMessage m="0">
                  {errors.gender?.message}
                </FormErrorMessage>
              </Flex>
            </FormLabel>
            <C.RadioGroup
              name="gender"
              control={control}
              options={GENDER_OPTIONS}
            />
          </FormControl>
          <FormControl
            isInvalid={!!errors.year || !!errors.month || !!errors.day}
          >
            <FormLabel htmlFor="birthday">
              <Flex gap="12px" alignItems="flex-end">
                <Heading size="sm">생일*</Heading>
                <FormErrorMessage m="0">
                  {errors.year?.message ||
                    errors.month?.message ||
                    errors.day?.message}
                </FormErrorMessage>
              </Flex>
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
      </Flex>
      <Button type="submit" variant="primary" maxW="412px" w="100%" h="48px">
        다음으로
      </Button>
    </Flex>
  );
}
