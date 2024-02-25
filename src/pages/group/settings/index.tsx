import GNBLayout from '@/layouts/gnb-layout';
import { Button, Flex, Heading, Text } from '@chakra-ui/react';
import Profile from '@/components/pages/home/profile';
import SettingsIcon from '@/assets/icons/settings.svg';
import LeaveIcon from '@/assets/icons/leave.svg';
import Link from 'next/link';
import { ROUTES } from '@/constants/routes';

export default function GroupSettings() {
  function handleClickLeaveButton() {
    /**
     * @todo 서비스 탈퇴하기 api 연결하기
     */
  }

  function handleClickLeaveGroupButton() {
    /**
     * @todo 그룹 나가기 api 연결하기
     */
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
        <Heading fontSize="24px">설정</Heading>
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
            right={
              <Button
                px="33px"
                py="6px"
                w="134px"
                h="35px"
                border="none"
                boxShadow="0px 2px 6px rgba(0, 0, 0, 0.06)"
                onClick={handleClickLeaveButton}
              >
                <Text color="gray.700" fontSize="10px" lineHeight="150%">
                  서비스 탈퇴하기
                </Text>
              </Button>
            }
          />
          <Flex
            py="15px"
            h="100%"
            backgroundColor="waggle.gray.100"
            borderRadius="16px"
            flexDirection="column"
          >
            <Flex py="11px" borderBottom="1px" borderColor="#eeeeee">
              <Text
                flex="3.5"
                color="gray.400"
                fontSize="10px"
                lineHeight="150%"
                paddingLeft="48px"
              >
                그룹명
              </Text>
              <Text flex="1" color="gray.400" fontSize="10px" lineHeight="150%">
                설정
              </Text>
            </Flex>
            {/**
             * @todo 그룹들 가져와서 렌더링하기
             */}
            <Flex
              h="68px"
              align="center"
              py="20px"
              borderBottom="1px"
              borderColor="#eeeeee"
            >
              <Text
                flex="3.5"
                paddingLeft="48px"
                fontSize="14px"
                fontWeight="semibold"
              >
                그룹 1
              </Text>
              <Flex flex="1" gap="36px">
                {/**
                 * @todo api로 받은 groupName을 통해 라우팅 시키기
                 * @todo api로 받아온 group 데이터의 owner 필드를 통해, owner만 '그룹 설정' 버튼 렌더링하기
                 */}
                <Link href={ROUTES.GROUP.SETTING('waggle-waggle')}>
                  <Flex
                    as="button"
                    gap="12px"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <Flex
                      justify="center"
                      align="center"
                      p="8px"
                      borderRadius="12px"
                      bg="white"
                      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.06)"
                    >
                      <SettingsIcon />
                    </Flex>
                    <Text fontSize="12px" lineHeight="150%">
                      그룹 설정
                    </Text>
                  </Flex>
                </Link>
                <Flex
                  as="button"
                  gap="12px"
                  alignItems="center"
                  justifyContent="center"
                  onClick={handleClickLeaveGroupButton}
                >
                  <Flex
                    justify="center"
                    align="center"
                    p="8px"
                    borderRadius="12px"
                    bg="white"
                    boxShadow="0px 4px 6px rgba(0, 0, 0, 0.06)"
                  >
                    <LeaveIcon />
                  </Flex>
                  <Text fontSize="12px" lineHeight="150%">
                    그룹 나가기
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </GNBLayout>
  );
}
