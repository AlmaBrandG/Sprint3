let registros = [];
exports.registros = registros;

exports.agregarRegistro = () => {
  const $inputs = document.querySelectorAll("input");

  const { value: usuario } = $inputs[0];
  const { value: contrasena } = $inputs[1];
  const { value: confirmar_contrasena } = $inputs[2];

  registros.push({
    usuario,
    contrasena,
    confirmar_contrasena,
  });
};

function orderByName(a, b) {
  if (a.usuario > b.usuario) {
    return 1;
  }
  if (a.usuario < b.usuario) {
    return -1;
  }
  return 0;
}

function OrdenarArreglo(array) {
  array.sort(orderByName);
  console.log(array);
  return array;
}

module.exports.OrdenarArreglo = OrdenarArreglo;
