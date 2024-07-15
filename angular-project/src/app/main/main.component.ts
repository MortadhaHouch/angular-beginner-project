import { Component, OnInit } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { Todo } from '../../../utils/types';
import { fetchData } from '../../../utils/fetchData';
import {items} from "../../../utils/todos";
import {NgClass, NgForOf} from "@angular/common";
import {CardComponent} from "../card/card.component";

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [ButtonComponent, NgClass, NgForOf, CardComponent],
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'] // Ensure it's styleUrls, not styleUrl
})
export class MainComponent implements OnInit {
  data: any = null;
  error: Error | null = null;
  tasks: Todo[] = [];
  mainText: string = "main text";
  constructor() {}
  async fetchData() {
    try {
      this.data = await fetchData("https://jsonplaceholder.typicode.com/todos", "GET", null);
      if (Array.isArray(this.data)) {
        this.tasks = this.data;
      }
    } catch (error) {
      if (error instanceof Error) {
        this.error = error;
      }
    }
  }
  trackById(index: number, item: Todo): number {
    return item.id;
  }
  ngOnInit(): void {
    this.fetchData();
  }
}
