import { ProductCollection } from "./models";
import { Product } from "./models";

/*En un archivo controllers.ts, creá:
una clase ProductController, que deberá tener:
un constructor donde se va a instanciar la clase ProductCollection.
un método processOptions(option) que, si tiene la propiedad search 
devuelva el método getById(id:number), sino tiene que devolver getAll().*/

class ProductController {
  productosLista: ProductCollection;
  //creo la caracteristica promesa para que pueda ser escuchada en el idex
  promesa: Promise<any>;
  constructor() {
    this.productosLista = new ProductCollection();
    //aca retorna la promesa que se crea cuando cargo el archivo json
    const promesaProdLoad = this.productosLista.load();
    //la caracteristica promesa sera lo que devuelve el this.productosLista.load();
    this.promesa = promesaProdLoad;
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
