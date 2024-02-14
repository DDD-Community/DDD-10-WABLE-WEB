import Link from 'next/link';
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
  HStack,
  Text,
} from '@chakra-ui/react';
import PasswordInput from '@/components/common/input/password-input';
import { Form } from './styles';
import { ROUTES } from '@/constants/routes';
import { LoginFormValues } from './types';
import { AuthenticationDetails, CognitoUser } from 'amazon-cognito-identity-js';
import userPool from '@/lib/user-pool';
import { useFormRootError } from '@/hooks/common/useFormRootError';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const USER_NOT_CONFIRMED_EXCEPTION = 'UserNotConfirmedException';
const NOT_AUTHORIZED_EXCEPTION = 'NotAuthorizedException';

const LOGIN_EMAIL_KEY = 'loginEmail';

export function LoginForm() {
  const router = useRouter();

  const defaultValues = {
    email: '',
    password: '',
  };

  const {
    handleSubmit,
    control,
    register,
    formState: { errors, isValid },
    setValue,
    setError,
  } = useForm<LoginFormValues>({ defaultValues });

  const [isLoginInfoSaved, setIsLoginInfoSaved] = useState(false);
  useEffect(() => {
    const loginEmail = localStorage.getItem(LOGIN_EMAIL_KEY);

    if (loginEmail !== null) {
      setValue('email', loginEmail);
      setIsLoginInfoSaved(true);
    }
  }, []);

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

        if (isLoginInfoSaved) {
          const loginEmail = localStorage.getItem(LOGIN_EMAIL_KEY);
          if (loginEmail === null) {
            localStorage.setItem(LOGIN_EMAIL_KEY, email);
          }
        } else {
          localStorage.removeItem(LOGIN_EMAIL_KEY);
        }

        router.push(ROUTES.HOME);
      },
      onFailure: function (err) {
        if (err.code === USER_NOT_CONFIRMED_EXCEPTION) {
          setError('root.serverError', {
            type: USER_NOT_CONFIRMED_EXCEPTION,
            message: '가입한 이메일을 인증해주세요.',
          });
        } else if (err.code === NOT_AUTHORIZED_EXCEPTION) {
          setError('root.serverError', {
            type: NOT_AUTHORIZED_EXCEPTION,
            message: '이메일 또는 비밀번호가 잘못되었습니다.',
          });
        }
      },
    });
  }

  const rootErrorMessages = [
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

  const isFormError = useFormRootError(errors);

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
        <Switch
          id="save-login-info"
          mr={3}
          colorScheme="black"
          isChecked={isLoginInfoSaved}
          onChange={(e) => setIsLoginInfoSaved(e.target.checked)}
        />
        <FormLabel htmlFor="save-login-info" mb={0}>
          로그인 정보 저장
        </FormLabel>
        <Spacer />
        <Link href={ROUTES.HOME}>
          <b>비밀번호를 잊으셨나요?</b>
        </Link>
      </Flex>
      <footer>
        <FormControl isInvalid={!isValid}>
          {rootErrorMessages.find((error) => error.condition) && (
            <FormErrorMessage>
              {rootErrorMessages.find((error) => error.condition)?.message}
            </FormErrorMessage>
          )}
        </FormControl>
        <Button
          type="submit"
          variant="primary"
          size="lg"
          width="full"
          marginTop="16px"
          marginBottom="12px"
        >
          로그인
        </Button>
        <HStack width="full" alignItems="center" justifyContent="flex-start">
          <Text color="waggle.gray.700">계정이 없으신가요?</Text>
          <Link href={ROUTES.SIGN_UP}>
            <b>회원가입하기</b>
          </Link>
        </HStack>
      </footer>
    </Form>
  );
}
