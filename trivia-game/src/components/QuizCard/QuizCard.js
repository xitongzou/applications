import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom'
import { connect } from 'react-redux';
import { addAnswer } from '../../actions/index';
import './QuizCard.css';

const mapDispatchToProps = dispatch => {
    return {
        addAnswer: answer => dispatch(addAnswer(answer))
    };
};

class ConnectedQuizCard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            index: this.props.match.params.number === 'result' ? 0 : parseInt(this.props.match.params.number, 10),
            total: 0,
            finished: false,
            currentCard: {
                category: '',
                question: ''
            }
        };

        this.nextCard = this.nextCard.bind(this);
        this.decodeHTML = this.decodeHTML.bind(this);
        this.calculateScore = this.calculateScore.bind(this);
        this.restart = this.restart.bind(this);
    }

    componentDidUpdate(prevProps) {
        const query = this.props.match.params.number;
        if (query === 'results' && !this.state.finished) {
            this.setState({
                finished: true
            })
        } else {
            const index = parseInt(this.props.match.params.number, 10);
            if (!this.state.finished && (index !== this.state.index)
              || (this.props.results.length !== prevProps.results.length)) {
                this.setState({
                    index: index,
                    total: this.props.results.length,
                    currentCard: this.props.results[index-1]
                });
            }
        }
    }

    decodeHTML(question) {
        return {__html: question};
    }

    nextCard(answer) {
        const correctAnswer = this.state.currentCard.correct_answer;
        this.props.addAnswer({
            question: this.state.currentCard.question,
            answer: answer,
            correctAnswer: correctAnswer
        });
        this.props.answers[this.state.index-1] = (answer === correctAnswer);
        this.props.setAnswers(this.props.answers);
    }

    calculateScore() {
        let score = 0;
        for (let i = 0; i < this.props.answers.length; i++) {
            if (this.props.answers[i]) {
                score++;
            }
        }
        return score;
    }

    restart () {
        window.location.href = '/';
    }

    render() {

        let route;
        if (this.state.index === (this.props.results.length)) {
            route = '/quiz/results';
        } else {
            route = '/quiz/' + (this.state.index + 1);
        }

        const answers = this.props.answers;
        const results = this.props.results;
        const decodeHTML = this.decodeHTML;

        return (
          <div className='quiz-card'>
              {!this.state.finished &&
              <Card>
                  <CardContent>
                      <Typography color='textSecondary'>
                          {this.state.currentCard.category}
                       </Typography>

                      <div className='question' dangerouslySetInnerHTML={decodeHTML(this.state.currentCard.question)}></div>
                      <Typography color='textSecondary'>
                          {this.state.index} of {this.state.total}
                      </Typography>
                  </CardContent>
                  <CardActions>
                      <Link to={route} onClick={() => this.nextCard('True')} className='btn'>True</Link>
                      <Link to={route} onClick={() => this.nextCard('False')} className='btn'>False</Link>
                  </CardActions>
              </Card>
              }
              {this.state.finished &&
              <div className="quiz-results">
                  <Card>
                      <CardContent>
                          <Typography variant="headline" component="h2">
                              You scored {this.calculateScore()} out of {this.state.total}
                          </Typography>
                          {answers.map(function(answer, i){
                              return(
                              <div key={i}>
                                <span className='question' dangerouslySetInnerHTML={decodeHTML(results[i].question)}></span>
                                {answer &&
                                <span className="correct"> +CORRECT</span>
                                }
                                {!answer &&
                                <span className="wrong"> -WRONG</span>
                                }
                              </div>);
                          })}
                      </CardContent>
                      <CardActions>
                          <Button className="btn" onClick={this.restart} variant="contained">Play Again?</Button>
                      </CardActions>
                  </Card>
              </div>
              }
          </div>
        );
    }
}

const QuizCard = connect(null, mapDispatchToProps)(ConnectedQuizCard);

export default QuizCard;