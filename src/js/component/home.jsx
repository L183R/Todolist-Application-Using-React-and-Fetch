import React, {useState} from "react";
// import Tabla from "/.Tabla.jsx";


//create your first component
const Home = () => {


	//declaracion de estados
	// espacio de memoria, la funcion que actualiza elvalor inicial
	const[input,setInput]=useState("")//1. creamos un estado del input email
	// const[password,setPassword]=useState("")
	const [todos, setTodos] = useState([])
	//3.vinculamos la funcion
	// function handlePassword(e) {
	// 	setPassword(e.target.value)
	// }
		// function removerItem(index) {
		// 	const newLista = [...todos];
		// 	newLista.splice(index, 1);
		// 	setTodos(newLista);
		// }
		function removerItem(event) {
			
			let borranding = event.target.id
			console.log(todos)
			console.log(borranding)
			setTodos (todos.filter(todos => todos != borranding))
			}

	// 4. procesamos todos los datos del formulario
	function enviarDatos(e) {
		e.preventDefault()// detenemos el comportamiento predeterminado para procesar nuestro codigo
		setTodos([...todos, input]);
		setInput("");
	}
	


	return (
		<>
		<form className="container" onSubmit={enviarDatos}>
  <div className="mb-3">
    <img src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/To_Do_List.png?width=893&height=600&name=To_Do_List.png"></ img>
    {/*2. definimos el evento ochange en el input */}
	<input type="text" className="form-control" id="elInput" aria-describedby="emailHelp" onChange={(e)=>{setInput(e.target.value)}} value={input}></ input>
    <div id="inputList" className="form-text">
		<ul className="list-group">
			{todos.map((element, index) => <div className="row"><li className="list-group-item col-11">{element}</li><button type="button" className="btn btn-outline-danger col-1" onClick={() => removerItem(event)} id={element}>X</button></div>)}
		</ul>
	</div>
  </div>
</form>
	
</>
	);
};

export default Home;