import { Component, CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { ApiService } from "../services/api-service";
import { Card } from "../models/card";
import { CardComponent } from "../card/card";
import { register } from "swiper/element/bundle";

register();

@Component({
  selector: "app-carousel",
  imports: [CardComponent],
  templateUrl: "./carousel.html",
  styleUrl: "./carousel.scss",
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class Carousel {
  datos: Card[] = [];

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.cargarDatos();
  }

  cargarDatos() {
    this.apiService.obtenerDatos().subscribe({
      next: (respuesta) => {
        this.datos = respuesta.listCard;
        console.log(this.datos);
        console.log("Datos recibidos", respuesta);
      },
      error: (error) => {
        console.error("Error al obtener datos:", error);
      },
      complete: () => {
        console.log("Peticion completada");
      },
    });
  }
}
