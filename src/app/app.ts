import { Component } from '@angular/core';
import { UserFormComponent } from './components/user-form/user-form';
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Header, Footer, UserFormComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class AppComponent {}