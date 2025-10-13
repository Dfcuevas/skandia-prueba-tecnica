import { Component } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { Sidebar } from './sidebar/sidebar';
import { Hero } from './hero/hero';
import { Carousel } from './carousel/carousel';

@Component({
  selector: 'app-root',
  imports: [Header, Footer, Sidebar, Hero, Carousel],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'skandia-prueba-tecnica';
}
