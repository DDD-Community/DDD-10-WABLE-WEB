import { Heading, VStack } from '@chakra-ui/react';
import SignUpForm from '@/components/pages/sign-up/sign-up-form';
import { Container, Section } from './styles';

export default function SignUp() {
  return (
    <Container>
      <Section>
        <VStack spacing="32px">
          <Heading size="lg">회원가입</Heading>
          <SignUpForm />
        </VStack>
      </Section>
    </Container>
  );
}
