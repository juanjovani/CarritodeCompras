//variables para objetos del documentos
const carrito = document.querySelector('#carrito');
const listaCursos = document.querySelector('#lista-cursos');
const contenedorCarrito = document.querySelector('#lista-carrito tbody');
const vaciarCarritoBtn = document.querySelector('#vaciar-carrito');


const agregarCurso= (e) =>{
    e.preventDefault();
    console.log(e.target.classList);
    if(e.target.classList.contains('agregar-carrito')){
        console.log("presionaste el boton");
    }
}

const cargarEventListener = () =>{
    //agregar funcion de carga de cursos al carrito
    listaCursos.addEventListener('click',agregarCurso);

}
cargarEventListener();