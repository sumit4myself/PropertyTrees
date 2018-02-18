import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Property',
    main: [
      {
        state: 'proprty',
        short_label: 'P',
        name: 'Property',
        type: 'link',
        icon: 'icon-layout-cta-right'
      }
    ]
  },
  {
    label: 'Project',
    main: [
      {
        state: 'project',
        short_label: 'P',
        name: 'Project',
        type: 'link',
        icon: 'icon-layout-cta-right'
      }
    ]
    }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }
}
