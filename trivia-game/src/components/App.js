import React, { Component } from 'react';
import './App.css';
import { Switch, Route } from 'react-router-dom'
import QuizCard from './QuizCard/QuizCard';
import QuizIntro from './QuizIntro/QuizIntro';
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { answers: state.answers };
};

class ConnectedApp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      results: [],
      answers: []
    };

    this.setAnswers = this.setAnswers.bind(this);
  }

  componentDidMount() {
    fetch('https://opentdb.com/api.php?amount=10&difficulty=hard&type=boolean')
      .then(results => results.json())
      .then(data => {
        this.setState({results: data.results});
      });
  }

  setAnswers(answers) {
    this.setState({
      answers: answers
    });
  }


  render() {

    return (
      <div>
        <main className="quiz-app">
          <Switch>
            <Route exact path='/' render={(props) => <QuizIntro />}/>
            <Route path='/quiz/:number' render={(props) =>
            <QuizCard {...props} intro={false} results={this.state.results} answers={this.state.answers} setAnswers={this.setAnswers} />}/>
          </Switch>
        </main>
      </div>
    );
  }
}

const App = connect(mapStateToProps)(ConnectedApp);

export default App;
