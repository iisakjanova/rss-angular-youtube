import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

import { futureDateValidator } from '../../helpers/futureDateValidator';

@Component({
  selector: 'app-create-card-form',
  templateUrl: './create-card-form.component.html',
  styleUrls: ['./create-card-form.component.scss'],
})
export class CreateCardFormComponent {
  createCardForm!: FormGroup;

  card!: {
    title: '',
    description: '',
    image: '',
    video: '',
    date: '',
  };

  constructor(private fb: FormBuilder) {
    this.createCardForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      description: ['', [Validators.maxLength(255)]],
      image: ['', [Validators.required]],
      video: ['', [Validators.required]],
      date: ['', [Validators.required, futureDateValidator]],
      tags: this.fb.array([this.fb.control('', Validators.required)]),
    });
  }

  addTag() {
    const tags = <FormArray> this.createCardForm.get('tags');

    if (tags.length < 5) {
      tags.push(this.fb.control('', Validators.required));
    }
  }

  getControls() {
    return (this.createCardForm.get('tags') as FormArray).controls;
  }

  createCard(e: Event) {
    e.preventDefault();

    this.card = {
      title: this.createCardForm.get('title')?.value,
      description: this.createCardForm.get('description')?.value,
      image: this.createCardForm.get('image')?.value,
      video: this.createCardForm.get('video')?.value,
      date: this.createCardForm.get('date')?.value,
    };
  }
}
