import { Center, Flex, Input } from '@chakra-ui/react';

import EditIcon from '@/assets/icons/edit.svg';
import { DragEvent, useRef } from 'react';
import Image from 'next/image';
import { useFormContext } from 'react-hook-form';
import { ProfileBaseInformationSchema } from '@/models/profile';
import { BASE_PROFILE_IMAGE } from '@/constants/profile/base-image';

/**
 * @todo upload 후 이미지 미리 보여주기
 * @todo 백엔드 이미지 업로드 API 연동하기
 */
export function ImageUpload() {
  const { getValues } = useFormContext<ProfileBaseInformationSchema>();
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
    <Center maxW="412px" w="100%" h="168px">
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
          src={getValues('profileImageUrl') ?? BASE_PROFILE_IMAGE}
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
          transition="transform 0.1s"
          _hover={{
            transform: 'scale(1.1)',
          }}
        >
          <EditIcon />
        </Flex>
      </Flex>
    </Center>
  );
}
