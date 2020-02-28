import { Component, OnInit, ɵConsole } from '@angular/core';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  constructor(
    private myRouterServ: Router,
    private myActivatedRouterServ: ActivatedRoute,
  ) {}

  ngOnInit() {
    console.log("hello")
  }

}
