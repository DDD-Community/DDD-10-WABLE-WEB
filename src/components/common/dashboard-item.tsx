import { Flex } from '@chakra-ui/react';

type dashboardItemProps = React.PropsWithChildren &
  React.ComponentProps<typeof Flex>;

export default function DashboardItem({
  children,
  ...props
}: dashboardItemProps) {
  return (
    <Flex
      py="16px"
      px="24px"
      backgroundColor="waggle.gray.100"
      borderRadius="16px"
      {...props}
    >
      {children}
    </Flex>
  );
}
