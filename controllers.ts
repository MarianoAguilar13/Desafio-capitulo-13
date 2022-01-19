import { ProductCollection } from "./models";
import { Product } from "./models";

/*En un archivo controllers.ts, creá:
una clase ProductController, que deberá tener:
un constructor donde se va a instanciar la clase ProductCollection.
un método processOptions(option) que, si tiene la propiedad search 
devuelva el método getById(id:number), sino tiene que devolver getAll().*/

class ProductController {
  productosLista: ProductCollection;
  constructor() {
    this.productosLista = new ProductCollection();
    this.productosLista.load();
  }

  processOptions(option: any) {
    if (isNaN(option.search) == false) {
      return this.productosLista.getById(option.search);
    } else {
      return this.productosLista.getAll();
    }
  }
}

export { ProductController };
