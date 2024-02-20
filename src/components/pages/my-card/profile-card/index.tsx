import { useState } from 'react';
import { Profile } from './styles';
import { Props } from './types';

export default function ProfileCard({ isOpened, profile }: Props) {
  return (
    <Profile className={isOpened ? '' : 'closed'}>
      <span>hihihihi</span>
    </Profile>
  );
}
