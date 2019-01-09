import React from 'react' ;

export default class Game extends React.Component {
	render () {
		// Constante auxiliar
		let tips = this.props.question.tips.map((tip, index)=>{
			return (
				<li key={index}>{tip}</li>
			);
		})

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
								alt="imagen" height="400dp" width="400dp"/>
						</span>
						<span id= "texto">
							<div id= "pregunta">
								<h1>Pregunta:</h1>
								<p>{this.props.question.question /* pregunta */}</p>
							</div>
							<div id= "pistas">
								<h1>Pistas:</h1>
								<ul>{tips /* pistas */}</ul>
							</div>
							<div id= "respuesta">
								<h1>Tu respuesta:</h1>
								<input type= "text" value= {this.props.question.userAnswer || ""} 
									onChange={(e)=>{
										let valor = e.target.value;
										this.props.onQuestionAnswer(valor);
										// Se pasa como parámetro  el valor del input
									}}
								/>
							</div>
						</span>
					</div>
					<div id= "botones">
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
					<h1>Tu puntuación:</h1>
					<p>{this.props.puntuacion /* score final*/}</p>
					<p>Refrescar la página para volver a jugar</p>
				</div>
			);
		}
		
	}
}
