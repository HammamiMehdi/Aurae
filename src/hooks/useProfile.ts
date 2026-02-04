import { useState } from 'react';
import type { ProfileConfig, ProfileType } from '../types/profiles';

export const useProfile = () => {
  const [profile, setProfile] = useState<ProfileType>('agence'); // Par défaut agence

  const getNavItems = (): ProfileConfig => {
    if (profile === 'agence') {
      return {
        type: 'agence',
        navItems: [
          { label: 'Home page', href: '/' },
          { label: 'Aurae Profile', href: '/profile' },
          { label: 'Trouver un model', href: '/trouver-modele' },
          { label: 'Matchs & Chat', href: '/matchs' },
          { label: 'Mes Projets', href: '/projets' },
        ],
      };
    } else {
      return {
        type: 'modele',
        navItems: [
          { label: 'Home page', href: '/' },
          { label: 'Aurae Profile', href: '/profile' },
          { label: 'Matchs & Chat', href: '/matchs' },
          { label: 'Mes Projets', href: '/projets' },
        ],
      };
    }
  };

  return { profile, setProfile, getNavItems };
};