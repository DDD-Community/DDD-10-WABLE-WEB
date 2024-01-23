import { Box, Button, Center, Flex, Heading } from '@chakra-ui/react';

import { Icons } from '@/components/common/icons';
import { DividerWithContent } from '@/components/common/divider-with-content';
import { LoginForm } from '@/components/pages/login/login-form';

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
          <DividerWithContent content="or" />
          <LoginForm />
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
