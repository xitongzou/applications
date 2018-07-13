import React, { Component } from 'react';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import './QuizIntro.css';

class QuizIntro extends Component {

  constructor(props) {
    super(props);

    this.renderQuizCard = this.renderQuizCard.bind(this);
  }

  renderQuizCard() {
    window.location.href = '/quiz/1';
  }

  render() {
    return (
      <div className="quiz-intro">
        <Card>
        <CardContent>
          <Typography variant="headline" component="h2">
            Welcome to the Trivia Challenge!
          </Typography>
          <Typography className="content" color="textSecondary">
            You will be presented with 10 True or False questions.
          </Typography>
          <Typography className="content" color="textSecondary">
            Can you score 100%?
          </Typography>
        </CardContent>
        <CardActions>
          <Button className="btn-begin" onClick={this.renderQuizCard} variant="contained">Begin</Button>
        </CardActions>
      </Card>
      </div>
    );
  }
}

export default QuizIntro;