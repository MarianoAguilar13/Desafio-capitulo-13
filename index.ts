import * as minimist from "minimist";
import { ProductController } from "./controllers";

function parsearArgumentos(argv) {
  const parseado = minimist(argv);
  return { search: parseado.search };
}

function main() {
  const controller = new ProductController();
  /*async () => {
    await controller.promesa;
    const opcion = parsearArgumentos(process.argv.slice(2));
    var resultado = controller.processOptions(opcion);
    console.log(resultado);
  };*/

  //cuando la promesa me devuelva que todo se resolvio, osea que se
  //cargo el json en el load, entonces ahi voy a continuar con el resto
  //del programa, ya que no se va a ejecutar hasta que el archivo se cargue
  controller.promesa.then(() => {
    const opcion = parsearArgumentos(process.argv.slice(2));
    var resultado = controller.processOptions(opcion);
    console.log(resultado);
  });
}

main();
