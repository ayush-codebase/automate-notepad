import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Input() content;
  text: string;
  title: string;

  constructor() {}

  ngOnInit() {
    this.title = this.content.title;
    this.text = this.content.text;
  }
}
