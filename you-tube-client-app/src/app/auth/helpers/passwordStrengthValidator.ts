import { AbstractControl, ValidationErrors } from '@angular/forms';

export const passwordStrengthValidator = (control: AbstractControl): ValidationErrors | null => {
  const { value } = control;

  // Define regular expressions for each requirement.
  const lengthRegex = /(?=.{8,})/;
  const uppercaseRegex = /(?=.*[A-Z])/;
  const lowercaseRegex = /(?=.*[a-z])/;
  const digitRegex = /(?=.*\d)/;
  const specialCharRegex = /(?=.*[@!#?])/;

  // Check if the password meets all the requirements.
  const errors: ValidationErrors = {};

  if (!lengthRegex.test(value)) {
    errors['minLength'] = '- Password should have at least 8 characters';
  }

  if (!uppercaseRegex.test(value)) {
    errors['uppercase'] = '- Password should include at least one uppercase letter';
  }

  if (!lowercaseRegex.test(value)) {
    errors['lowercase'] = '- Password should include at least one lowercase letter';
  }

  if (!digitRegex.test(value)) {
    errors['digit'] = '- Password should include at least one number';
  }

  if (!specialCharRegex.test(value)) {
    errors['specialChar'] = '- Password should include at least one special character (!, @, #, ?)';
  }

  if (Object.keys(errors).length > 0) {
    // Password didn't meet one or more requirements, set 'passwordStrength'.
    errors['passwordStrength'] = 'Your password isn\'t strong enough:';
  }

  return Object.keys(errors).length > 0 ? errors : null;
};
