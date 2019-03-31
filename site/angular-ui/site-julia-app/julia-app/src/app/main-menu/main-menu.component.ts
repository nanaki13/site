import { Component, OnInit, Output } from '@angular/core';
import { MenuServiceService } from '../service/menu-service.service';
import { Theme } from '../model/theme';
import { Identifiers } from '@angular/compiler';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrls: ['./main-menu.component.css']
})
export class MainMenuComponent implements OnInit {

  menus : Map<number,Theme>;
  selectMenu: Theme
  subMenus: Theme[];
  menusList : Theme[];
  diplay: boolean; 
  constructor(private menuService :  MenuServiceService) {  }

  ngOnInit() {
   
    this.getMenus();
  }

 
  getMenus(): void {
      this.menuService.getMenus();
  }
  select(theme: Theme){
    this.selectMenu = theme;
    this.subMenus = theme.subThemes;
    this.diplay = true;
    
  }

}
