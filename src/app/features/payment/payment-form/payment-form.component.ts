import { Component } from '@angular/core';
import { PaymentForm } from 'src/app/core/models/paymantForm.model';

@Component({
  selector: 'app-payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: ['./payment-form.component.scss']
})
export class PaymentFormComponent {
  formData: PaymentForm = {
    nombre: '',
    pais: '',
    correoElectronico: ''
  };

  onSubmit() {
    // Lógica para manejar el envío del formulario
    console.log(this.formData);
  }
}
