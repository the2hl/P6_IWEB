import React from 'react' ;

export default class Game extends React.Component {
	render () {
		return (
			<div>
			{this.props.question.question /*la pregunta  */}
				<input type="text" value={this.props.question.userAnswer || ''} 
					onChange={(e)=>{
						this.props.onQuestionAnswer(e.target.value)
						// Se pasa como parámetro  el valor del input
					}}
				/>
			</div>
		);
	}
}