import { DEFAULT_REQUIRED_OPTIONS } from '@/constants/group/required-options';
import GNBLayout from '@/layouts/gnb-layout';
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
import { useForm } from 'react-hook-form';
import { GroupSchema, groupSchema } from '@/models/group';
import { zodResolver } from '@hookform/resolvers/zod';
import { useRef, useState } from 'react';
import Profile from '@/components/pages/home/profile';
import { SmallCloseIcon } from '@chakra-ui/icons';
import DashboardItem from '@/components/common/dashboard-item';

export default function CreateGroup() {
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
    <GNBLayout>
      <Flex
        w="100%"
        h="100%"
        gap="24px"
        px="24px"
        flexDirection="column"
        justifyContent="flex-start"
      >
        <Heading fontSize="24px">새로운 그룹을 만들어보세요!</Heading>
        <Flex
          w="100%"
          h="100%"
          gap="16px"
          flexDirection="column"
          justifyContent="flex-start"
        >
          <Profile
            src="https://s3-alpha-sig.figma.com/img/b940/caf9/f3a52bcc9317c793ebc094db911b237b?Expires=1708905600&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=NoEOsKXD5w0yt7BvBmmMmzPaBUYd8cPdngiFmcCsy9HcGNTEdsmEzYDjYhxQpjxQuS59kmhlPA1w4jqqMr4mBFsCBU8lukzrEuaictw8GMfrtEcFu34vpU4MhB-2iRh8mEC2ZF084ZY014Q~qoIx9GO-6Q9TRHeamBB9PuXncXfEDDMg5tloKfasLP7otc9VdKHcGoYTKm8fvwjfLqg7QLdJ2mPvgQGjM2Rsp7~GpcMBEUnmjjESOJ9wnnux2uSkTCCnLa--l06lAO3-n1p-~9R1SpYVnSr9nMAOzXD95JutarM3WbGK3vPn3waaIq5nQEzncHzwMj6LUEyW0Cil3g__"
            name="홍길동"
            email="esthera@simmmple.com"
          />
          <DashboardItem h="full">
            <form
              style={{ width: '100%' }}
              onSubmit={handleSubmit(_handleSubmit)}
            >
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
                              onClick={handleClickRequiredOption(
                                requiredOption,
                              )}
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
                  <Button flex="1" variant="primary" size="lg">
                    완료
                  </Button>
                </Flex>
              </Flex>
            </form>
          </DashboardItem>
        </Flex>
      </Flex>
    </GNBLayout>
  );
}
