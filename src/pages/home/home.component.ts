import { Component, OnInit } from '@angular/core';
import { DataService } from '../../app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  nombre:string = "Nombre usuario";

  constructor(private dataService:DataService) { }

  ngOnInit(): void {
  }

  cambiarNombre(){
    this.nombre = "Juan Sebastian";
    this.dataService.nombreUsuario = this.nombre;
  }


}
