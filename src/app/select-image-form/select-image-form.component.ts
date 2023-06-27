import { Component, ElementRef } from '@angular/core';
import { ImageSelectionService } from '../services/image-selection.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-select-image-form',
  templateUrl: './select-image-form.component.html',
  styleUrls: ['./select-image-form.component.scss'],
  providers: [ImageSelectionService]
})

export class SelectImageFormComponent {

  constructor(private modalService: NgbModal,
    private imageSelectionService: ImageSelectionService,
    private http: HttpClient,
    private elementRef: ElementRef) {}

  // Open modal
  open(modal: any): void {
    this.modalService.open(modal);
  }

  // Clear form
  clearForm() {
    console.log('clear form!');
  }

  insertImageIntoDom(name: string, descr: string, url: string) {

    const imageElement = document.createElement('img');

    console.log(`${name} | ${descr} | ${url}`);

    imageElement.src = url;

    const imageContainer = this.elementRef.nativeElement.querySelector('#imageContainer');
    imageContainer.appendChild(imageElement);
  }

  // Call listImages() service method & insert unsplash images into modal
  searchImages(): void {

    this.imageSelectionService.listImages().subscribe((res) => {

      // Iterate through entries and append image divs to modal
      Object.entries(res).forEach(([key, value]) => {

        let imageUrl: string = value['urls']['thumb'];
        let imageId: string = value['id'];
        let imageDescr: string = value['alt_description'];

        // Load images asynchronously
        this.http.get(imageUrl, { responseType: 'blob' }).subscribe((blob: Blob) => {
          const imageObjUrl = URL.createObjectURL(blob);
          this.insertImageIntoDom(imageId, imageDescr, imageObjUrl);
        });

      });

    });

  }

}
