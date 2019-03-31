import { Component, OnInit } from '@angular/core';
import { MenuServiceService } from './service/menu-service.service';
import { Theme } from './model/theme';
import { OnLoadedMenu } from './onLoadedMenu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit ,OnLoadedMenu{
  title = 'site-julia-app';

  menus : Map<number,Theme>
  constructor(private ms : MenuServiceService){

  }
  ngOnInit(){
   
  }

  public menuCome(m : Map<number,Theme>){
    this.menus=m;
  }
}
