import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuServiceService } from '../service/menu-service.service';
import { Theme } from '../model/theme';
import { OnLoadedMenu } from '../onLoadedMenu';
@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit,OnLoadedMenu {

   name: string;
   id:number;
   _count:number = 0;
   @Output()
   display : EventEmitter<Boolean>
   

   subMenus:Theme[]= [];
  constructor(
    private menuService : MenuServiceService,
    private router: Router,
    private route: ActivatedRoute,

  ) {
    this.menuService.register(this);
  }
  count() {
    
    this._count++;
    return this._count % 3 == 0;
  }
  
  ngOnInit() {
   
  }

  public menuCome(m :Map<number,Theme>){
    this.route.paramMap.subscribe((param) => {
      debugger;
      this.subMenus= [];
      this.id = Number.parseInt(param.get('id'));
      m.values.apply((el) => el.parent_theme_key == this.id).forEach(e => {
          this.subMenus.push(e);
        });
      });

  }

 
 

 
}
