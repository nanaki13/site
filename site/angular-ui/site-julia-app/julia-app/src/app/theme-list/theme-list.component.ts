import { Component, OnInit } from '@angular/core';
import { Theme } from '../model/theme';
import { ThemeService } from '../service/theme.service';

@Component({
  selector: 'app-theme-list',
  templateUrl: './theme-list.component.html',
  styleUrls: ['./theme-list.component.css']
})
export class ThemeListComponent implements OnInit {

 
  selectedTheme: Theme;
  themes: Theme[];
  toSave:Map<number,Theme>;
  result;

 

  onSelect(theme: Theme): void {
    this.selectedTheme = theme;
    this.toSave.set(theme.id,theme)
  }

  newTheme(){

  
  }
 
  constructor(private themeService : ThemeService) {
    this.toSave = new Map
   }

  ngOnInit() {
   
    this.getThemes();
  }
  getThemes(): void {
  
    this.themeService.getThemes()
    .subscribe(themes => {
      
      this.themes = themes;
    
      
    });
  
  }

  goBack(): void {
    /* this.location.back(); */
  }
 
 save(): void {
   let themesToSave = [];
   this.toSave. forEach((v,k) =>themesToSave.push(v) )
  
    this.themeService.saveAll(themesToSave) .subscribe(r => {
      this.result = r;   
      this.startTimer(()=>{ this.result = null});
;    });
   
  }

 
  timeLeft: number = 3;
  interval;
startTimer(callEnd : () => void)  {
  this.timeLeft = 3;
  this.interval = null;
    this.interval = setInterval(() => {
      if(this.timeLeft > 0) {
        this.timeLeft--;
      } else {
        
        clearInterval(this.interval);
        callEnd.apply(null);
      }
    },1000)
  }
}
