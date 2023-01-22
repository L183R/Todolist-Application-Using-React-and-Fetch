import React, {useState, useEffect} from "react";

const Home = () => {


	const[input,setInput]=useState("")

	const [todos, setTodos] = useState([])

		function removerItem(index) {
			const newLista = [...todos];
			newLista.splice(index, 1);
			setTodos(newLista);
			actualizarTodos()
		}
		// function removerItem(event) {
			
		// 	let borranding = event.target.id
		// 	console.log(todos)
		// 	console.log(borranding)
		// 	setTodos (todos.filter(todos => todos != borranding))
		// 	}

		function crearUsuario(){
			fetch(`https://assets.breatheco.de/apis/fake/todos/user/merliber`,
			{method: 'POST', 
			headers: {
				'Content-Type': 'application/json'},
			body: JSON.stringify([])
		  })
		}

		function cargarInput(e) {
			e.preventDefault()// detenemos el comportamiento predeterminado para procesar nuestro codigo
			let unToDo = {}
			unToDo.label = input
			unToDo.done = false
			setTodos([...todos, unToDo]);
			setInput("");
			actualizarTodos()
		}
		function cargarTodos(){
			fetch(`https://assets.breatheco.de/apis/fake/todos/user/merliber`,
			{method: 'GET',})
			.then((response)=>response.json())
			.then((data)=>setTodos(data))
			.then((data)=>console.log(data))
		}
	
	
		function actualizarTodos(){
			fetch(`https://assets.breatheco.de/apis/fake/todos/user/merliber`,
			{method: 'PUT', 
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(todos)})
			.then((response)=>response.json())
		}

		function hechoNoHecho(index) {
			const newTodos = [...todos];
			newTodos[index].done = newTodos[index].done === false ? true : false;
			setTodos(newTodos);
			actualizarTodos()
			console.log(todos)
		  }

		useEffect(() => {
			crearUsuario()    
		}, [])

		useEffect(() => {
			cargarTodos()    
		}, [])

		return (
			<>
			<form className="container" onSubmit={cargarInput}>
	  <div className="mb-3">
		<img src="https://53.fs1.hubspotusercontent-na1.net/hub/53/hubfs/To_Do_List.png?width=893&height=600&name=To_Do_List.png"></ img>
		{/*2. definimos el evento ochange en el input */}
		<input type="text" className="form-control" id="elInput" aria-describedby="emailHelp" onChange={(e)=>{setInput(e.target.value)}} value={input}></ input>
		<div id="inputList" className="form-text">
			<ul className="list-group">
				{todos.map((element, index) => <div className="row" key={index}><li className="list-group-item col-10">{element.label}</li><button type="button" className={`btn btn-outline-${todos[index].done === true ? 'success' : 'danger'} col-1`} onClick={() => hechoNoHecho(index)}> {todos[index].done === true ? <i className="fa fa-check" /> : <i className="fa fa-times" />}</button><button type="button" className="btn btn-outline-danger col-1" onClick={() => removerItem(index)}><i className="fas fa-trash-alt"></i></button></div>)}
			</ul>
		</div>
	  </div>
	</form>
		
	</>
		);
	};
	
	export default Home;