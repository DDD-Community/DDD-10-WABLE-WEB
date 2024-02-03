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
      backgroundColor="#F8F9FA"
      borderRadius="16px"
      {...props}
    >
      {children}
    </Flex>
  );
}
