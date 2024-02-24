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

import { GENDER_OPTIONS, ProfileSchema } from '@/models/profile';
import { ImageUpload, RadioGroup } from './components';
import { useDateInput } from './logic';

export function BasicInformationForm() {
  const {
    register,
    control,
    formState: { errors },
    getValues,
  } = useFormContext<ProfileSchema>();
  const { currentDate, years, months, days, handleChangeDate } = useDateInput();

  return (
    <>
      <Flex
        w="100%"
        justifyContent="center"
        alignItems="center"
        flexDirection="column"
        gap="44px"
      >
        <ImageUpload />
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
            <RadioGroup
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
                    onChange: (event) => {
                      handleChangeDate({ year: +event.target.value });
                    },
                  })}
                  defaultValue=""
                  color={getValues('year') ? 'black' : 'waggle.gray.600'}
                >
                  <option hidden disabled value="">
                    {currentDate.getFullYear()}
                  </option>
                  {years.map((year) => (
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
                    onChange: (event) => {
                      handleChangeDate({ month: +event.target.value });
                    },
                  })}
                  defaultValue=""
                  color={getValues('month') ? 'black' : 'waggle.gray.600'}
                >
                  <option hidden disabled value="">
                    1
                  </option>
                  {months.map((month) => (
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
                    onChange: (event) => {
                      handleChangeDate({ day: +event.target.value });
                    },
                  })}
                  defaultValue=""
                  color={getValues('day') ? 'black' : 'waggle.gray.600'}
                >
                  <option hidden disabled value="">
                    1
                  </option>
                  {days.map((day) => (
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
    </>
  );
}
