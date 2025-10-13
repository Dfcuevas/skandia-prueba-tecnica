import { Component, Input } from '@angular/core';
import { Card } from '../models/card';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class CardComponent {
  @Input() card!: Card; // Recibe UNA tarjeta del padre
}
