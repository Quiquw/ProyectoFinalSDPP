import React from 'react';


const IceCreamCard = ({ iceCream, setIceCream, iceCreams, setListUpdate }) => {
  
  let {Precio, UnidadesDisponibles} = iceCream

  const handleBuy = id => {
  
    //  document.getElementById()
  
      Precio = parseFloat(Precio);
      UnidadesDisponibles = parseInt(UnidadesDisponibles);
  
      // validación de los datos
      // TODO: Validacion Negativos, etc
      
      const toUpdate = iceCreams.find(el => el.ID === id)
      if (toUpdate.UnidadesDisponibles === 0){
        alert("Ya no quedan unidades disponibles de " + toUpdate.Sabor);
        return;
      }
      const requestInit = {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...toUpdate, UnidadesDisponibles: toUpdate.UnidadesDisponibles - 1})
      };
      fetch("https://localhost:44304/miApi/Helados/" + id, requestInit)
        .then((res) => res.text())
        .then((res) => setListUpdate(true));
  
      //reiniciando state del helado
      setIceCream({
        Sabor: "",
        Precio: 0,
        UnidadesDisponibles: 0,
        Url: ""
      });
    };

  return (
    <>
      {iceCreams.map((iceCream) => (
        <div class="container" style={{ textAlign: "center", width: "25rem", float: "left", marginblock: "10cm", height:"20rem" }}>
          <div><p></p></div>
          <div className="card">
          <img class="card-img-top" style={{height: "280px"}} src={iceCream.Url} alt={`Imagen del Helado de:`+iceCream.Sabor}/>
            <div className="card-body">
              <h5 className="card-title">Sabor: <b>{iceCream.Sabor}</b></h5>
              <p className="card-text">{`Precio: €`+iceCream.Precio}</p>
              <p className="card-text">{`Unidades Disponibles: `+iceCream.UnidadesDisponibles}</p>
               <button onClick={() => handleBuy(iceCream.ID)} className="btn btn-primary">
                Comprar
              </button>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default IceCreamCard;
