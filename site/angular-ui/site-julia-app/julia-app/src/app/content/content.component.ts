import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { OeuvreService } from '../service/oeuvre.service';
import { Oeuvre } from '../model/oeuvre';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.scss']
})
export class ContentComponent implements OnInit {

  private id :string;
  private name : string;
  private oeuvres: Oeuvre[];
  constructor( private route: ActivatedRoute,
    private router: Router, private oService : OeuvreService) { }

  ngOnInit() {
    this.route.paramMap.subscribe((param) => {
      this.id = param.get('id');
      this.name = param.get('name');
      this.oService.getThemeOeuvres(Number.parseInt(this.id)).subscribe(o =>{
        this.oeuvres = o;
      });
    });
  }

}
