import { ValidatorFn } from "@angular/forms";

export function emailValidator(domains: string[]): ValidatorFn {

    const domainsString = domains.join('|');
    const regExp = new RegExp(`^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@(abv|gmail|mail)\.(${domainsString})+$`)

    return (control) => {
        return control.value === '' || regExp.test(control.value) ? null : {emailValidator: true}
    }
}