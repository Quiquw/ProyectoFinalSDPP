import React, { Fragment, useState, useEffect } from "react";
import Navbar from "./Components/Navbar";
import IceCreamList from "./Components/IceCreamList";
import Form from "./Components/Form";
import IceCreamCard from "./Components/IceCreamCard";

function App() {
  const [iceCream, setIceCream] = useState({
    Sabor: "",
    Precio: 0,
    UnidadesDisponibles: 0,
    Url: "",
  });

  const [iceCreams, setIceCreams] = useState([]);

  const [listUpdate, setListUpdate] = useState(false);

  useEffect(() => {
    const getIceCreams = () => {
      fetch("https://localhost:44304/miApi/Helados")
        .then((res) => res.json())
        .then((res) => setIceCreams(res));
    };
    getIceCreams();
    setListUpdate(false);
  }, [listUpdate]);

  return (
    <Fragment>
      <Navbar brand="Proyecto Final Sistemas Distribuidos y Programación en Paralelo"> </Navbar>
      <nav>
        <div className="nav nav-tabs" id="nav-tab" role="tablist">
          <button
            className="nav-link active"
            id="nav-list-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-list"
            type="button"
            role="tab"
            aria-controls="nav-list"
            aria-selected="true"
          >
            Lista de Helados
          </button>
          <button
            className="nav-link"
            id="nav-add-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-add"
            type="button"
            role="tab"
            aria-controls="nav-add"
            aria-selected="false"
          >
            Agregar Helados
          </button>
          <button
            className="nav-link"
            id="nav-update-tab"
            data-bs-toggle="tab"
            data-bs-target="#nav-update"
            type="button"
            role="tab"
            aria-controls="nav-update"
            aria-selected="false"
          >
            Display Helados
          </button>
        </div>
      </nav>
      <div className="tab-content" id="nav-tabContent">
        <div
          className="tab-pane fade show active"
          id="nav-list"
          role="tabpanel"
          aria-labelledby="nav-list-tab"
        >
          <div className="container-fluid">
            <h2 style={{ textAlign: "center" }}>Lista de Helados</h2>
            <IceCreamList
              iceCream={iceCream}
              setIceCream={setIceCream}
              iceCreams={iceCreams}
              setListUpdate={setListUpdate}
            ></IceCreamList>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="nav-add"
          role="tabpanel"
          aria-labelledby="nav-add-tab"
        >
          <div className="container">
            <h2 style={{ textAlign: "center" }}>Formulario de Helados</h2>
            <Form iceCream={iceCream} setIceCream={setIceCream}></Form>
          </div>
        </div>
        <div
          className="tab-pane fade"
          id="nav-update"
          role="tabpanel"
          aria-labelledby="nav-update-tab"
        >
                    <div className="container-fluid">
            <h2 style={{ textAlign: "center" }}>Carta de Helados</h2>
            <IceCreamCard
              iceCream={iceCream}
              setIceCream={setIceCream}
              iceCreams={iceCreams}
              setListUpdate={setListUpdate}
            ></IceCreamCard>
          </div>
        </div>
      </div>
      {/* <div className="container">
        <div className="row">
          <div className="col-7">
            <h2 style={{textAlign: "center"}}>Ice Cream List</h2>
            <IceCreamList iceCream={iceCream} setIceCream={setIceCream} iceCreams={iceCreams} setListUpdate={setListUpdate}></IceCreamList>
          </div>
          <div className="col-5">
          <h2 style={{textAlign: "center"}}>Ice Cream From</h2>
          <Form iceCream={iceCream} setIceCream={setIceCream}></Form>
          </div>
        </div>
      </div> */}
    </Fragment>
  );
}

export default App;
