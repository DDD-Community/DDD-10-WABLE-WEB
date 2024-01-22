import {
  Button,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Input,
  Spacer,
  Switch,
} from '@chakra-ui/react';

export function LoginForm() {
  return (
    <>
      <FormControl>
        <Flex align="center">
          <FormLabel>이메일</FormLabel>
          <FormHelperText mt={0} marginInlineEnd={3} marginBottom={2}>
            *helper text
          </FormHelperText>
          <FormErrorMessage mt={0} marginInlineEnd={3} marginBottom={2}>
            *error message
          </FormErrorMessage>
        </Flex>
        <Input type="email" placeholder="mail@simmmple.com" size="lg" />
      </FormControl>
      <FormControl>
        <Flex align="center">
          <FormLabel>비밀번호</FormLabel>
          <FormHelperText mt={0} marginInlineEnd={3} marginBottom={2}>
            *helper text
          </FormHelperText>
          <FormErrorMessage mt={0} marginInlineEnd={3} marginBottom={2}>
            *error message
          </FormErrorMessage>
        </Flex>
        <Input type="password" placeholder="Min. 8 characters" size="lg" />
      </FormControl>
      <Flex align="center">
        <Switch id="save-login-info" mr={3} />
        <FormLabel htmlFor="save-login-info" mb={0}>
          로그인 정보 저장
        </FormLabel>
        <Spacer />
        <Button variant="link">비밀번호를 잊으셨나요?</Button>
      </Flex>
      <Button colorScheme="blackAlpha" size="lg" width="full">
        로그인
      </Button>
    </>
  );
}
