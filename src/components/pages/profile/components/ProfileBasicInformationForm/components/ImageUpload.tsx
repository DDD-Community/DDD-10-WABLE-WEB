import { Box, Flex, Input } from '@chakra-ui/react';

import EditIcon from '@/assets/icons/edit.svg';
import { DragEvent, useRef } from 'react';
import Image from 'next/image';

/**
 * @todo 백엔드의 이미지 업로드 api와 연결 후 미리 보여주기 필요
 */
export function ImageUpload() {
  const inputRef = useRef<HTMLInputElement>(null);

  function handleDragOver(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    event.stopPropagation();
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    event.stopPropagation();

    const { files } = event.dataTransfer;
  }

  function handleOpenFileUpload() {
    inputRef.current?.click();
  }

  return (
    <Flex
      maxW="412px"
      w="100%"
      h="168px"
      alignItems="center"
      justifyContent="center"
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        position="relative"
        borderRadius="12px"
        w="168px"
        h="168px"
        bg="gray.400"
        cursor="pointer"
        onClick={handleOpenFileUpload}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        <Image
          width={82}
          height={119}
          src="/images/waggle.png"
          alt="와글이 기본 이미지"
        />
        <Input ref={inputRef} display="none" type="file" accept="image/*" />
        <Flex
          justifyContent="center"
          alignItems="center"
          position="absolute"
          borderRadius="8px"
          bottom="-10px"
          right="-10px"
          w="54px"
          h="54px"
          boxShadow="0px 2px 6px rgba(0, 0, 0, 0.06)"
          bg="white"
        >
          <EditIcon />
        </Flex>
      </Flex>
    </Flex>
  );
}
