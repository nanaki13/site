import { Theme } from './model/theme';


export interface OnLoadedMenu{
    menuCome(menus: Map<number,Theme>): void;
}