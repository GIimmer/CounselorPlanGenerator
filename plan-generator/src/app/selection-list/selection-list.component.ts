import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSelectionListChange } from '@angular/material/list';

@Component({
  selector: 'app-selection-list',
  templateUrl: './selection-list.component.html',
  styleUrls: ['./selection-list.component.scss']
})
export class SelectionListComponent implements OnInit {
  @Input() options!: string[];
  @Output() optionSelected: EventEmitter<string> = new EventEmitter();

  ngOnInit(): void {
  }

  onSelectionChanged(event: any) {
    this.optionSelected.emit((event as MatSelectionListChange).options.find(option => option.selected)?.value);
  }

}
