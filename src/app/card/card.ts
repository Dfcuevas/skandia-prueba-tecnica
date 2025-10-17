import { Component, Input } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { Card } from '../models/card';

@Component({
  selector: 'app-card',
  imports: [CurrencyPipe],
  templateUrl: './card.html',
  styleUrl: './card.scss',
})
export class CardComponent {
  @Input() card!: Card;
}
