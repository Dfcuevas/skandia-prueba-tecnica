import { Component } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Sidebar } from './sidebar/sidebar';
import { Hero } from './hero/hero';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Sidebar, Hero],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'skandia-prueba-tecnica';
}
