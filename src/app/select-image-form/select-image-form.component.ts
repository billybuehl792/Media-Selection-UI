import { Component, TemplateRef } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-select-image-form',
  templateUrl: './select-image-form.component.html',
  styleUrls: ['./select-image-form.component.scss']
})

export class SelectImageFormComponent {

  constructor(private modalService: NgbModal) {
  }

  public open(modal: any): void {
    this.modalService.open(modal);
  }

}
