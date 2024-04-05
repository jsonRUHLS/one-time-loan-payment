import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { OneTimeLoanPaymentFeatureComponent } from './core/features/one-time-loan-payment/one-time-loan-payment.feature';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, OneTimeLoanPaymentFeatureComponent, NgbModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'one-time-loan-payment-feature';
}
