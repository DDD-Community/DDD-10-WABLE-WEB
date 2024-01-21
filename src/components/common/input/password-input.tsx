import { InputGroup, Input, InputRightElement, Button } from '@chakra-ui/react';
import { ViewIcon, ViewOffIcon } from '@chakra-ui/icons';
import { useState } from 'react';

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
          <ViewOffIcon onClick={handleClick} />
        ) : (
          <ViewIcon onClick={handleClick} />
        )}
      </InputRightElement>
    </InputGroup>
  );
}
