import { ProfileInfo } from '@/components/common/profile-info/types';

export interface Props {
  isOpened: boolean;
  profile: ProfileInfo;
  onClick: () => void;
}
