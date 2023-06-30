import { CommonModule } from '@angular/common';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { NgbModal, ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { ImageSelectionService } from '../services/image-selection.service';
import { ImageInterface } from '../interfaces/image-interface';

@Component({
  selector: 'app-image-modal',
  standalone: true,
  templateUrl: './image-modal.component.html',
  styleUrls: ['./image-modal.component.scss'],
  imports: [CommonModule],
  providers: [ImageSelectionService]
})

export class ImageModalComponent {

  @Output()
  notify: EventEmitter<ImageInterface> = new EventEmitter<ImageInterface>();

  unsplashItems: any;

  constructor(
    private modalService: NgbModal,
    private imageSelectionService: ImageSelectionService
  ) {}

  // Open Modal
  open(content: any) {

    // Open modal and get dismiss reason
		this.modalService.open(content, { size: 'md', backdrop: 'static'});

    // Subscribe to listImages() observable and set res as class variable
    // Subscribe to observable only when 'Select Image' is first pressed
    if (!this.unsplashItems) {
      this.imageSelectionService.listImages().subscribe((res) => {
        this.unsplashItems = res;
      });
    }

	}

  // Pass relevant image data to select-image-form.component & close modal
  passImage(imgName: string, imgDescr: string, imgUrl: string) {

    let selectedImage = {
      imgName: imgName,
      imgDescr: imgDescr,
      imgUrl: imgUrl
    };

    // Emit selectedImage to select-image-form.component
    this.notify.emit(selectedImage);

    // Dismiss modal
    this.modalService.dismissAll("Image Selected");
    
  }

}