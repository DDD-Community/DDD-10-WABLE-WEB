import { MyProfileResponseDto } from '@/api/profile/types';
import { ProfileInfo } from '@/components/common/profile-info/types';

export interface Props {
  isOpened: boolean;
  profile: MyProfileResponseDto;
  onClick: () => void;
}
