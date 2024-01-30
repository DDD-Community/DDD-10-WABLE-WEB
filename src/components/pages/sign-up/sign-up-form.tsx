import { Controller, useForm } from 'react-hook-form';
import {
  VStack,
  Input,
  FormControl,
  FormLabel,
  Button,
  FormErrorMessage,
  HStack,
} from '@chakra-ui/react';
import PasswordInput from '@/components/common/input/password-input';
import { Form } from './styles';
import { FormValues } from './types';

export default function SignUpForm() {
  const defaultValues = {
    email: '',
    newPassword: '',
    confirmPassword: '',
  };

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
    getValues,
  } = useForm<FormValues>({ defaultValues });

  function onSubmit(values: FormValues) {
    console.log('submit', values);
  }

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <VStack w="100%" spacing="24px">
        <FormControl isInvalid={!!errors.email}>
          <HStack marginBottom="12px">
            <FormLabel htmlFor="email" margin="0px">
              <b>이메일</b>
            </FormLabel>
            <FormErrorMessage margin="0px">
              * {errors.email?.message}
            </FormErrorMessage>
          </HStack>
          <Input
            id="email"
            placeholder="mail@simmmple.com"
            size="lg"
            {...register('email', {
              required: { value: true, message: '이메일을 입력해주세요.' },
              pattern: {
                value: /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: '이메일 형식이 올바르지 않습니다.',
              },
            })}
          />
        </FormControl>
        <FormControl isInvalid={!!errors.newPassword}>
          <HStack marginBottom="12px">
            <FormLabel htmlFor="newPassword" margin="0px">
              <b>비밀번호</b>
            </FormLabel>
            <FormErrorMessage margin="0px">
              * {errors.newPassword?.message}
            </FormErrorMessage>
          </HStack>
          <Controller
            name="newPassword"
            control={control}
            rules={{
              required: { value: true, message: '비밀번호를 입력해주세요.' },
              minLength: { value: 8, message: '최소 8자를 입력해주세요.' },
              maxLength: { value: 16, message: '최대 16자를 입력해주세요.' },
              pattern: {
                value: /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])/,
                message: '비밀번호는 영어, 숫자, 특수문자를 포함해야 합니다.',
              },
            }}
            render={({ field: { onChange, value } }) => (
              <PasswordInput
                onChange={onChange}
                value={value}
                id="newPassword"
                placeholder="비밀번호를 입력해주세요."
              />
            )}
          />
        </FormControl>
        <FormControl isInvalid={!!errors.confirmPassword}>
          <HStack marginBottom="12px">
            <FormLabel htmlFor="confirmPassword" margin="0px">
              <b>비밀번호 확인</b>
            </FormLabel>
            <FormErrorMessage margin="0px">
              * {errors.confirmPassword?.message}
            </FormErrorMessage>
          </HStack>
          <Controller
            name="confirmPassword"
            control={control}
            rules={{
              required: {
                value: true,
                message: '확인 비밀번호를 입력해주세요.',
              },
              validate: (value) =>
                value === getValues('newPassword') ||
                '비밀번호가 일치하지 않습니다.',
            }}
            render={({ field: { onChange, value } }) => (
              <PasswordInput
                onChange={onChange}
                value={value}
                id="confirmPassword"
                placeholder="비밀번호를 입력해주세요."
              />
            )}
          />
        </FormControl>
        <Button size="lg" w="100%" type="submit" variant="primary">
          회원가입
        </Button>
      </VStack>
    </Form>
  );
}
