import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  contactForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit(): void {
    this.contactForm = this.fb.group({
      nombre: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      mensaje: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.contactForm.valid) {
      console.log('Formulario enviado', this.contactForm.value);
      // Aquí puedes agregar lógica para enviar el formulario
    }
  }
}
