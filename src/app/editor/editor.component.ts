import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss']
})
export class EditorComponent implements OnInit {
  constructor(private route: ActivatedRoute) {}

  noteId;
  ngOnInit() {
    this.route.paramMap.subscribe(param => {
      this.noteId = param.get('id');
    });
  }
}
