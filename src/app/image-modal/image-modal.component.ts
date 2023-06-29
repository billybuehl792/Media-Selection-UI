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

export class ImageModalComponent implements OnInit {

  @Output()
  notify: EventEmitter<ImageInterface> = new EventEmitter<ImageInterface>();

  unsplashItems: any;
  closeResult!: string;

  constructor(
    private modalService: NgbModal,
    private imageSelectionService: ImageSelectionService
  ) {}

  ngOnInit(): void {

    // Subscribe to listImages() observable and set res as class variable
    // this.imageSelectionService.listImages().subscribe((res) => {
    //   console.log(res);
    //   this.UnsplashItems = res;
    // });

  }

  // Open Modal
  open(content: any) {

    // Open modal and get dismiss reason
		this.modalService.open(content, { size: 'md', backdrop: 'static'}).result.then(
      (result) => {
        this.closeResult = `Closed with: ${result}`;
      },
      (reason) => {
				this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
			}
    );

    // Subscribe to listImages() observable and set res as class variable
    if (!this.unsplashItems) {
      this.imageSelectionService.listImages().subscribe((res) => {
        this.unsplashItems = res;
      });
    }

	}

  private getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}

  // Pass relevant image data to select-image-form.component & close modal
  passImage(imgName: string, imgDescr: string, imgUrl: string) {

    let selectedImage = {
      imgName: imgName,
      imgDescr: imgDescr,
      imgUrl: imgUrl
    };

    // emit selectedImage to select-image-form.component
    this.notify.emit(selectedImage);

    // Dismiss modal
    this.modalService.dismissAll("Image Selected");
    
  }
  
  printTest() {
    console.log('it works!');
  }

}
