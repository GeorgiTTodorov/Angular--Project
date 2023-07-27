import { FormGroup, ValidatorFn } from "@angular/forms";



export function matchPasswords(password: string, repeatPassword: string): ValidatorFn {

    return (control) => {
        const group = control as FormGroup;
        const valueOne = group.get(password);
        const valueTwo = group.get(repeatPassword);

        return valueOne?.value === valueTwo?.value ? null : { matchPasswords: true };
    }
}