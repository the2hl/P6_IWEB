import React from 'react' ;

export default class Game extends React.Component {
	render () {
		// Constante auxiliar
		let tips = this.props.question.tips.map((tip, index)=>{
			return (
				<li key={index} role="treeitem">{tip}</li>
			);
		});

		let pagina = this.props.page;
		let botonAnt = (
			<button id="anterior" onClick= {()=>{this.props.clickAnterior()}}>
				Anterior
			</button>
		);
		let botonSig = (
			<button id="siguiente" onClick= {()=>{this.props.clickSiguiente()}}>
				Siguiente
			</button>
		);
		if (pagina === 0){
			botonAnt = null;
		}else if(pagina === this.props.nQuestions-1){
			botonSig = null;
		}
		if (!this.props.terminado){
			return (
				<div id="raiz">
					<div id= "contenido">
						<span id= "imagenDiv">
							<img id= "imagen" src= {this.props.question.attachment.url /* imagen */}
								alt="imagen relacionada con el quiz" height="400dp" width="400dp"/>
						</span>
						<span id= "texto">
							<div id= "pregunta" data-message= "Pregunta del quiz">
								<h1>Pregunta:</h1>
								<p>{this.props.question.question /* pregunta */}</p>
							</div>
							<div id= "pistas" data-message= "Pistas del quiz">
								<h1>Pistas:</h1>
								<ul role="group">{tips /* pistas */}</ul>
							</div>
							<div id= "respuesta" data-message= "Respuesta del quiz">
								<label htmlFor="respuestaUsuario">Tu respuesta:</label>
								<input type= "text" id= "respuestaUsuario" name= "respuestaUsuario"
									placeholder= "Escribe tu respuesta aquí" 
									value= {this.props.question.userAnswer || ""} 
									onChange={(e)=>{
										let valor = e.target.value;
										this.props.onQuestionAnswer(valor);
										// Se pasa como parámetro  el valor del input
									}}
								/>
							</div>
						</span>
					</div>
					<div id= "botones" data-message= "Botones del quiz">
						{botonAnt}
						<button id="submit" onClick= {()=>{this.props.clickSubmit()}}>
						Submit
						</button>
						{botonSig}
					</div>
				</div>
			);
		}else{
			return (
				<div>
					<h1>Tu puntuación es:</h1>
					<h2>{this.props.puntuacion /* score final*/}</h2>
					<p>Refresca la página para volver a jugar</p>
				</div>
			);
		}
		
	}
}
