import styled from '@emotion/styled';

const SignUpContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
`;

const SignUpBackground = styled.section`
  flex-shrink: 0;
  width: 1440px;
  height: 100vh;
  padding: 24px;
`;

const SignUpCardSection = styled.section`
  position: absolute;

  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;

  width: 458px;
  padding: 60px 24px 24px;

  background-color: white;
  border-radius: 16px;
  box-shadow: 0 7px 23px 0 #0000000d;
`;

const ArrowIconWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  top: 22px;
  left: 22px;
`;

const Form = styled.form`
  width: 100%;
`;

export {
  SignUpContainer,
  SignUpBackground,
  SignUpCardSection,
  ArrowIconWrapper,
  Form,
};
