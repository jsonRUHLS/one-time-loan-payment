import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component } from '@angular/core';
import { GeneralLoanPaymentFormComponent } from '@loans/components/forms/general-loan-payment-form/general-loan-payment.form';

@Component({
  selector: 'app-one-time-loan-payment-feature',
  standalone: true,
  imports: [
    CommonModule,
    GeneralLoanPaymentFormComponent
  ],
  templateUrl: './one-time-loan-payment.feature.html',
  styleUrl: './one-time-loan-payment.feature.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OneTimeLoanPaymentFeatureComponent { }
