// Imports
import {Provider} from 'react-redux';
import GlobalState from '../reducers/reducers.jsx';
import {createStore} from 'redux';
import React from 'react';
import App from './App.jsx';
import {questions} from "../assets/mock-data.js";

export default class ReduxProvider extends React.Component {
	constructor(props){
		super(props);
		this.initialState = {
			score: 0,
			finished: false,
			currentQuestion: 0, // posicion dentro del array de preguntas
			questions: [...questions]
		};
		this.store = this.configureStore();
	}

	render() {
		return (
			<Provider store={this.store}>
				<div>
					<App/>
				</div>
			</Provider>
		);
	}

	configureStore(){
		return createStore(GlobalState, this.initialState);
	}
}

