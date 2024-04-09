import { Injectable, inject } from "@angular/core";
import { FormBuilder, Validators } from "@angular/forms";

@Injectable()
export class GeneralLoanPaymentFormService {
  readonly form = inject(FormBuilder).group({
    loanAccountNumber: ['', [Validators.required]],
    paymentType: ['', [Validators.required]],
    debitCardNumber: ['', [Validators.required]],
    debitCardName: ['', [Validators.required]],
    debitCardExpiryDate: ['', [Validators.required]],
    debitCardCVVNumber: ['', [Validators.required]],
    checkingRoutingNumber: ['', [Validators.required]],
    checkingAccountNumber: ['', [Validators.required]],
    confirmCheckingAccountNumber: ['', [Validators.required]],
  })
  constructor() {}
}