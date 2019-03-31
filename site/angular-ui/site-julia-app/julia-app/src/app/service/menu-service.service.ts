import { Injectable } from '@angular/core';
import { Observable , of} from 'rxjs';
import { ThemeService } from './theme.service';
import { Theme } from '../model/theme';

@Injectable({
  providedIn: 'root'
})
export class MenuServiceService {

  menus : Map<number,Theme>;
  menusList: Theme[];
  selectedMenu: Theme = {id: 0 , name : "Rien",parent_theme_key : null, subThemes:[]} ;
  constructor(private themeService : ThemeService) {
    this.menus = new Map();
    this.menusList = [];
    this.themeService.getThemes().subscribe(res =>{     
       res.filter((el) => el.parent_theme_key == null).forEach(e => {
         e.subThemes = [];
         this.menus.set(e.id,e);
         this.menusList.push(e);
        }
         );

         res.filter((el) => el.parent_theme_key != null).forEach(e => {
         
          this.menus.get(e.parent_theme_key).subThemes.push(e);
          this.loadMenu(this.menus);
         }
        
          );
     
    });

   }
  
  getMenus() : Theme[]{
debugger;
   return  this.menusList ;
   

  }

  setSelectedMenu( th : Theme) {
    debugger;
      this.selectedMenu = th;
  }

  getSubMenu(id: number): Theme[]{
  
      return  this.menus.get(id).subThemes;
  }

  loadMenu(menu : Map<number,Theme>){
    debugger;
      this.menus = menu;
  }




 
}
