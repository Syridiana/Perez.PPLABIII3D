import crearTabla from "./tabla.js";
import Anuncio from "./anuncio.js";
import Anuncio_Auto from "./anuncio_auto.js";


window.addEventListener('load', inicializarManejadores);



const btnGuardar = document.getElementById("btnGuardar");

const btnActualizar = document.getElementById("btnActualizar");

const btnEliminar = document.getElementById("btnEliminar");






let listaAnuncios = [{
    "id": 1,
    "titulo": "GMC",
    "transaccion": "alquiler",
    "descripcion": "Savana 3500",
    "precio": 5940092,
    "num_puertas": 4,
    "num_kms": 80352,
    "potencia": 6112
}, {
    "id": 2,
    "titulo": "Ford",
    "transaccion": "alquiler",
    "descripcion": "Econoline E250",
    "precio": 5107498,
    "num_puertas": 3,
    "num_kms": 54836,
    "potencia": 6767
}, {
    "id": 3,
    "titulo": "GMC",
    "transaccion": "venta",
    "descripcion": "Savana",
    "precio": 9651916,
    "num_puertas": 2,
    "num_kms": 64607,
    "potencia": 7271
}, {
    "id": 4,
    "titulo": "Mercedes-Benz",
    "transaccion": "venta",
    "descripcion": "SL-Class",
    "precio": 3975066,
    "num_puertas": 3,
    "num_kms": 52438,
    "potencia": 12830
}, {
    "id": 5,
    "titulo": "Mitsubishi",
    "transaccion": "alquiler",
    "descripcion": "Raider",
    "precio": 7346993,
    "num_puertas": 5,
    "num_kms": 30479,
    "potencia": 18577
}, {
    "id": 6,
    "titulo": "Porsche",
    "transaccion": "alquiler",
    "descripcion": "911",
    "precio": 3857096,
    "num_puertas": 2,
    "num_kms": 58423,
    "potencia": 19387
}, {
    "id": 7,
    "titulo": "Ford",
    "transaccion": "alquiler",
    "descripcion": "Explorer Sport Trac",
    "precio": 6735688,
    "num_puertas": 4,
    "num_kms": 67712,
    "potencia": 6584
}, {
    "id": 8,
    "titulo": "GMC",
    "transaccion": "venta",
    "descripcion": "Suburban 2500",
    "precio": 978045,
    "num_puertas": 4,
    "num_kms": 21961,
    "potencia": 14132
}, {
    "id": 9,
    "titulo": "GMC",
    "transaccion": "alquiler",
    "descripcion": "Vandura 1500",
    "precio": 6579717,
    "num_puertas": 3,
    "num_kms": 35838,
    "potencia": 18801
}, {
    "id": 10,
    "titulo": "Land Rover",
    "transaccion": "alquiler",
    "descripcion": "LR2",
    "precio": 6739313,
    "num_puertas": 4,
    "num_kms": 98846,
    "potencia": 4028
}, {
    "id": 11,
    "titulo": "BMW",
    "transaccion": "venta",
    "descripcion": "X5",
    "precio": 3813847,
    "num_puertas": 4,
    "num_kms": 70711,
    "potencia": 11942
}, {
    "id": 12,
    "titulo": "Honda",
    "transaccion": "venta",
    "descripcion": "Prelude",
    "precio": 4360876,
    "num_puertas": 3,
    "num_kms": 32527,
    "potencia": 14459
}, {
    "id": 13,
    "titulo": "Cadillac",
    "transaccion": "venta",
    "descripcion": "DeVille",
    "precio": 7607393,
    "num_puertas": 5,
    "num_kms": 30213,
    "potencia": 13075
}, {
    "id": 14,
    "titulo": "Porsche",
    "transaccion": "venta",
    "descripcion": "911",
    "precio": 4490418,
    "num_puertas": 4,
    "num_kms": 65080,
    "potencia": 12103
}, {
    "id": 15,
    "titulo": "Chevrolet",
    "transaccion": "alquiler",
    "descripcion": "Lumina APV",
    "precio": 7842951,
    "num_puertas": 3,
    "num_kms": 48935,
    "potencia": 4015
}, {
    "id": 16,
    "titulo": "Lotus",
    "transaccion": "venta",
    "descripcion": "Esprit",
    "precio": 9696407,
    "num_puertas": 4,
    "num_kms": 75754,
    "potencia": 16419
}, {
    "id": 17,
    "titulo": "BMW",
    "transaccion": "venta",
    "descripcion": "7 Series",
    "precio": 5009268,
    "num_puertas": 5,
    "num_kms": 76829,
    "potencia": 8598
}, {
    "id": 18,
    "titulo": "Ford",
    "transaccion": "venta",
    "descripcion": "Transit Connect",
    "precio": 7227463,
    "num_puertas": 5,
    "num_kms": 7356,
    "potencia": 14448
}, {
    "id": 19,
    "titulo": "Ford",
    "transaccion": "venta",
    "descripcion": "Explorer",
    "precio": 7363209,
    "num_puertas": 4,
    "num_kms": 73253,
    "potencia": 14771
}, {
    "id": 20,
    "titulo": "Mazda",
    "transaccion": "alquiler",
    "descripcion": "RX-8",
    "precio": 8719096,
    "num_puertas": 5,
    "num_kms": 43113,
    "potencia": 9463
}];


