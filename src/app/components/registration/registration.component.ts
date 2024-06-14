import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink} from '@angular/router'

@Component({
  selector: 'app-registration',
  standalone: true,
  imports: [RouterLink,FormsModule,CommonModule],
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  directToDashboard(details:any){
    console.log(details);
    
  }
}
