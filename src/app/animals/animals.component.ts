import { Component, OnInit } from '@angular/core';
import { AnimalsService } from '../services/animals.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'animals',
  templateUrl: './animals.component.html',
  styleUrls: ['./animals.component.css']
})
export class AnimalsComponent implements OnInit {
  private animals;
  constructor(private animalsService: AnimalsService) { }

  ngOnInit() {
    this.animalsService.get().subscribe(data => this.animals = data);
  }
}
