import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '../../../node_modules/@angular/router';

@Component({
  selector: 'app-bio',
  templateUrl: './bio.component.html',
  styleUrls: ['./bio.component.css']
})
export class BioComponent implements OnInit {

  constructor(
    private myRouterServ: Router,
    private myActivatedRouterServ: ActivatedRoute,
  ) { }

  ngOnInit() {
  }

}
