import Link from 'next/link';

import {
  GNBBody,
  GNBContainer,
  GNBFooter,
  GNBHeader,
  ItemContainer,
  ItemGroup,
  ItemGroupHeader,
  Logout,
} from './styles';
import DividerIcon from '@/assets/icons/divider.svg';
import LogoIcon from '@/assets/icons/logo.svg';
import CopyIcon from '@/assets/icons/copy.svg';
import HomeIcon from '@/assets/icons/home.svg';
import UserIcon from '@/assets/icons/user.svg';
import SettingsIcon from '@/assets/icons/settings.svg';
import LogoutIcon from '@/assets/icons/logout.svg';

import { NavItemProps } from './types';

function NavItem({ children, href, icon, currentTab }: NavItemProps) {
  return (
    <Link href={href}>
      <ItemContainer currentTab={currentTab}>
        <div>{icon}</div>
        {children}
      </ItemContainer>
    </Link>
  );
}

function Divider() {
  return (
    <div
      style={{
        marginTop: '0.5rem',
        marginBottom: '1.125rem',
      }}
    >
      <DividerIcon />
    </div>
  );
}

export default function GlobalNavigationBar() {
  return (
    <GNBContainer>
      <GNBHeader>
        <LogoIcon />
      </GNBHeader>

      <GNBBody>
        <ItemGroup>
          <NavItem href="" icon={<CopyIcon />} currentTab>
            내 카드
          </NavItem>
        </ItemGroup>

        <Divider />

        <ItemGroup>
          <NavItem href="" icon={<HomeIcon />}>
            새 그룹 만들기
          </NavItem>
          <NavItem href="" icon={<UserIcon />}>
            팀원 목록
          </NavItem>
        </ItemGroup>

        <ItemGroup>
          <ItemGroupHeader>ACCOUNT PAGES</ItemGroupHeader>
          <NavItem href="" icon={<SettingsIcon />}>
            설정
          </NavItem>
        </ItemGroup>
      </GNBBody>

      <GNBFooter>
        <Logout onClick={() => {}}>
          <LogoutIcon />
          <span>로그아웃</span>
        </Logout>
      </GNBFooter>
    </GNBContainer>
  );
}
