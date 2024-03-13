import { ChangeEvent, DragEvent, useRef, useState } from 'react';
import Image from 'next/image';
import axios from 'axios';
import { Center, Flex, Input } from '@chakra-ui/react';
import { useFormContext } from 'react-hook-form';

import { ProfileBaseInformationSchema } from '@/models/profile';
import { BASE_PROFILE_IMAGE } from '@/constants/profile/base-image';
import { getPresignedUrl } from '@/api/profile';
import EditIcon from '@/assets/icons/edit.svg';

export function ImageUpload() {
  const { setValue, watch } = useFormContext<ProfileBaseInformationSchema>();
  const inputRef = useRef<HTMLInputElement>(null);
  const [count, setCount] = useState(0);

  function handleDragOver(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    event.stopPropagation();
  }

  function handleDrop(event: DragEvent<HTMLDivElement>) {
    event.preventDefault();
    event.stopPropagation();

    const { files } = event.dataTransfer;
    const file = files?.[0];

    if (file) uploadImage(file);
  }

  async function handleClickInputWrapper() {
    inputRef.current?.click();
  }

  async function uploadImage(file: File) {
    const { filename, presignedUrl } = await getPresignedUrl();

    await axios.put(presignedUrl, file, {
      headers: {
        'Content-Type': file.type,
      },
    });

    setValue('profileImageUrl', { src: filename });
    setCount((prev) => prev + 1);
  }

  function handleChangeFile(event: ChangeEvent<HTMLInputElement>) {
    const { files } = event.target;
    const file = files?.[0];

    if (file) uploadImage(file);
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
        onClick={handleClickInputWrapper}
        onDragOver={handleDragOver}
        onDrop={handleDrop}
      >
        {watch('profileImageUrl')?.src ? (
          <Image
            key={count}
            src={watch('profileImageUrl')?.src as string}
            fill
            alt="프로필 사진"
            style={{ objectFit: 'cover', borderRadius: '12px' }}
            unoptimized
          />
        ) : (
          <Image
            width={82}
            height={119}
            src={BASE_PROFILE_IMAGE}
            alt="프로필 사진"
          />
        )}

        <Input
          ref={inputRef}
          display="none"
          type="file"
          accept="image/*"
          onChange={handleChangeFile}
        />
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
