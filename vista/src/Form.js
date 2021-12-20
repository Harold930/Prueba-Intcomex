import { useState } from 'react';
import axios from 'axios';
import validate from './validate';
import './App.css';

function Form() {

  const [input, setInput] = useState({
    usuario:'',
    nombre:'',
    cargo:'',
    telefono:'',
    correo:'',
    numero:'',
    tipo_contacto:'',
    autorizado:[]
  });
console.log(input)
  const [ errors, setErrors ] = useState({});
  function handleInput(e) {
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
    setErrors(
      validate({
        ...input,
        [e.target.name]: e.target.value,
      })
    );
  }
  
  function handleCheckBox(e) {
    if (e.target.checked) {
      setInput({
        ...input,
        autorizado: [...input.autorizado, e.target.value],
      });
    } else {
      setInput({
        ...input,
        autorizado: input.autorizado.filter(
          (autorizado) => autorizado !== e.target.value
        ),
      });
  }
}

async function handleSubmit(e){
  e.preventDefault();
  let form = { ...input, telefono: `+57${input.telefono}`}
  try {
     const contraseña = await axios.post('http://localhost:3001/form',form);
     console.log(contraseña)
    alert(`su contraseña es ${contraseña.data}`);
    console.log(input)
    setInput({
      usuario:'',
      nombre:'',
      cargo:'',
      telefono:'',
      correo:'',
      numero:'',
      tipo_contacto:'',
      autorizado:[]
    });
  } catch (error) {
    console.log(error);
}
}
  return (
    <div className="App">
      <div>  
          <h5> Información de contacto </h5>
          <h5>x</h5>
      </div>
        <form>
        <div>
          <label>Código de cliente: </label>
            <input type='text' disabled={true} defaultValue = 'xmxwebdemo2' />
        </div>
        <div>
          <label>Usuario: *</label>
            <input type='text' value={input.usuario} name='usuario' onChange={handleInput}/>
            {errors.usuario && <p >{errors.usuario}</p>}
        </div>
        <div>
          <label>Nombre: *</label>
            <input type='text' value={input.nombre} name='nombre' onChange={handleInput} placeholder='Nombre' />
            {errors.nombre && <p >{errors.nombre}</p>}
        </div>
        <div>
            <label>Cargo: *</label>
              <input type='text' value={input.cargo} name='cargo' onChange={handleInput} placeholder='Cargo'/>
              {errors.cargo && <p >{errors.cargo}</p>}

          </div>
          <div>
            <label>Teléfono: *</label>
              <input type='text' value={input.telefono} name='telefono' onChange={handleInput} placeholder='+57'/>
              {errors.telefono && <p >{errors.telefono}</p>}
          </div>
          <div>
            <label>Correro electrónico: *</label>
              <input type='email' value={input.correo} name='correo' onChange={handleInput} placeholder='Correro electrónico'/>
              {errors.correo && <p >{errors.correo}</p>}
          </div>
          <div>
            <label>Número de celular: *</label>
              <input type='text' value={input.numero} name='numero' onChange={handleInput} placeholder='Número de celular'/>
          </div>
          <div>
            <label>Tipo de contacto: *</label>
              <select name='tipo_contacto' onChange={handleInput}>
                <option value='Contacto Comercial' >Contacto Comercial</option>
                <option value='Pago de factura'>Pago de factura</option>
                <option value='Representante legal'>Representante legal</option>
                <option value='Retiro de mercadería'>Retiro de mercadería</option>
              </select>
              {errors.contacto && <p >{errors.contacto}</p>}
          </div>
          <div>
          <label>Autorizado para acceder a WebStore</label>
            <input type='checkbox' value='Autorizado para acceder a WebStore' name='autorizado' onChange={handleCheckBox}/>
            <br/>
            <label>Autorizado para crear ordenes</label>
            <input type='checkbox' value='Autorizado para crear ordenes' name='autorizado' onChange={handleCheckBox}/>
            <br/>
            <label>¿Desea que se envíe la información de acceso al usuario?</label>
            <input type='checkbox' value='¿Desea que se envíe la información de acceso al usuario?' name='autorizado' onChange={handleCheckBox}/>
          </div>
          <div>
            <button type='submit' onClick={handleSubmit}>Aceptar</button>
            <button >Cancelar</button>
          </div>

        </form>
    </div>
  );
}

export default Form;
