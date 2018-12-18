import {combineReducers} from 'redux';

// Se crea un reducer básico para cada estado
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

function questions(state = false, action = {}){
	switch(action.type){
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