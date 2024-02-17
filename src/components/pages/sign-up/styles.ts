import styled from '@emotion/styled';

const SignUpContainer = styled.div`
  position: relative;
  height: 100vh;
`;

const LogoWrapper = styled.div`
  position: absolute;
  top: 48px;
  left: 48px;
`;

const SignUpCardSection = styled.section`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 40px;
  align-items: center;
  width: 458px;
  padding: 45px 50px;
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
  LogoWrapper,
  SignUpCardSection,
  ArrowIconWrapper,
  Form,
};
