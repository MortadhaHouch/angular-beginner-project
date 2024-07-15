import { Component,Input } from '@angular/core';
import { Todo } from '../../../utils/types';
import {NgClass} from "@angular/common";

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [
    NgClass
  ],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() item!:Todo;
}
