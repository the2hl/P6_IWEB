// Imports
import React from 'react';
import {connect} from 'react-redux';
import Game from "./Game";
import {questionAnswer} from '../reducers/actions'

class App extends React.Component {
  render() {
    console.log('Render de App');
    return (
      <div>
        <Game question={this.props.questions[this.props.currentQuestion]}
              onQuestionAnswer={(answer)=>{ // Se pasa como parámetro la respuesta
                // Con dispatch se lanzar la acción questionAnswer
                this.props.dispatch(questionAnswer(this.props.currentQuestion, answer))
              }}
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
