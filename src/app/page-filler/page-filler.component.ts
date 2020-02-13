import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';


@Component({
  selector: 'app-page-filler',
  templateUrl: './page-filler.component.html',
  styleUrls: ['./page-filler.component.scss']
})
export class PageFillerComponent implements OnInit {
  @Input() spaces;
  constructor() { }

  ngOnInit() {
  }

}
