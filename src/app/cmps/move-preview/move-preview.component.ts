import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'move-preview',
  templateUrl: './move-preview.component.html',
  styleUrls: ['./move-preview.component.scss']
})
export class MovePreviewComponent implements OnInit {

  @Input() move
  @Input() contact = null
  date: string
  constructor() { }

  ngOnInit(): void { 
    this.pormatTime()
  }

  pormatTime() {
    this.date = new Date(this.move.at).toLocaleString()
  }
}
