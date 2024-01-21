import {
  AbsoluteCenter,
  Box,
  Button,
  Center,
  Divider,
  Flex,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  FormLabel,
  Heading,
  Input,
  Spacer,
  Switch,
} from '@chakra-ui/react';

import { Icons } from '@/components/common/icons';

export default function Login() {
  return (
    <Flex>
      <Center width="50%" height="100vh">
        <Flex direction="column" width="full" maxWidth={413} gap={5}>
          <Heading size="lg" mb={8}>
            로그인
          </Heading>
          <Button leftIcon={<Icons.google />} size="lg" width="full">
            구글 계정으로 로그인
          </Button>
          <Box position="relative" padding={3}>
            <Divider />
            <AbsoluteCenter bg="white" px={4}>
              or
            </AbsoluteCenter>
          </Box>
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
          <Box textAlign="center">
            <span>계정이 없으신가요? </span>
            <Button variant="link">회원가입하기</Button>
          </Box>
        </Flex>
      </Center>
      <Center width="50%" height="100vh" background="gray">
        Logo
      </Center>
    </Flex>
  );
}
