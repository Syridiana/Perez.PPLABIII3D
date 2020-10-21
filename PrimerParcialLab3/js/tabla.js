
export default function crearTabla(lista){ // devuelve una tabla

    const tabla = document.createElement('table');
    tabla.appendChild(crearCabecera(lista[0]));
    tabla.appendChild(crearCuerpo(lista));

    return tabla;
}


const listaPersonas = JSON.parse(localStorage.getItem("personas"));


function crearCabecera(item){ // devuelve thead
    const thead = document.createElement('thead');
    const tr = document.createElement('tr');
    
    for (const key in item) {
       const th = document.createElement('th');
       const texto = document.createTextNode(key);
       th.appendChild(texto);

       tr.appendChild(th);
    }

    
    thead.appendChild(tr);

    return thead;

}





function crearCuerpo(lista){ // devuelve tbody
    const tbody = document.createElement('tbody');

    lista.forEach(element => {
        const tr = document.createElement('tr');

        for (const key in element) {
            const td = document.createElement('td');
            const texto = document.createTextNode(element[key]);
            td.appendChild(texto);
            tr.appendChild(td);
        }

        if(element.hasOwnProperty('id')){
            tr.setAttribute('data-id', element['id']);
        }
        
        agregarManejadorTR(tr);
        tbody.appendChild(tr);

    });

    return tbody;

}


function agregarManejadorTR(tr){
    if(tr){
        tr.addEventListener('click', function(e) {


            const id = e.target.parentElement.getAttribute('data-id');

            const titulo = document.getElementById("txtTitulo");
            const descripcion = document.getElementById("txtDescripcion");
            const precio = document.getElementById("txtPrecio");
            const puertas = document.getElementById("txtPuertas");
            const km = document.getElementById("txtKM");
            const potencia = document.getElementById("txtPotencia");

            
            document.getElementById("txtID").value = id;

            listaPersonas.forEach(element => {
                if(id == element.id)
                {
                    
                    titulo.value = element.titulo;
                    descripcion.value = element.descripcion;
                    precio.value = element.precio;
                    puertas.value = element.num_puertas;
                    km.value = element.num_kms;
                    potencia.value = element.potencia;

                    if(element.transaccion == "venta")
                    {
                        document.getElementById("TVenta").checked = true;
                    } else
                    {
                        document.getElementById("TAlquiler").checked = true;
                    }

                }
            });

        });
    }

}

