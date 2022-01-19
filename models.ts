import * as jsonfile from "jsonfile";

/*
En un archivo models.ts, creá:
una clase Product que tenga id y name (puede tener más propiedades)
una clase ProductCollection con dos métodos:
getAll() que devuelve todos los productos
getById(id:number) que devuelve el producto con el id ingresado.*/

class Product {
  id: number;
  name: string;
  categoria: string;
}

class ProductCollection {
  products: Product[] = [];

  //creo una funcion asincronica, esta funcion se detiene en el await
  //y sigue ejecutandose el resto del codigo de js, porque js es non-blocking
  //luego cuando la promesa se cumple, osea entra en el then, continua la funcion
  //y retorna una pormesa
  async load() {
    this.products = await jsonfile.readFile("./products.json");
    return this.products;
  }

  getAll() {
    return this.products;
  }

  getById(id) {
    // en find cuando encuentro el adecuedo retorno un true, porque
    //cuando se retorna true a find, este debuelve el objeto del array
    //que hizo match

    var encontrado: any = this.products.find((item) => {
      if (item.id == id) {
        return true;
      }
    });

    //si no se encuentra el numero de id, devuelve todos
    if (encontrado == undefined) {
      encontrado = this.getAll();
    }

    return encontrado;
  }
}

export { ProductCollection, Product };
