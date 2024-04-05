import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, inject, output } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { GeneralLoanPaymentFormComponent } from '../../../../loans/index';
import { GeneralLoanPaymentFormService } from '../../../../loans/services/loan-payment-form.service';

@Component({
  selector: 'shared-payment-type-field',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule,
    GeneralLoanPaymentFormComponent
  ],
  providers: [GeneralLoanPaymentFormService],
  templateUrl: './payment-type.form.html',
  styleUrl: './payment-type.form.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaymentTypeFieldComponent {
  @Output() paymentTypeSelectionOutput: EventEmitter<any> = new EventEmitter<any>();
  readonly form = inject(GeneralLoanPaymentFormService).form;

  emitPaymentType(v: any): void {
    this.paymentTypeSelectionOutput.emit(v);
  }
}
