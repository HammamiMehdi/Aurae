import { useState } from 'react';
import type { ProfileConfig, ProfileType } from '../types/profiles';
import { getNavItems as getNavItemsUtil } from '../utils/navigation';

export const useProfile = () => {
  const [profile, setProfile] = useState<ProfileType>('agence'); // Par défaut agence

  const getNavItems = (): ProfileConfig => {
    return {
      type: profile,
      navItems: getNavItemsUtil(profile),
    };
  };

  return { profile, setProfile, getNavItems };
};