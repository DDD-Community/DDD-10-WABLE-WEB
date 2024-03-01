import {
  Button,
  Flex,
  Heading,
  Input,
  InputGroup,
  InputRightAddon,
  Tag,
  Text,
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';
import { DEFAULT_REQUIRED_OPTIONS } from '@/constants/group/required-options';
import { useRef, useState } from 'react';
import { useForm } from 'react-hook-form';
import { GroupSchema, groupSchema } from '@/models/group';
import { zodResolver } from '@hookform/resolvers/zod';

export function CreateGroupForm({ onSuccess }: { onSuccess?: () => void }) {
  const { handleSubmit, watch, setValue, register } = useForm<GroupSchema>({
    resolver: zodResolver(groupSchema),
    defaultValues: {
      requiredOptions: [],
    },
  });
  const [requiredOptions, setRequiredOptions] = useState<string[]>(
    DEFAULT_REQUIRED_OPTIONS,
  );
  const requiredOptionInputRef = useRef<HTMLInputElement>(null);

  function _handleSubmit(group: GroupSchema) {
    /**
     * @todo api 연결하기
     */
    console.log(group);
  }

  function handleClickRequiredOption(requiredOption: string) {
    return () => {
      const currentRequiredOptions = watch('requiredOptions');
      const isAlreadyAdded = currentRequiredOptions.includes(requiredOption);

      if (isAlreadyAdded) {
        setValue(
          'requiredOptions',
          currentRequiredOptions.filter((option) => option !== requiredOption),
        );

        return;
      }

      setValue('requiredOptions', [...currentRequiredOptions, requiredOption]);
    };
  }

  function handleClickAddRequiredOption() {
    if (
      !requiredOptionInputRef.current ||
      !requiredOptionInputRef.current.value
    )
      return;

    const newRequiredOption = requiredOptionInputRef.current.value;
    const isAlreadyExist = requiredOptions.includes(newRequiredOption);

    if (isAlreadyExist) return;

    const currentRequiredOptions = watch('requiredOptions');

    setValue('requiredOptions', [...currentRequiredOptions, newRequiredOption]);
    setRequiredOptions([...requiredOptions, newRequiredOption]);

    requiredOptionInputRef.current.value = '';
  }

  function isSelectedRequiredOption(requiredOption: string) {
    const currentRequiredOptions = watch('requiredOptions');

    return currentRequiredOptions.includes(requiredOption);
  }

  return (
    <form style={{ width: '100%' }} onSubmit={handleSubmit(_handleSubmit)}>
      <Flex
        maxW="456px"
        h="100%"
        flexDirection="column"
        alignItems="flex-start"
      >
        <Flex
          w="100%"
          h="100%"
          gap="20px"
          flexDirection="column"
          alignItems="flex-start"
        >
          <Heading fontSize="18px" color="waggle.gray.900">
            그룹 만들기
          </Heading>
          <Flex
            w="100%"
            flexDirection="column"
            gap="26px"
            alignItems="flex-start"
            justifyContent="space-between"
          >
            <Flex
              w="100%"
              flexDirection="column"
              gap="12px"
              alignItems="flex-start"
            >
              <Text size="sm" color="black">
                그룹명
              </Text>
              <Input
                size="lg"
                placeholder="그룹명"
                bg="white"
                fontSize="16x"
                color="waggle.gray.400"
                {...register('name')}
              />
            </Flex>
            <Flex
              w="100%"
              flexDirection="column"
              gap="12px"
              alignItems="flex-start"
            >
              <Text size="sm" color="black">
                필수 프로필 정보
              </Text>
              <Flex
                w="100%"
                gap="26px"
                flexDirection="column"
                alignItems="flex-start"
              >
                <Flex w="100%" gap="8px">
                  {requiredOptions.map((requiredOption) => (
                    <Tag
                      key={requiredOption}
                      variant={
                        isSelectedRequiredOption(requiredOption)
                          ? 'solid'
                          : 'outline'
                      }
                      px="12px"
                      py="4px"
                      alignItems="center"
                      gap="8px"
                      cursor="pointer"
                      onClick={handleClickRequiredOption(requiredOption)}
                    >
                      <Text lineHeight="24px">{requiredOption}</Text>
                      {isSelectedRequiredOption(requiredOption) && (
                        <SmallCloseIcon opacity="0.5" />
                      )}
                    </Tag>
                  ))}
                </Flex>
                <InputGroup size="lg">
                  <Input
                    ref={requiredOptionInputRef}
                    size="lg"
                    placeholder="질문을 직접 입력해주세요."
                    bg="white"
                    fontSize="16x"
                    color="waggle.gray.400"
                  />
                  <InputRightAddon
                    cursor="pointer"
                    onClick={handleClickAddRequiredOption}
                  >
                    +
                  </InputRightAddon>
                </InputGroup>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
        <Flex flex="1" w="100%" gap="18px">
          <Button flex="1" variant="solid" size="lg">
            취소
          </Button>
          <Button
            flex="1"
            variant="primary"
            size="lg"
            onClick={() => {
              onSuccess?.();
            }}
          >
            완료
          </Button>
        </Flex>
      </Flex>
    </form>
  );
}
