interface ItemWrapperProps {
  currentTab?: boolean;
}

interface NavItemProps {
  children: React.ReactNode;
  href: string;
  icon: React.ReactNode;
  currentTab?: boolean;
}

export type { ItemWrapperProps, NavItemProps };
