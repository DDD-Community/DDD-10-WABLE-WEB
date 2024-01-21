import { useState } from 'react';
import {
  VStack,
  Input,
  FormControl,
  FormLabel,
  Button,
} from '@chakra-ui/react';
import PasswordInput from '@/components/common/input/password-input';

export default function SignUpForm() {
  const [email, setEmail] = useState('');
  function handleEmail(e: React.ChangeEvent<HTMLInputElement>) {
    setEmail(e.target.value);
  }

  const [newPassword, setNewPassword] = useState('');
  function handleNewPassword(e: React.ChangeEvent<HTMLInputElement>) {
    setNewPassword(e.target.value);
  }

  const [confirmPassword, setConfirmPassword] = useState('');
  function handleConfirmPassword(e: React.ChangeEvent<HTMLInputElement>) {
    setConfirmPassword(e.target.value);
  }

  return (
    <VStack w="100%" spacing="24px">
      <FormControl>
        <FormLabel htmlFor="email">이메일</FormLabel>
        <Input
          id="email"
          onChange={handleEmail}
          value={email}
          placeholder="mail@simmmple.com"
          size="lg"
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="new-password">비밀번호</FormLabel>
        <PasswordInput
          id="new-password"
          value={newPassword}
          onChange={handleNewPassword}
          placeholder="Min. 8 characters"
        />
      </FormControl>
      <FormControl>
        <FormLabel htmlFor="confirm-password">비밀번호 확인</FormLabel>
        <PasswordInput
          id="confirm-password"
          value={confirmPassword}
          onChange={handleConfirmPassword}
          placeholder="Min. 8 characters"
        />
      </FormControl>
      <Button w="100%" type="submit">
        제출
      </Button>
    </VStack>
  );
}
