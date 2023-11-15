import { Component } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Store } from '@ngrx/store';
import { addCustomCard } from 'src/app/redux/actions/admin.actions';

import { CustomCard } from '../../admin.model';
import { futureDateValidator } from '../../helpers/futureDateValidator';

@Component({
  selector: 'app-create-card-form',
  templateUrl: './create-card-form.component.html',
  styleUrls: ['./create-card-form.component.scss'],
})
export class CreateCardFormComponent {
  createCardForm: FormGroup;

  initialFormValue: {
    title: '',
    description: '',
    image: '',
    video: '',
    date: '',
    tags: []
  };

  constructor(private fb: FormBuilder, private store: Store) {
    this.createCardForm = this.fb.group({
      title: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(20)]],
      description: ['', [Validators.maxLength(255)]],
      image: ['', [Validators.required]],
      video: ['', [Validators.required]],
      date: ['', [Validators.required, futureDateValidator]],
      tags: this.fb.array([this.fb.control('', Validators.required)]),
    });

    this.initialFormValue = this.createCardForm.value;
  }

  addTag() {
    const tags = this.createCardForm.get('tags') as FormArray;

    if (tags.length < 5) {
      tags.push(this.fb.control('', Validators.required));
    }
  }

  getControls() {
    return (this.createCardForm.get('tags') as FormArray).controls;
  }

  resetForm() {
    this.createCardForm.reset(this.initialFormValue);
    const tags = this.createCardForm.get('tags') as FormArray;

    while (tags.length > 1) {
      tags.removeAt(1);
    }
  }

  createCard(e: Event) {
    e.preventDefault();

    const newCard: CustomCard = {
      title: this.createCardForm.value.title,
      description: this.createCardForm.value.description,
      image: this.createCardForm.value.image,
      video: this.createCardForm.value.video,
      date: this.createCardForm.value.date,
    };
    this.store.dispatch(addCustomCard({ card: newCard }));

    this.resetForm();
  }

  checkInputError(name: string, errorType: string): boolean | undefined {
    return (
      this.createCardForm.get(name)?.hasError(errorType)
      && this.createCardForm.get(name)?.touched
    );
  }
}
