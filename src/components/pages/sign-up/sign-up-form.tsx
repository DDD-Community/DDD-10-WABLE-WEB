import { Controller, useForm } from 'react-hook-form';
import {
  VStack,
  Input,
  FormControl,
  FormLabel,
  Button,
  FormErrorMessage,
} from '@chakra-ui/react';
import PasswordInput from '@/components/common/input/password-input';
import { Form } from './styles';

interface FormValues {
  email: string;
  newPassword: string;
  confirmPassword: string;
}

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
          <FormLabel htmlFor="email">이메일</FormLabel>
          <Input
            id="email"
            placeholder="mail@simmmple.com"
            size="lg"
            {...register('email', {
              required: { value: true, message: 'Required Field' },
            })}
          />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.newPassword}>
          <FormLabel htmlFor="newPassword">비밀번호</FormLabel>
          <Controller
            name="newPassword"
            control={control}
            rules={{
              required: { value: true, message: 'Required Field' },
              minLength: { value: 8, message: 'Min 8 length' },
            }}
            render={({ field: { onChange, value } }) => (
              <PasswordInput
                onChange={onChange}
                value={value}
                id="newPassword"
                placeholder="Min. 8 characters"
              />
            )}
          />
          <FormErrorMessage>{errors.newPassword?.message}</FormErrorMessage>
        </FormControl>
        <FormControl isInvalid={!!errors.confirmPassword}>
          <FormLabel htmlFor="confirmPassword">비밀번호 확인</FormLabel>
          <Controller
            name="confirmPassword"
            control={control}
            rules={{
              required: { value: true, message: 'Required Field' },
              minLength: { value: 8, message: 'Min 8 length' },
              validate: (value) =>
                value === getValues('newPassword') || 'Password do not match',
            }}
            render={({ field: { onChange, value } }) => (
              <PasswordInput
                onChange={onChange}
                value={value}
                id="confirmPassword"
                placeholder="Min. 8 characters"
              />
            )}
          />
          <FormErrorMessage>{errors.confirmPassword?.message}</FormErrorMessage>
        </FormControl>
        <Button w="100%" type="submit">
          회원가입
        </Button>
      </VStack>
    </Form>
  );
}
