import { Component, OnInit, Input } from '@angular/core';
import { Theme } from '../model/theme';

@Component({
  selector: 'app-theme-detail',
  templateUrl: './theme-detail.component.html',
  styleUrls: ['./theme-detail.component.css']
})
export class ThemeDetailComponent implements OnInit {

 @Input() theme:Theme;
  constructor() { }

  ngOnInit() {
  }

}
