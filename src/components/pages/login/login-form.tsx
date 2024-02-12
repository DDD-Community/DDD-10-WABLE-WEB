import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
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
import { ROUTES } from '@/constants/routes';
import { LoginFormValues } from './types';
import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import userPool from '@/lib/user-pool';

const USER_NOT_CONFIRMED_EXCEPTION = 'UserNotConfirmedException';
const NOT_AUTHORIZED_EXCEPTION = 'NotAuthorizedException';

export function LoginForm() {
  const defaultValues = {
    email: '',
    password: '',
  };

  const {
    handleSubmit,
    control,
    register,
    formState: { errors, isValid },
    setError,
  } = useForm<LoginFormValues>({ defaultValues });

  function handleLogin({ email, password }: LoginFormValues) {
    if (email.length === 0 || password.length === 0) {
      setError('root.formError', {
        message: '이메일 혹은 비밀번호를 입력해주세요.',
      });
      return;
    }

    const cognitoUser = new CognitoUser({ Username: email, Pool: userPool });
    const authenticationDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    cognitoUser.authenticateUser(authenticationDetails, {
      onSuccess: function (result) {
        const accessToken = result.getAccessToken().getJwtToken();
        console.log('accessToken', accessToken);
      },
      onFailure: function (err) {
        if (err.message == 'User is not confirmed.') {
          setError('root.serverError', {
            type: USER_NOT_CONFIRMED_EXCEPTION,
            message: '가입한 이메일을 인증해주세요.',
          });
        } else if (err.message == 'Incorrect username or password.') {
          setError('root.serverError', {
            type: NOT_AUTHORIZED_EXCEPTION,
            message: '이메일 또는 비밀번호가 잘못되었습니다.',
          });
        }
      },
    });
  }

  const errorMessages = [
    {
      condition: errors.root?.formError,
      message: errors.root?.formError?.message,
    },
    { condition: errors.email, message: errors.email?.message },
    { condition: errors.password, message: errors.password?.message },
    {
      condition: errors.root?.serverError,
      message: errors.root?.serverError?.message,
    },
  ];

  const [isFormError, setIsFormError] = useState(false);
  useEffect(() => {
    const isError = !!errors?.root && Object.keys(errors.root).length > 0;
    setIsFormError(isError);
  }, [errors.root]);

  return (
    <Form autoComplete="off" onSubmit={handleSubmit(handleLogin)}>
      <FormControl isInvalid={!!errors.email || isFormError}>
        <Flex align="center">
          <FormLabel>이메일</FormLabel>
        </Flex>
        <Input
          type="email"
          placeholder="mail@simmmple.com"
          size="lg"
          {...register('email', {
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: '이메일 형식이 올바르지 않습니다.',
            },
          })}
        />
      </FormControl>
      <FormControl isInvalid={!!errors.password || isFormError}>
        <Flex align="center">
          <FormLabel>비밀번호</FormLabel>
        </Flex>
        <Controller
          name="password"
          control={control}
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
        <Link href={ROUTES.HOME}>
          <b>비밀번호를 잊으셨나요?</b>
        </Link>
      </Flex>
      <FormControl isInvalid={!isValid}>
        {errorMessages.find((error) => error.condition) && (
          <FormErrorMessage>
            {errorMessages.find((error) => error.condition)?.message}
          </FormErrorMessage>
        )}
      </FormControl>
      <Button type="submit" variant="primary" size="lg" width="full">
        로그인
      </Button>
    </Form>
  );
}
