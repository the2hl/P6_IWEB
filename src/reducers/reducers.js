/***** Imports *****/
import {combineReducers} from 'redux';
import {QUESTION_ANSWER} from './actions'

/***** Se crea un reducer básico para cada estado *****/
/* El reducer es una función pura que toma el estado anterior
 * y una acción, y devuelve el nuevo estado
 */

function score(state = 0, action ={}){
	switch(action.type){
		default:
			return state;
	}
}

function finished(state = false, action = {}){
	switch(action.type){
		default:
			return state;
	}
}

function currentQuestion(state = false, action = {}){
	switch(action.type){
		default:
			return state;
	}
}

function questions(state = [], action = {}){
	switch(action.type){
		// Atiende la acción de tipo QUESTION_ANSWER
		case QUESTION_ANSWER:
			// Para cada pregunta del array
			return state.map((question, i) => {
				return { ...question,
							userAnswer:
								/* Si el índice de la pregunta respondida coincide,
								 * se guarda la respuesta
								 */
								action.payload.index === i ?
								action.payload.answer : question.userAnswer}
			})
		default:
			return state;
	}
}

// Combinación de todos los reducers
const GlobalState = (combineReducers({
	score,
	finished,
	currentQuestion,
	questions
}));

export default GlobalState;