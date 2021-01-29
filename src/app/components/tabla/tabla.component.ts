import { Component, OnInit } from '@angular/core';
import {TablaService} from '../../services/tabla.service';

@Component({
  selector: 'app-tabla',
  templateUrl: './tabla.component.html',
  styleUrls: ['./tabla.component.scss']
})
export class TablaComponent implements OnInit {

  constructor(private tablaService: TablaService) { }

  ngOnInit(): void {
    this.getData();
  }

  getData(): void {
    this.tablaService.getData().subscribe(
      data => console.log(data)
    );
  }
}
