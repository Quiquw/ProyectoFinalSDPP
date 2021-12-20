import React from "react";

const Form = ({ iceCream, setIceCream }) => {
    const handleChange = (e) => {
        setIceCream({
            ...iceCream,
            [e.target.name]: e.target.value,
        });
    };

    let { Sabor, Precio, UnidadesDisponibles, Url } = iceCream;

    const handleSubmit = () => {
        Precio = parseFloat(Precio);
        UnidadesDisponibles = parseInt(UnidadesDisponibles);

        // validación de los datos
        // TODO: Validacion Negativos, etc
        if (Sabor === "" || Precio <= 0.01 || UnidadesDisponibles <= 0 || Url ==="") {
            alert("Todos los campos deben de estar llenos")
            return
        }

        // consulta
        const requestInit = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(iceCream),
        };
        fetch('https://localhost:44304/miApi/Helados', requestInit)
            .then((res) => res.text())
            .then((res) => console.log(res));

        //reiniciando state del helado
        setIceCream({
            Sabor: "",
            Precio: 0,
            UnidadesDisponibles: 0,
            Url: ""
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="Sabor">Sabor</label>
                <input
                    value={Sabor}
                    name="Sabor"
                    onChange={handleChange}
                    type="text"
                    id="Sabor"
                    className="form-control"
                ></input>
            </div>
            <div className="mb-3">
                <label htmlFor="Precio">Precio</label>
                <input
                    value={Precio}
                    name="Precio"
                    onChange={handleChange}
                    type="number"
                    step="any"
                    id="Precio"
                    className="form-control"

                ></input>
            </div>
            <div className="mb-3">
                <label htmlFor="UnidadesDisponibles">Unidades Disponibles</label>
                <input
                    value={UnidadesDisponibles}
                    name="UnidadesDisponibles"
                    onChange={handleChange}
                    type="number"
                    id="UnidadesDisponibles"
                    className="form-control"
                ></input>
            </div>
            <div className="mb-3">
                <label htmlFor="Url">Url</label>
                <input
                    value={Url}
                    name="Url"
                    onChange={handleChange}
                    type="text"
                    id="Url"
                    className="form-control"
                ></input>
            </div>
            <button type="submit" className="btn btn-primary">
                Agregar
            </button>
        </form>
    );
};

export default Form;
