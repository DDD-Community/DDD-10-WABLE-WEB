import Image from 'next/image';
import Link from 'next/link';
import { Button, Center, HStack, Heading, VStack } from '@chakra-ui/react';
import { DividerWithContent } from '@/components/common/divider-with-content';
import { LoginForm } from '@/components/pages/login/login-form';
import GoogleIcon from '@/assets/icons/google.svg';
import LoginImage from '@/assets/images/login-image.png';
import { LoginContainer } from './styles';
import { ROUTES } from '@/constants/routes';

export default function Login() {
  return (
    <LoginContainer>
      <Center flex="1" height="100vh">
        <VStack width="415px" gap={5}>
          <HStack width="full">
            <Heading size="lg" mb={8}>
              로그인
            </Heading>
          </HStack>
          <Button leftIcon={<GoogleIcon />} size="lg" width="full">
            구글 계정으로 로그인
          </Button>
          <DividerWithContent content="or" />
          <LoginForm />
        </VStack>
      </Center>
      <Center
        flex="1"
        position="relative"
        height="100vh"
        bg="black"
        borderRadius="25px 0 0 25px"
      >
        <Image
          src={LoginImage}
          alt="login"
          style={{ objectFit: 'contain' }}
          fill
        />
      </Center>
    </LoginContainer>
  );
}
