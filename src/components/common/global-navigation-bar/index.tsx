import Link from 'next/link';

import { GNBWrapper, ItemWrapper } from './styles';
import CardsIcon from '@/assets/icons/copy.svg';
import HomeIcon from '@/assets/icons/home.svg';
import UserIcon from '@/assets/icons/user.svg';

function NavItem({
  children,
  href,
  icon,
  currentTab,
}: {
  children: React.ReactNode;
  href: string;
  icon: React.ReactNode;
  currentTab?: boolean;
}) {
  return (
    <Link href={href}>
      <ItemWrapper currentTab={currentTab}>
        <div>{icon}</div>
        {children}
      </ItemWrapper>
    </Link>
  );
}

export default function GlobalNavigationBar() {
  return (
    <GNBWrapper>
      <NavItem href="" icon={<CardsIcon />} currentTab>
        내 카드
      </NavItem>
      <NavItem href="" icon={<HomeIcon />}>
        새 그룹 만들기
      </NavItem>
      <NavItem href="" icon={<UserIcon />}>
        팀원 목록
      </NavItem>
    </GNBWrapper>
  );
}
