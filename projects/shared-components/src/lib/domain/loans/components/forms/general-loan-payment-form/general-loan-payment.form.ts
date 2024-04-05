import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ErrorHandler, OnInit, inject } from '@angular/core';
import { LoanAccountNumberField } from '../../fields';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { SharedNumberOnlyDirective } from '../../../../core/directives/number-only.directive';
import { GeneralLoanPaymentFormService } from '../../../services/loan-payment-form.service';
import { PaymentTypeFieldComponent } from '../../../../payments/components/forms/payment-type-form/payment-type.form';
import { DebitCardNumberField } from '../../fields/debit-card-number-field/debit-card-number.field';
import { DebitCardNameField } from '../../fields/debit-card-name-field/debit-card-name.field';
import { DebitCardExpirationField } from '../../fields/debit-card-expiration-field/debit-card-expiration.field';
import { DebitCardCVVNumberField } from '../../fields/debit-card-cvv-number-field/debit-card-cvv-number.field';
import { CheckingAccountNumberField } from '../../fields/checking-account-number-field/checking-account-number.field';
import { CheckingRoutingNumberField } from '../../fields/checking-routing-number-field/checking-routing-number.field';

@Component({
  selector: 'shared-general-loan-payment-form',
  standalone: true,
  imports: [
    CommonModule,
    CheckingAccountNumberField,
    CheckingRoutingNumberField,
    DebitCardCVVNumberField,
    DebitCardExpirationField,
    DebitCardNameField,
    DebitCardNumberField,
    LoanAccountNumberField,
    PaymentTypeFieldComponent,
    ReactiveFormsModule,
    SharedNumberOnlyDirective
  ],
  providers: [GeneralLoanPaymentFormService],
  templateUrl: './general-loan-payment.form.html',
  styleUrl: './general-loan-payment.form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GeneralLoanPaymentFormComponent {
  readonly form = inject(GeneralLoanPaymentFormService).form;
  public showDebitCardFields = false;



  onSubmit(event: Event) {
    event.preventDefault();

    if (this.form.invalid) {
      console.warn(this.form.value);
      console.log("Form is invalid!", this.form.value);
      const invalidInput = document.querySelector('input#loanAccountNumber.ng-invalid');
      invalidInput instanceof HTMLElement && invalidInput.focus();
      return;
    } else {
      console.log("Submitting form...!", this.form.value);
    }

  }

  paymentTypeSelection(event: any) {
    this.showDebitCardFields = event;
  }
}
