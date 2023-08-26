import { Component } from 'react';
import { Container,Tittle, ButtonContainer, Button, StatisticsContainer, FeedbackCounter } from './Feedback.styled'


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
    
    
     countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    return good + neutral + bad;
     };
    

  countPositiveFeedbackPercentage = () => {
    const { good } = this.state;
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback > 0 ? Math.round((good / totalFeedback) * 100) : 0;
  };
    
    
     render() {
    const { good, neutral, bad } = this.state;

    return (
      <Container >
        <Tittle>Please leave feedback</Tittle>
            <ButtonContainer>
                <Button onClick={() => this.handleFeedbackClick('good')}>Good</Button>
        <Button onClick={() => this.handleFeedbackClick('neutral')}>Neutral</Button>
        <Button onClick={() => this.handleFeedbackClick('bad')}>Bad</Button>
        </ButtonContainer>

            <Tittle>Statistics:</Tittle>
            <StatisticsContainer>
<FeedbackCounter>Good: {good}</FeedbackCounter>
        <FeedbackCounter>Neutral: {neutral}</FeedbackCounter>
            <FeedbackCounter>Bad: {bad}</FeedbackCounter>
             <FeedbackCounter>Total: {this.countTotalFeedback()}</FeedbackCounter>
        <FeedbackCounter>
          Positive feedback: {this.countPositiveFeedbackPercentage()}%
        </FeedbackCounter>
            </StatisticsContainer>
        
      </Container>
    );
     }
}