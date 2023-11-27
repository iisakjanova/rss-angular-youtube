import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Store, StoreModule } from '@ngrx/store';

import { addCustomCard } from '../../../redux/actions/admin.actions';
import { CreateCardFormComponent } from './create-card-form.component';

describe('CreateCardFormComponent', () => {
  let component: CreateCardFormComponent;
  let fixture: ComponentFixture<CreateCardFormComponent>;
  let store: Store;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateCardFormComponent],
      imports: [
        ReactiveFormsModule,
        StoreModule.forRoot({}, { runtimeChecks: { strictStateImmutability: false, strictActionImmutability: false } }),
      ],
      providers: [FormBuilder],
    }).compileComponents();

    store = TestBed.inject(Store);
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCardFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should dispatch addCustomCard action on createCard', () => {
    // Mock the store dispatch method
    const dispatchSpy = jest.spyOn(store, 'dispatch');

    const values = {
      title: 'Test Title',
      description: 'Test Description',
      image: 'Test Image URL',
      video: 'Test Video URL',
      date: new Date('2023-12-01'),
      tags: ['Tag1', 'Tag2'],
    };
    // Set form values
    component.createCardForm.patchValue(values);

    // Call createCard method
    component.createCard(new Event('submit'));

    // Expect that the dispatch method was called with the correct action
    expect(dispatchSpy).toHaveBeenCalledWith(addCustomCard({
      card: {
        id: component.id.toString(),
        title: 'Test Title',
        description: 'Test Description',
        image: 'Test Image URL',
        video: 'Test Video URL',
        date: new Date('2023-12-01'),
      },
    }));
  });
});
