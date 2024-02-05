import styled from '@emotion/styled';

const SignUpContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
`;

const SignUpBackground = styled.section`
  padding: 24px;
  height: 100vh;
  width: 1440px;
  flex-shrink: 0;
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
  position: absolute;
  top: 22px;
  left: 22px;
  cursor: pointer;
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
