import { Component, Input, OnInit } from '@angular/core';
import { Response } from '../response.interface';

@Component({
  selector: 'app-today',
  templateUrl: './today.component.html',
  styleUrls: ['./today.component.scss'],
})
export class TodayComponent implements OnInit {
  constructor() {}
  // @Input() user: any;
  @Input() weather!: Response;
  @Input() selectedType: any;

  ngOnInit(): void {}
}
