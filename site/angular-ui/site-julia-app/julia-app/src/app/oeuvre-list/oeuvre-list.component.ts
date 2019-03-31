import { Component, OnInit } from '@angular/core';
import { Oeuvre } from '../model/oeuvre';
import { OeuvreService } from '../service/oeuvre.service';

@Component({
  selector: 'app-oeuvre-list',
  templateUrl: './oeuvre-list.component.html',
  styleUrls: ['./oeuvre-list.component.css']
})
export class OeuvreListComponent implements OnInit {

 
  selectedOeuvre: Oeuvre;
  oeuvres: Oeuvre[];
  toSave:Map<number,Oeuvre>;
  result;

 

  onSelect(oeuvre: Oeuvre): void {
   
    this.selectedOeuvre = oeuvre;
    this.toSave.set(oeuvre.id,oeuvre)
  }

  newOeuvre(){
    this.oeuvres.push({} as Oeuvre);  
  }
 
  constructor(private oeuvreService : OeuvreService) {
    this.toSave = new Map
   }

  ngOnInit() {
   
    this.getOeuvres();
  }
  getOeuvres(): void {
  
    this.oeuvreService.getOeuvres()
    .subscribe(oeuvres => {
      
      this.oeuvres = oeuvres;
    
      
    });
  
  }

  goBack(): void {
    /* this.location.back(); */
  }
 
 save(): void {
   let oeuvresToSave = [];
   this.toSave. forEach((v,k) =>oeuvresToSave.push(v) )
  
  /*  this.oeuvreService.saveAll(oeuvresToSave) .subscribe(r => {
      this.result = r;   
      this.startTimer(()=>{ this.result = null});
    });*/
   
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
