import { Component } from '@angular/core';
import { ImageInterface } from '../interfaces/image-interface';

@Component({
  selector: 'app-select-image-form',
  templateUrl: './select-image-form.component.html',
  styleUrls: ['./select-image-form.component.scss'],
})

export class SelectImageFormComponent {

  imageName = '';
  imageDescr = '';
  imageUrl = '';

  // Clear input fields & image src
  clearForm() {
    this.setForm({
      imgName: '',
      imgDescr: '',
      imgUrl: ''
    });
  }

  // Set input values and & image src
  setForm(data: ImageInterface) {

    this.imageName = data.imgName;
    this.imageDescr = data.imgDescr;
    this.imageUrl = data.imgUrl;

  }

}