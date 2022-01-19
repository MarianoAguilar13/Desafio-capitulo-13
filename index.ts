import * as minimist from "minimist";
import { ProductController } from "./controllers";

function parsearArgumentos(argv) {
  const parseado = minimist(argv);
  return { search: parseado.search };
}

function main() {
  const controller = new ProductController();
  const opcion = parsearArgumentos(process.argv.slice(2));
  var resultado = controller.processOptions(opcion);
  console.log(resultado);
}

main();
