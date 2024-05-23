
import { Component, OnInit } from '@angular/core';
import { LibrosService } from '../services/libros.service';
import { FormsModule } from '@angular/forms';
import { Libro } from '../domain/libros';
@Component({
  selector: 'app-libros',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './libros.component.html',
  styleUrl: './libros.component.scss'
})
export class LibrosComponent implements OnInit {
  listaLibros: Libro[] = [];
  nuevoTitulo: string = '';
  nuevaDescripcion: string = '';

  constructor(private servicioLibros: LibrosService) { }

  ngOnInit(): void {
    this.cargarLibros();
  }

  cargarLibros(): void {
    this.listaLibros = this.servicioLibros.obtenerLibros();
  }

  agregarLibro(): void {
    const libro: Libro = {
      title: this.nuevoTitulo,
      description: this.nuevaDescripcion
    };
    this.servicioLibros.agregarLibro(libro);
    this.nuevoTitulo = '';
    this.nuevaDescripcion = '';
    this.cargarLibros();
  }

  eliminarLibro(id: number): void {
    this.servicioLibros.eliminarLibro(id);
    this.cargarLibros();
  }
}