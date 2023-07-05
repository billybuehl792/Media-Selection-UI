import { Component, OnInit } from '@angular/core';
import { ImageInterface } from '../interfaces/image-interface';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-select-image-form',
  templateUrl: './select-image-form.component.html',
  styleUrls: ['./select-image-form.component.scss'],
})

export class SelectImageFormComponent implements OnInit {

  imageUrl = '';
  imageForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {

    // Formbuilder controls
    this.imageForm = this.fb.group({
      imageName: [{value: '', disabled: true}],
      imageDescr: [{value: '', disabled: true}]
    });

  }
 
  // Clear input fields & image src
  clearForm() {
    this.setForm({
      imgName: '',
      imgDescr: '',
      imgUrl: ''
    });
  }

  // Set input formbuilder values and & imageUrl
  setForm(data: ImageInterface) {

    // Set imageUrl from modal image select
    this.imageUrl = data.imgUrl;

    // Set values in formbuilder form
    this.imageForm.setValue({
      imageName: data.imgName,
      imageDescr: data.imgDescr
    })

  }

}