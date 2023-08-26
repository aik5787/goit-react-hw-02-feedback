import { Component } from 'react';
import PropTypes from 'prop-types';
import { Container,Tittle, Button, FeedbackCounter } from './Feedback.styled'


export class Feedback extends Component {
    
    state = {
        good: 0,
        neutral: 0,
        bad: 0
    };


     handleFeedbackClick = (type) => {
    this.setState((prevState) => ({
      [type]: prevState[type] + 1,
    }));
     };
    
    
     render() {
    const { good, neutral, bad } = this.state;

    return (
      <Container >
        <Tittle>Please leave feedback</Tittle>
        <Button onClick={() => this.handleFeedbackClick('good')}>Good</Button>
        <Button onClick={() => this.handleFeedbackClick('neutral')}>Neutral</Button>
        <Button onClick={() => this.handleFeedbackClick('bad')}>Bad</Button>

        <Tittle>Statistics:</Tittle>
        <FeedbackCounter>Good: {good}</FeedbackCounter>
        <FeedbackCounter>Neutral: {neutral}</FeedbackCounter>
        <FeedbackCounter>Bad: {bad}</FeedbackCounter>
      </Container>
    );
     }
}