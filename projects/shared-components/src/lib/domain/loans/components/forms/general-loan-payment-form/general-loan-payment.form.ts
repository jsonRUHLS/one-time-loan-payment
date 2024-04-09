import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { SharedNumberOnlyDirective } from '../../../../core/directives/number-only.directive';
import { CheckingAccountNumberField } from '../../../../payments/components/fields/checking-account-number-field/checking-account-number.field';
import { CheckingRoutingNumberField } from '../../../../payments/components/fields/checking-routing-number-field/checking-routing-number.field';
import { ConfirmCheckingAccountNumberField } from '../../../../payments/components/fields/confirm-checking-account-number-field/confirm-checking-account-number.field';
import { DebitCardCVVNumberField } from '../../../../payments/components/fields/debit-card-cvv-number-field/debit-card-cvv-number.field';
import { DebitCardExpirationField } from '../../../../payments/components/fields/debit-card-expiration-field/debit-card-expiration.field';
import { DebitCardNameField } from '../../../../payments/components/fields/debit-card-name-field/debit-card-name.field';
import { DebitCardNumberField } from '../../../../payments/components/fields/debit-card-number-field/debit-card-number.field';
import { PaymentTypeFieldComponent } from '../../../../payments/components/forms/payment-type-form/payment-type.form';
import { GeneralLoanPaymentFormService } from '../../../services/loan-payment-form.service';
import { LoanAccountNumberField } from '../../fields';

@Component({
  selector: 'shared-general-loan-payment-form',
  standalone: true,
  imports: [
    CommonModule,
    CheckingAccountNumberField,
    CheckingRoutingNumberField,
    ConfirmCheckingAccountNumberField,
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
