import Link from 'next/link';
import { Controller, SubmitHandler, useForm } from 'react-hook-form';
import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Spacer,
  Switch,
} from '@chakra-ui/react';
import PasswordInput from '@/components/common/input/password-input';
import { Form } from './styles';

interface IFormValues {
  email: string;
  password: string;
}

export function LoginForm() {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <Form autoComplete="off" onSubmit={handleSubmit(onSubmit)}>
      <FormControl isInvalid={!!errors.email}>
        <Flex align="center">
          <FormLabel>이메일</FormLabel>
          <FormErrorMessage mt={0} marginInlineEnd={3} marginBottom={2}>
            {errors.email?.message}
          </FormErrorMessage>
        </Flex>
        <Input
          type="email"
          placeholder="mail@simmmple.com"
          size="lg"
          {...register('email', {
            required: '이메일을 입력해 주세요.',
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: '이메일 형식이 올바르지 않습니다.',
            },
          })}
        />
      </FormControl>
      <FormControl isInvalid={!!errors.password}>
        <Flex align="center">
          <FormLabel>비밀번호</FormLabel>
          <FormErrorMessage mt={0} marginInlineEnd={3} marginBottom={2}>
            {errors.password?.message}
          </FormErrorMessage>
        </Flex>
        <Controller
          name="password"
          control={control}
          rules={{
            required: { value: true, message: '비밀번호를 입력해주세요.' },
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
      <Flex align="center">
        <Switch id="save-login-info" mr={3} colorScheme="black" />
        <FormLabel htmlFor="save-login-info" mb={0}>
          로그인 정보 저장
        </FormLabel>
        <Spacer />
        <Link href="/">
          <b>비밀번호를 잊으셨나요?</b>
        </Link>
      </Flex>
      <Button type="submit" variant="primary" size="lg" width="full">
        로그인
      </Button>
    </Form>
  );
}
