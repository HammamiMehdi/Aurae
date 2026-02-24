import type { NavItem } from '../types/profiles';

export type ProfileType = 'agence' | 'modele' | 'createur';

/**
 * Get navigation items based on profile type
 * Centralized navigation configuration to avoid duplication
 */
export const getNavItems = (profile: ProfileType): NavItem[] => {
  switch (profile) {
    case 'agence':
      return [
        { label: 'Home page', href: '/' },
        { label: 'Aurae Profile', href: '/profile-agence' },
        { label: 'Trouver un talent', href: '/Models' },
        { label: 'Matchs & Chat', href: '/matchs' },
        { label: 'Contact & RDV', href: 'https://calendly.com/constance-landowski/30min' },
      ];
    
    case 'createur':
      return [
        { label: 'Home page', href: '/' },
        { label: 'Aurae Profile', href: '/profile-modele' },
        { label: 'Trouver un talent', href: '/photographes' },
        { label: 'Matchs & Chat', href: '/matchs' },
        { label: 'Contact & RDV', href: 'https://calendly.com/constance-landowski/30min' },
      ];
    
    case 'modele':
    default:
      return [
        { label: 'Home page', href: '/' },
        { label: 'Aurae Profile', href: '/profile-modele' },
        { label: 'Trouver un talent', href: '/photographes' },
        { label: 'Matchs & Chat', href: '/matchs' },
        { label: 'Contact & RDV', href: 'https://calendly.com/constance-landowski/30min' },
      ];
  }
};
