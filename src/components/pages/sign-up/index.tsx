import Image from 'next/image';
import { Heading, VStack, Button } from '@chakra-ui/react';
import SignUpForm from '@/components/pages/sign-up/sign-up-form';
import {
  SignUpContainer,
  SignUpBackground,
  SignUpCardSection,
  ArrowIconWrapper,
} from './styles';
import SignUpBackgroundImage from '@/assets/images/sign-up-background.png';
import Google from '@/assets/icons/google.svg';
import ArrowBack from '@/assets/icons/arrow-back.svg';
import { DividerWithContent } from '@/components/common/divider-with-content';

export default function SignUp() {
  return (
    <SignUpContainer>
      <SignUpBackground>
        <Image src={SignUpBackgroundImage} alt="background" />
      </SignUpBackground>
      <SignUpCardSection>
        <ArrowIconWrapper>
          <ArrowBack />
        </ArrowIconWrapper>
        <Heading size="lg">회원가입</Heading>
        <VStack spacing="25px" width="full">
          <Button leftIcon={<Google />} size="lg" width="full">
            구글 계정으로 회원가입
          </Button>
          <DividerWithContent content="or" />
          <SignUpForm />
        </VStack>
      </SignUpCardSection>
    </SignUpContainer>
  );
}