localStorage.setItem("anuncios", JSON.stringify(listaAnuncios));


const listaAnunciosLS = JSON.parse(localStorage.getItem("anuncios"));

function inicializarManejadores() {
    const divTabla = document.getElementById('divTabla');
    divTabla.appendChild(crearTabla(listaAnunciosLS));
};


function altaAnuncio() {

    let maxIndex = 0;

    listaAnunciosLS.forEach(element => {
        if(element['id'] > maxIndex)
        {
            maxIndex = element['id'];
        }
    
});

maxIndex += 1;

    const titulo = document.getElementById("txtTitulo").value;
    const descripcion = document.getElementById("txtDescripcion").value;
    const transaccion = document.querySelector('input[name="transaccion"]:checked').value;
    const precio = document.getElementById("txtPrecio").value;
    const puertas = document.getElementById("txtPuertas").value;
    const km = document.getElementById("txtKM").value;
    const potencia = document.getElementById("txtPotencia").value;


    const nuevoAnuncio = new Anuncio_Auto(maxIndex, titulo, transaccion, descripcion, precio, puertas, km, potencia);

    return nuevoAnuncio;
}




btnGuardar.addEventListener('click', function (e) {
    
    const camposCompletos = document.getElementById('myForm').checkValidity();

    e.preventDefault();

    if(camposCompletos){
        const nuevoAnuncio = altaAnuncio();

        listaAnunciosLS.push(nuevoAnuncio);
    
        const divTabla = document.getElementById('divTabla');
    
        divTabla.removeChild(divTabla.lastChild);
    
        divTabla.appendChild(crearTabla(listaAnunciosLS));
    
        localStorage.setItem("anuncios", JSON.stringify(listaAnunciosLS));

    }



});


btnActualizar.addEventListener('click', function (e) {


    e.preventDefault();
    const selectedId = document.getElementById("txtID").value;

    if(selectedId){

    listaAnunciosLS.forEach(element => {
        if (element.id == selectedId) {
            const titulo = document.getElementById("txtTitulo").value;
            const descripcion = document.getElementById("txtDescripcion").value;
            const precio = document.getElementById("txtPrecio").value;
            const puertas = document.getElementById("txtPuertas").value;
            const km = document.getElementById("txtKM").value;
            const potencia = document.getElementById("txtPotencia").value;

            element['titulo'] = titulo;
            element['descripcion'] = descripcion;
            element['precio'] = precio;
            element['num_puertas'] = puertas;
            element['num_kms'] = km;
            element['potencia'] = potencia;


            if (document.getElementById("TVenta").checked) {
                element['transaccion'] = "venta";
            } else {
                element['transaccion'] = "alquiler";
            }

            if (confirm("Seguro que desea guardar los cambios?")) {
                localStorage.setItem("personas", JSON.stringify(listaAnunciosLS));
                divTabla.removeChild(divTabla.lastChild);

                divTabla.appendChild(crearTabla(listaAnunciosLS));
            }

        }
    });
} else
{
    alert("Debe seleccionar primero un anuncio para modificar");
}


});


btnEliminar.addEventListener('click', function (e) {

    e.preventDefault();
    const selectedId = document.getElementById("txtID").value;
   

    if (selectedId) {
        listaAnunciosLS.forEach(element => {

            if (element.id == selectedId) {
                const index = listaAnunciosLS.indexOf(element);


                if (confirm("Seguro que desea eliminar el anuncio?")) {
                    listaAnunciosLS.splice(index, 1);

                    localStorage.setItem("personas", JSON.stringify(listaAnunciosLS));

                    divTabla.removeChild(divTabla.lastChild);

                    divTabla.appendChild(crearTabla(listaAnunciosLS));
                }

            }
        });
    } else
    {
        alert("Debe seleccionar primero un anuncio para eliminar");
    }




}); 