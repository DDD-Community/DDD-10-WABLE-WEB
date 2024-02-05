import { Flex, Heading } from '@chakra-ui/react';

import GNBLayout from '@/layouts/gnb-layout';
import DashboardItem from '@/components/common/dashboard-item';
import Card from '@/components/pages/client/card';
import Profile from '@/components/pages/client/profile';

const MOCK_DATA = [
  {
    sender: '조성원',
    receiver: '김도경',
    type: '감사',
    preview:
      '편지 내용이 미리보기로 나타납니다. 편지 내용이 미리보기로 나타납니다. 편지 내용이 미리보기로 나타납니다.',
  },
  {
    sender: '신승준',
    receiver: '김도경',
    type: '인사',
    preview:
      '편지 내용이 미리보기로 나타납니다. 편지 내용이 미리보기로 나타납니다. 편지 내용이 미리보기로 나타납니다.',
  },
  {
    sender: '조성원',
    receiver: '신승준',
    type: '응원',
    preview:
      '편지 내용이 미리보기로 나타납니다. 편지 내용이 미리보기로 나타납니다. 편지 내용이 미리보기로 나타납니다.',
  },
  {
    sender: '김도경',
    receiver: '신승준',
    type: '축하',
    preview:
      '편지 내용이 미리보기로 나타납니다. 편지 내용이 미리보기로 나타납니다. 편지 내용이 미리보기로 나타납니다.',
  },
];

export default function Home() {
  return (
    <GNBLayout>
      <Heading fontSize="24px" px="24px" mb="8px">
        그룹1에 오신걸 환영합니다.
      </Heading>
      <Profile
        src="https://s3-alpha-sig.figma.com/img/b940/caf9/f3a52bcc9317c793ebc094db911b237b?Expires=1707696000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=bjn43sFNjEmUB2K0Ups00G8Paj30bgiKWFBqd4ucKNjZ9wrgJKA86ck5cfJ5oxdysd9PMT1QjmHIJsm2iPRRTmIaKPAHpwqtT6oR1Xt0x3spIwU0W~35iz0B5u0DHE2S~qEFVh9o06EtRrapqu1RQQgzkPGd98I3sEx9RsS-hjZ41luOuHRvTvUFFEtMuFTjzL2rbNyx94TFbdDiskN0MHSiZNpreCdngbhva4pfP3zRrHaZ04Tis5Kni0ZI7xtnLGoO5HhqMv3zAus7cbEUUR6uirV6ZlpneHGclby~CxcSso54e2CDZvp~KpFwEJs8r7D9cqH23GCRuoZ~nA-0bQ__"
        name="홍길동"
        email="esthera@simmmple.com"
      />
      <Flex height="full" gap="16px">
        <DashboardItem flexDir="column" gap="18px" overflow="auto" h="full">
          {MOCK_DATA.map((data, index) => (
            <Card
              key={index}
              sender={data.sender}
              receiver={data.receiver}
              preview={data.preview}
            />
          ))}
        </DashboardItem>
        <DashboardItem>Calendar Section</DashboardItem>
      </Flex>
    </GNBLayout>
  );
}
