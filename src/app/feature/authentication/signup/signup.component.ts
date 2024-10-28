import {Component, CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import {AuthHeaderComponent} from "../components/auth-header/auth-header.component";

@Component({
  selector: 'app-signup',
  standalone: true,
  imports: [
    AuthHeaderComponent
  ],
  templateUrl: './signup.component.html',
  styleUrl: './signup.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class SignupComponent {

}
