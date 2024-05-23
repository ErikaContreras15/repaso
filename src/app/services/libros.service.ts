import { Injectable } from '@angular/core';

import { Libro } from '../domain/libros';

@Injectable({
  providedIn: 'root'
})
export class LibrosService {

  private libros: Libro[] = [];
  private idCounter = 1;

  constructor() { }

  obtenerLibros(): Libro[] {
    return this.libros;
  }

  agregarLibro(libro: Libro): void {
    libro.id = this.idCounter++;
    this.libros.push(libro);
  }

  eliminarLibro(id: number): void {
    this.libros = this.libros.filter(libro => libro.id !== id);
  }
}

