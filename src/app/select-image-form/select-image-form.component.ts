import { Component, OnInit, TemplateRef } from '@angular/core';
import { ImageSelectionService } from '../services/image-selection.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-select-image-form',
  templateUrl: './select-image-form.component.html',
  styleUrls: ['./select-image-form.component.scss'],
  providers: [ImageSelectionService]
})

export class SelectImageFormComponent {

  constructor(private modalService: NgbModal, private imageSelectionService: ImageSelectionService) {}

  // Open modal
  open(modal: any): void {
    this.modalService.open(modal);
  }

  // Clear form
  clearForm() {
    console.log('clear form!');
  }

  // Call listImages() service method & insert unsplash images into modal
  searchImages(): void {

    this.imageSelectionService.listImages().subscribe((res) => {
      console.log(res);
    });

  }

}
