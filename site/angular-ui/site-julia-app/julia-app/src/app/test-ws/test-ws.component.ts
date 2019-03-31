import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { post } from 'selenium-webdriver/http';

@Component({
  selector: 'app-test-ws',
  templateUrl: './test-ws.component.html',
  styleUrls: ['./test-ws.component.scss']
})
export class TestWsComponent implements OnInit {

  private url;
  private post;
 private result;
  constructor(private http : HttpClient) { }

  ngOnInit() {
  }

  go(){
    this.http.get(this.url).subscribe((res)=>{
      this.result  = JSON.stringify(res);
    })
//    this.result = this.url+this.post;
  }

}
