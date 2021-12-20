import React from 'react';

const IceCreamList = ({ iceCream, setIceCream, iceCreams, setListUpdate }) => {


  const handleDelete = id => {
    const requestInit = {
      method: 'DELETE'
    }
    fetch("https://localhost:44304/miApi/Helados/" + id, requestInit)
      .then((res) => res.text())
      .then((res) => setListUpdate(true));
  }

  let { Sabor, Precio, UnidadesDisponibles, Url } = iceCream

  const handleUpdate = id => {

    Precio = parseFloat(Precio);
    UnidadesDisponibles = parseInt(UnidadesDisponibles);

    // validación de los datos
    // TODO: Validacion Negativos, etc
    if (Sabor === "" || Precio <= 0.0 || UnidadesDisponibles <= 0 || Url === "") {
      alert("Todos los campos deben de estar llenos");
      return;
    }

    const requestInit = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ ...iceCream, ID: id }),
    };
    fetch("https://localhost:44304/miApi/Helados/" + id, requestInit)
      .then((res) => res.text())
      .then((res) => setListUpdate(true));

    //reiniciando state del helado
    setIceCream({
      Sabor: "",
      Precio: 0,
      UnidadesDisponibles: 0,
      Url: "",
    });
  };

  return (

    <> <table className="table">
    <thead>
      <tr>
   {/*      <th>ID</th> */}
        <th>Sabor</th>
        <th>Precio</th>
        <th>Unidades</th>
        <th>Url</th>
        <th>Actualizar</th>
        <th>Borrar</th>
      </tr>
    </thead>
    <tbody>
      {iceCreams.map((iceCream) => (
        <tr key={iceCream.ID}>
          {/* <td>{iceCream.ID}</td> */}
          <td>{iceCream.Sabor}</td>
          <td>{iceCream.Precio}</td>
          <td>{iceCream.UnidadesDisponibles}</td>
          <td>{iceCream.Url}</td>
          <td>
          <div className="mb-4">
              <button
           onClick={() => handleUpdate(iceCream.ID)}
       //   onClick={setModa}
                className="btn btn-info"
              >
                Update
              </button>
             {/* <button onClick={handleModal()}>Click to Open Modal</button> */}
            </div>
            </td>
           <td> 
           <div className="mb-4">
              <button
                onClick={() => handleDelete(iceCream.ID)}
                className="btn btn-danger"
              >
                Delete
              </button>
            </div>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
  
  
  {/* <Modal isOpen={modalIsOpen}>
                <button onClick={handleModal}>x</button>
                <SeaaList/>
            </Modal> */}
            
</>


   
  );
};

export default IceCreamList;
