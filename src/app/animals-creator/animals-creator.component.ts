import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

import { AnimalsService } from '../services/animals.service';

@Component({
  selector: 'app-animals-creator',
  templateUrl: './animals-creator.component.html',
  styleUrls: ['./animals-creator.component.css']
})
export class AnimalsCreatorComponent implements OnInit {
  form = new FormGroup({
    name: new FormControl(''),
    desciption: new FormControl(''),
    class: new FormControl(''),
    type: new FormControl(''),
    feed: new FormControl(''),
  })

  constructor(private animalsService: AnimalsService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.animalsService.save(this.form.value).subscribe(data => console.log(data));
  }
}
