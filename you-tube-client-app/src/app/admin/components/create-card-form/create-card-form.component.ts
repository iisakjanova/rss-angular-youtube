import { Component } from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';

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
      title: ['', [Validators.required]],
      description: ['', [Validators.required]],
      image: ['', [Validators.required]],
      video: ['', [Validators.required]],
      date: ['', [Validators.required]],
    });
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
