export function validate(input){
    let errors = {};

    if(input.usuario.length !== 6){
        errors.usuario = 'Longitud de seis carácteres';
        console.log(input.usuario.slice(0,3))
    } else if( input.usuario.slice(0,3) !== 'XMX' ){
        errors.usuario = 'El usuario debe iniciar en XMX';
    }

    if(input.nombre.length < 5 || input.nombre.length > 15){
        errors.nombre = 'Longitud mínima de 5 carácteres y máxima de 15';
    }

    if(input.cargo.length < 5 || input.cargo.length > 10){
        errors.cargo = 'Longitud mínima de 5 carácteres y máxim de 10';
    }

    if(input.teléfono.length !==  7){
        errors.teléfono = 'Longitud de 7 carácteres ';
    }

    const emailRegex = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;

    if (!emailRegex.test(input.correo)) {
      errors.correo = "correo incorrecto";
    }
    return errors;
}