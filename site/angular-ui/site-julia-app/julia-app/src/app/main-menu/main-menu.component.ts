import { Component, OnInit, Output, Input } from '@angular/core';
import { MenuServiceService } from '../service/menu-service.service';
import { Theme } from '../model/theme';
import { Identifiers } from '@angular/compiler';
import { OnLoadedMenu } from '../onLoadedMenu';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit,OnLoadedMenu {

  @Input()
  menus : Map<number,Theme>;
  selectMenu: Theme
  subMenus: Theme[];
  menusList : Theme[];
  diplay: boolean; 
  constructor(private msSer : MenuServiceService) {  
    this.msSer.register(this);
  }
  menuCome(m  :Map<number,Theme>){
    debugger;
      this.menus = m;
      this.menus.forEach((e)=>this.menusList.push(e));
  }
  ngOnInit() {
    this.menusList = [];
  
  }

 
  getMenus(): void {
   
  }
  select(theme: Theme){
    this.selectMenu = theme;
    this.subMenus = theme.subThemes;
    this.diplay = true;
    
  }

}
