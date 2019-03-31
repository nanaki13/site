import { Component, OnInit , Input} from '@angular/core';

import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import {Oeuvre } from '../model/oeuvre';
import {OeuvreService } from '../service/oeuvre.service';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-oeuvre-detail',
  templateUrl: './oeuvre-detail.component.html',
  styleUrls: ['./oeuvre-detail.component.css']
})
export class OeuvreDetailComponent implements OnInit {

  @Input() 
  oeuvre: Oeuvre;
 
  constructor(private oeuvreService : OeuvreService) {
    console.log('init o');
   }

  ngOnInit() {
   
   
  }


  goBack(): void {
    /* this.location.back(); */
  }

 save(): void {
   /*  this.heroService.updateHero(this.hero)
      .subscribe(() => this.goBack()); */
  }

}
