export const QUESTION_ANSWER = 'QUESTION_ANSWER';

// Acción de responder a una pregunta
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