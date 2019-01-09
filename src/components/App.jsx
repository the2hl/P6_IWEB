// Imports
import React from 'react';
import {connect} from 'react-redux';
import Game from "./Game.jsx";
import {questionAnswer, changeQuestion, submit} from '../reducers/actions.jsx';
import './App.css';

class App extends React.Component {
  render() {
    console.log('Render de App');
    return (
      <div >
        <Game question={this.props.questions[this.props.currentQuestion]}
              onQuestionAnswer={(answer)=>{ // Se pasa como parámetro la respuesta
                // Con dispatch se lanzar la acción questionAnswer
                this.props.dispatch(questionAnswer(this.props.currentQuestion, answer));
              }}
              clickAnterior={()=>{
                let indice = this.props.currentQuestion-1;
                // Con dispatch se lanzar la acción changeQuestionAnswer
                this.props.dispatch(changeQuestion(indice))
              }}
              clickSiguiente={()=>{
                let indice = this.props.currentQuestion+1;
                // Con dispatch se lanzar la acción changeQuestion
                this.props.dispatch(changeQuestion(indice));
              }}
              clickSubmit={()=>{
                // Con dispatch se lanzar la acción changeQuestion
                this.props.dispatch(submit(this.props.questions));
              }}
              page={this.props.currentQuestion}
              nQuestions={this.props.questions.length}
              terminado={this.props.finished}
              puntuacion={this.props.score}
        />
      </div>
    );
  }
}

function mapStateToProps(state){
  return{
    score: state.score,
    finished: state.finished,
    currentQuestion: state.currentQuestion,
    questions: state.questions
  };
}

export default connect(mapStateToProps)(App);
