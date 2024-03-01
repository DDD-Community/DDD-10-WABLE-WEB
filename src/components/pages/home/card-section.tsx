import Card from '@/components/pages/home/card';
import { DividerWithContent } from '@/components/common/divider-with-content';
import DashboardItem from '@/components/common/dashboard-item';
import { Flex } from '@chakra-ui/react';
import { useGroupCardsQuery } from '@/hooks/queries/card/useGroupCardsQuery';

export default function CardSection() {
  const { isLoading, data } = useGroupCardsQuery(1, 0, 10);

  return (
    <DashboardItem overflow="auto" minWidth="653px" w="full" h="full">
      <Flex flexDir="column" gap="18px" w="full" overflowY="scroll">
        <DividerWithContent
          content="12월 20일"
          bg="waggle.gray.100"
          variant="dashboard"
          fontSize={12}
        />
        {!isLoading &&
          data?.map((card, index) => <Card key={index} data={card} />)}
      </Flex>
    </DashboardItem>
  );
}
