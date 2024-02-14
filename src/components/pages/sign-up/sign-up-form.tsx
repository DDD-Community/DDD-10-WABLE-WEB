import { useRouter } from 'next/router';
import Link from 'next/link';
import { Controller, useForm } from 'react-hook-form';
import {
  VStack,
  Input,
  FormControl,
  FormLabel,
  Button,
  FormErrorMessage,
  HStack,
  Text,
} from '@chakra-ui/react';
import PasswordInput from '@/components/common/input/password-input';
import { Form } from './styles';
import { SignUpFormValues } from './types';
import userPool from '@/lib/user-pool';
import { ROUTES } from '@/constants/routes';
import { useFormRootError } from '@/hooks/common/useFormRootError';

const USERNAME_EXISTS_EXCEPTION = 'UsernameExistsException';

export default function SignUpForm() {
  const router = useRouter();

  const defaultValues = {
    email: '',
    newPassword: '',
    confirmPassword: '',
  };

  const {
    handleSubmit,
    control,
    register,
    formState: { errors, isValid, isSubmitted },
    getValues,
    setError,
  } = useForm<SignUpFormValues>({ defaultValues });

  function handleSignUp({ email, newPassword }: SignUpFormValues) {
    userPool.signUp(email, newPassword, [], [], (error, data) => {
      if (error) {
        if (error.name === USERNAME_EXISTS_EXCEPTION) {
          setError('root.serverError', {
            type: USERNAME_EXISTS_EXCEPTION,
            message: '이미 가입된 계정입니다.',
          });
        }
        return;
      }
      alert('회원가입 완료! 이메일을 확인하여 인증 바랍니다.');
      router.push(ROUTES.LOGIN);
    });
  }

  const rootErrorMessages = [
    {
      condition: errors.root?.serverError,
      message: errors.root?.serverError?.message,
    },
  ];

  const isFormError = useFormRootError(errors);

  return (
    <Form onSubmit={handleSubmit(handleSignUp)}>
      <VStack w="100%" spacing="16px">
        <FormControl isInvalid={!!errors.email || isFormError}>
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
        <FormControl isInvalid={!!errors.newPassword || isFormError}>
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
        <VStack width="full" alignItems="flex-start" gap={0}>
          <p>* 비밀번호는 8~16자 이내로 입력해주세요.</p>
          <p>* 비밀번호는 영어, 숫자, 특수문자를 포함해야 합니다.</p>
        </VStack>
        <FormControl isInvalid={!!errors.confirmPassword || isFormError}>
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
      </VStack>
      <VStack gap="12px">
        <FormControl isInvalid={!isValid} marginTop="12px">
          {rootErrorMessages.find((error) => error.condition) && (
            <FormErrorMessage margin={0}>
              {rootErrorMessages.find((error) => error.condition)?.message}
            </FormErrorMessage>
          )}
        </FormControl>
        <Button size="lg" w="100%" type="submit" variant="primary">
          회원가입
        </Button>
        <HStack justifyContent="flex-start" width="full">
          <Text color="waggle.gray.700">계정이 있으신가요?</Text>
          <Link href={ROUTES.LOGIN}>
            <b>로그인하기</b>
          </Link>
        </HStack>
      </VStack>
    </Form>
  );
}
