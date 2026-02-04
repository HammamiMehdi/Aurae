export type ProfileType = 'agence' | 'modele';

export interface NavItem {
  label: string;
  href: string;
}

export interface ProfileConfig {
  type: ProfileType;
  navItems: NavItem[];
}