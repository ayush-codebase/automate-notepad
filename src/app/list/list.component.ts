import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  constructor() {}

  ngOnInit() {}

  notes = [
    {
      id: 1,
      title: 'Note 1',
      text: 'This is note 1 description'
    },
    {
      id: 2,
      title: 'Note 2',
      text: 'This is note 2 description'
    },
    {
      id: 3,
      title: 'Note 3',
      text: 'This is note 3 description'
    },
    {
      id: 4,
      title: 'Note 4',
      text: 'This is note 4 description'
    }
  ];
}
