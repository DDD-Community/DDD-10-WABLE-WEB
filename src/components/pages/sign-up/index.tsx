import Image from 'next/image';
import { Heading, VStack, Button, Center, Flex } from '@chakra-ui/react';
import Logo from '@/assets/images/logo-white.svg';
import SignUpForm from '@/components/pages/sign-up/sign-up-form';
import {
  SignUpContainer,
  SignUpCardSection,
  ArrowIconWrapper,
  LogoWrapper,
} from './styles';
import SignUpBackgroundImage from '@/assets/images/sign-up-background.png';
import GoogleIcon from '@/assets/icons/google.svg';
import ArrowBackIcon from '@/assets/icons/arrow-back.svg';
import { DividerWithContent } from '@/components/common/divider-with-content';

export default function SignUp() {
  return (
    <SignUpContainer>
      <LogoWrapper>
        <Logo />
      </LogoWrapper>
      <Flex
        justifyContent="center"
        alignItems="flex-end"
        height="50%"
        bg="black"
        borderRadius="0 0 22px 22px"
      >
        <Center width="1440px" paddingBottom="15px">
          <Image src={SignUpBackgroundImage} alt="background" width="1270" />
        </Center>
      </Flex>
      <SignUpCardSection>
        <ArrowIconWrapper>
          <ArrowBackIcon />
        </ArrowIconWrapper>
        <Heading size="lg">회원가입</Heading>
        <VStack spacing="25px" width="full">
          <Button leftIcon={<GoogleIcon />} size="lg" width="full">
            구글 계정으로 회원가입
          </Button>
          <DividerWithContent content="or" />
          <SignUpForm />
        </VStack>
      </SignUpCardSection>
    </SignUpContainer>
  );
}
