function probarValidarNombre() {
  console.assert(
      validarNombre('') === 'Este campo debe tener al menos 1 caracter',
      'Validar nombre no validó que el nombre no sea vacío',
  );

  console.assert(
      validarNombre(
          '111111111111111111111111111111111111111111111111111111111111111111111111111111111111111') ===
      'Este campo debe tener menos de 50 caracteres',
      'Validar nombre no validó que el nombre sea menor a 50 caracteres',
  );

  console.assert(
      validarNombre("Fabricio") === '',
        'validarNombre fallo con un nombre valido'
      );
  
}



function probarValidarCiudad(){
    console.assert(
        validarCiudad("Buenos Aires") === '',
        'validarCiudad no funciono con un nombre de ciduad valido'
    );

    console.assert(
        validarCiudad('') === 'Este campo no puede estar vacio',
        'validarCiudad no mostro un error cuando la ciudad es vacia'
    );

    console.assert(
        validarCiudad(
            '1111111111111111111111111111111111111111111111111111111111111111111111111111111111111') === 
        'Este campo debe tener al menos 1 ciudad seleccionada',
        'Validar ciudad no valido que la ciudad no este seleccionado'
    );
}



function probarValidarDescripcion(){
    console.assert(
        validarDescripcion('') === 'Este campo debe tener al menos 1 caracter', 
        'validarDescripcion no valido que la descripcion no este vacia.'
    );

    console.assert(
        validarDescripcion(
            '111111111111111111111111111111111111111111111111111111111111111111111111') ===
        'Este campo debe tener menos de 50 caracteres',
        'Validar descripcion no valido que la descripcion tenga menos de 50 caracteres'
    );

    console.assert(
        validarDescripcion(
            "Regalo") === '',
        'validarDescripcion no funciono con una descripcion correcta.'
    );

    console.assert(
        validarDescripcion(
            ".,.,.,.,") === "El campo descripcion solo puede tener numeros y letras",
            "La funcion validar descripcion no valido que fuera solo numeros y letras."
    )
}

probarValidarNombre();
probarValidarCiudad();
probarValidarDescripcion();

    