import { Component, Input, OnInit } from '@angular/core';
import { zone } from '../app.component';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: zone | undefined;
  @Input() previousItem: zone | undefined;

  drawBridge = false;

  constructor() { }
  ngOnInit(): void {
    if (this.previousItem?.joinedWith === this.item?.id) {this.drawBridge = true}
  }

}
