import './App.css';

function Form() {


  
  return (
    <div className="App">
      <div>  
          <h5> Información de contacto </h5>
          <h5>x</h5>
      </div>
        <form>
          <label>Código de cliente: </label>
            <input type='text' disabled={true} defaultValue = 'xmxwebdemo2' />
          <label>Usuario: *</label>
            <input type='text' />
          <label>Nombre: *</label>
            <input type='text' />
          <label>Cargo: *</label>
            <input type='text' />
          <label>Teléfono: *</label>
            <input type='text' />
          <label>Correro electrónico: *</label>
            <input type='email' />
          <label>Número de celular: *</label>
            <input type='text' />
          <label>Tipo de contacto: *</label>
            <select>
              <option>Contacto Comercial</option>
              <option>Pago de factura</option>
              <option>Representante legal</option>
              <option>Retiro de mercadería</option>
            </select>
          <label>Autorizado para acceder a WebStore</label>
            <input type='checkbox'/>
            <label>Autorizado para crear ordenes</label>
            <input type='checkbox'/>
            <label>¿Desea que se envíe la información de acceso al usuario?</label>
            <input type='checkbox'/>
          <button type='submit'>Aceptar</button>
          <button >Cancelar</button>
        </form>
    </div>
  );
}

export default Form;
