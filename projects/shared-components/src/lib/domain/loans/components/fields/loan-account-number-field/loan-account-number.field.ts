import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, forwardRef, inject } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { SharedMaxLengthDirective, SharedNumberOnlyDirective } from '../../../../core';
import { GeneralLoanPaymentFormService } from '../../../services/loan-payment-form.service';

@Component({
  selector: 'shared-loan-account-number-field',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedNumberOnlyDirective,
    SharedMaxLengthDirective
  ],
  templateUrl: './loan-account-number.field.html',
  styleUrl: './loan-account-number.field.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => LoanAccountNumberField),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LoanAccountNumberField implements OnInit, ControlValueAccessor {
  @Input('placeholder') placeholder = '';
  @Input() type = 'text';
  @Input() inputmode = 'numeric';
  @Input('boolean') required = false;
  @Input() maxlength!: number;
  @Input() minlength!: number;
  @Input() numberonly!: boolean;
  readonly form = inject(GeneralLoanPaymentFormService).form;

  formControl!: FormControl;
  onTouched!: any;
  onChange!: any;
  loanAccountNumber!: number;

  ngOnInit(): void {
    const validators: ValidatorFn[] = [];

    if (this.required) {
      validators.push(Validators.required);
    }

    this.formControl = new FormControl('', validators);
  }

  writeValue(value: number): void {
    this.formControl.setValue(value);
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
    this.formControl.valueChanges.subscribe(fn);
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
    this.formControl.valueChanges.subscribe(fn);
  }
}
