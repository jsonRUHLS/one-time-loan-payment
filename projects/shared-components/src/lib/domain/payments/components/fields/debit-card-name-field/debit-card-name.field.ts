import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, Input, OnInit, forwardRef, inject } from '@angular/core';
import { ControlValueAccessor, FormControl, NG_VALUE_ACCESSOR, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { SharedMaxLengthDirective } from '../../../../core';
import { GeneralLoanPaymentFormService } from '../../../../loans';

@Component({
  selector: 'shared-debit-card-name-field',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    SharedMaxLengthDirective
  ],
  templateUrl: './debit-card-name.field.html',
  styleUrl: './debit-card-name.field.scss',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => DebitCardNameField),
      multi: true
    }
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DebitCardNameField implements OnInit, ControlValueAccessor { 
  @Input('placeholder') placeholder = '';
  @Input() type = 'text';
  @Input('boolean') required = false;
  @Input() maxlength!: number;
  @Input() minlength!: number;
  readonly form = inject(GeneralLoanPaymentFormService).form;

  formControl!: FormControl;
  onTouched!: any;
  onChange!: any;
  debitCardName!: number;

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
