export const QUESTION_ANSWER = 'QUESTION_ANSWER';
export const CHANGE_QUESTION = 'CHANGE_QUESTION';
export const SUBMIT = 'SUBMIT';
export const INIT_QUESTIONS = 'INIT_QUESTIONS';


// Acción: responder a una pregunta
export function questionAnswer(index, answer){
	console.log('Acción: questionAnswer');
	return {
		type: QUESTION_ANSWER,
		payload: {
			index,
			answer
		}
	};
}

// Acción: cambiar la pregunta que se muestra
export function changeQuestion(index){
	console.log('Acción: changeQuestion');
	return {
		type: CHANGE_QUESTION,
		payload: {
			index
		}
	};
}

// Acción: finalizar el juego y evaluar las respuestas
export function submit(questions){
	console.log('Acción: submit');
	return {
		type: SUBMIT,
		payload: {
			questions
		}
	};
}

// Acción: inicializar el juego con las preguntas pasadas como argumento
export function initQuestions(questions){
	console.log('Acción: initQuestions');
	return {
		type: INIT_QUESTIONS,
		payload: {
			questions
		}
	};
}