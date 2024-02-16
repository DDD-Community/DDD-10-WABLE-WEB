import Image from 'next/image';
import Link from 'next/link';
import { Heading, VStack, Button, Text, HStack } from '@chakra-ui/react';
import SignUpForm from '@/components/pages/sign-up/sign-up-form';
import {
  SignUpContainer,
  SignUpBackground,
  SignUpCardSection,
  ArrowIconWrapper,
} from './styles';
import SignUpBackgroundImage from '@/assets/images/sign-up-background.png';
import GoogleIcon from '@/assets/icons/google.svg';
import ArrowBackIcon from '@/assets/icons/arrow-back.svg';
import { DividerWithContent } from '@/components/common/divider-with-content';
import { ROUTES } from '@/constants/routes';

export default function SignUp() {
  return (
    <SignUpContainer>
      <SignUpBackground>
        <Image src={SignUpBackgroundImage} alt="background" />
      </SignUpBackground>
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
          <HStack justifyContent="flex-start" width="full">
            <Text color="waggle.gray.700">계정이 있으신가요?</Text>
            <Link href={ROUTES.LOGIN}>
              <b>로그인하기</b>
            </Link>
          </HStack>
        </VStack>
      </SignUpCardSection>
    </SignUpContainer>
  );
}
