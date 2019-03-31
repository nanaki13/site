import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MenuServiceService } from '../service/menu-service.service';
import { Theme } from '../model/theme';
@Component({
  selector: 'app-sub-menu',
  templateUrl: './sub-menu.component.html',
  styleUrls: ['./sub-menu.component.scss']
})
export class SubMenuComponent implements OnInit {

   name: string;
   id:number;
   _count:number = 0;
   @Output()
   display : EventEmitter<Boolean>
   
  @Input()
   subMenus:Theme[]= [];
  constructor(
    private menuService : MenuServiceService,
    private router: Router,
    private route: ActivatedRoute,


   
   
  ) {}
  count() {
    
    this._count++;
    return this._count % 3 == 0;
  }
  
  ngOnInit() {
    this.route.paramMap.subscribe((param) => {
      debugger;
      this.subMenus= [];
      this.id = Number.parseInt(param.get('id'));
      this.menuService.getMenus().filter((el) => el.parent_theme_key == this.id).forEach(e => {
          this.subMenus.push(e);
        });
      });

  }

 
 

 
}
