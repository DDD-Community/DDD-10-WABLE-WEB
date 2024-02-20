import { ProfileInfo } from '@/components/pages/my-card/types';
import React from 'react';

export interface Props {
  isOpened: boolean;
  profile: ProfileInfo;
  onClick: () => void;
}
