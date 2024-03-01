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
import { ROUTES } from '@/constants/routes';
import { useMyGroupsQuery } from '@/hooks/queries/group/useMyGroupsQuery';
import { Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react';
import { ArrowUpDownIcon } from '@chakra-ui/icons';
import { GroupInfo } from '@/api/group/type';
import { useCurrentGroup } from '@/hooks/common/useCurrentGroup';

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

function NavDropdown({
  cur,
  groups,
  currentTab,
}: {
  cur: GroupInfo | undefined;
  groups: GroupInfo[];
  currentTab?: boolean;
}) {
  return (
    <Menu>
      <MenuButton>
        <ItemContainer currentTab={currentTab}>
          <div>
            <HomeIcon />
          </div>
          {cur?.name || groups[0].name}
          <ArrowUpDownIcon ml="auto" />
        </ItemContainer>
      </MenuButton>
      <MenuList>
        {groups.map((group) => (
          <MenuItem key={group.id} as="a" href={`/${group.name}/home`}>
            {group.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
}

function Divider() {
  return (
    <div
      style={{
        margin: '14px 0',
      }}
    >
      <DividerIcon />
    </div>
  );
}

export default function GlobalNavigationBar() {
  const { data } = useMyGroupsQuery();
  const cur = useCurrentGroup();

  return (
    <GNBContainer>
      <GNBHeader>
        <LogoIcon />
      </GNBHeader>

      <GNBBody>
        <ItemGroup>
          <NavItem href={ROUTES.MY_CARD} icon={<CopyIcon />} currentTab>
            내 카드
          </NavItem>
        </ItemGroup>

        <Divider />

        <ItemGroup>
          {data?.groups.length ? (
            <NavDropdown cur={cur} groups={data.groups} />
          ) : (
            <NavItem href={ROUTES.GROUP.CREATE} icon={<HomeIcon />}>
              새 그룹 만들기
            </NavItem>
          )}
          <NavItem
            href={ROUTES.GROUP.MEMBER(cur?.name || data?.groups[0].name)}
            icon={<UserIcon />}
          >
            팀원 목록
          </NavItem>
        </ItemGroup>

        <ItemGroup>
          <ItemGroupHeader>ACCOUNT PAGES</ItemGroupHeader>
          <NavItem href={ROUTES.SETTING} icon={<SettingsIcon />}>
            설정
          </NavItem>
        </ItemGroup>
      </GNBBody>

      <GNBFooter>
        <Logout onClick={() => {}}>
          <LogoutIcon color="#F8F9FA" />
          <span>로그아웃</span>
        </Logout>
      </GNBFooter>
    </GNBContainer>
  );
}
