import { useState } from 'react';
import { InputGroup, Input, InputRightElement } from '@chakra-ui/react';

import ViewIcon from '@/assets/icons/view-icon.svg';
import ViewOffIcon from '@/assets/icons/view-off-icon.svg';

interface Props {
  id: string;
  placeholder: string;
  value: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}

export default function PasswordInput({
  id,
  placeholder = 'Enter password',
  value,
  onChange,
}: Props) {
  const [show, setShow] = useState(false);
  const handleClick = () => setShow(!show);

  return (
    <InputGroup size="lg">
      <Input
        id={id}
        type={show ? 'text' : 'password'}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
      <InputRightElement width="4.5rem">
        {show ? (
          <ViewIcon onClick={handleClick} cursor="pointer" />
        ) : (
          <ViewOffIcon onClick={handleClick} cursor="pointer" />
        )}
      </InputRightElement>
    </InputGroup>
  );
}
