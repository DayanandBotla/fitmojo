import { FormControl, FormGroup } from "@angular/forms";

export class FormValidators{
    focusedElement;
    focusPassword;

    constructor(){}

    onFocusForElement(element) {
        if (this.focusedElement !== element) {
        this.focusedElement = element
        }
    }

    onFocusOutForElement() {
        this.focusedElement = undefined;
        this.focusPassword = false;
    }

    shouldShowErrors(fieldName, formName) {
        if (this.focusedElement && this.focusedElement === fieldName) {
          return false;
        } else {
            let control;
            control = formName.controls[fieldName];
            return control && control.errors && (control.dirty || control.touched);
        }
    }

    getErrorMessage(controlFormNField, formName): string {
        let control;
        if (controlFormNField === "expMonth" || controlFormNField === "expYear") {
          control = formName.get("expDate").get(controlFormNField);
        } else {
          control = formName.controls[controlFormNField];
        }
        return control.errors.message;
    }

    getFormFiledClass(fieldName, formName) {
        if (this.focusedElement && this.focusedElement === fieldName) {
          return '';
        } else {
          if(this.shouldShowErrors(fieldName, formName)){
            return 'has-error';
          }else if(this.isControlValid(fieldName, formName)){
    
            let fieldValue = formName.controls[fieldName].value;
            let fieldType = typeof(fieldValue);
    
            if(fieldType != 'undefined'){
              if(fieldType === 'string') {
                if(fieldValue.length > 0){
                  return 'has-success';
                }
              } else if(fieldType === 'number') {
                if(fieldValue > 0){
                  return 'has-success';
                }
              } else {
                return 'has-success';
              }
            }
          }
        }
        return ''
    }

    isControlValid(controlFormNField, formName): boolean {
        let control = formName.controls[controlFormNField];
        return control && !control.errors && (control.dirty || control.touched);
    }

    validateAllFormFields(formGroup: FormGroup) {
        Object.keys(formGroup.controls).forEach((field) => {
          const control = formGroup.get(field);
          if (control instanceof FormControl) {
            control.markAsTouched({ onlySelf: true });
          } else if (control instanceof FormGroup) {
            this.validateAllFormFields(control);
          }
        });
      }

      removeErrorMessage(id){
        const errorDiv = document.getElementById(id)
        errorDiv.style['display'] = 'none';
        errorDiv.innerText = ""
      }
    
      setErrorMessage(id,message){
        const errorDiv = document.getElementById(id)
        errorDiv.style['display'] = 'block';
        errorDiv.innerText = message
      }
}