import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ImageSelectionService {

  constructor() { }

  listImages() {
    
    // request list of images from unsplash api
    // Inject service into modal component to display image list

    alert('retrieving images from unsplash!');
  }

}
