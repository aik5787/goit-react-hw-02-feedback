import styled from 'styled-components';

export const Container = styled.div`
  padding: 20px;
`;

export const Tittle = styled.h2`
  margin: 0 0 20px 0;
  font-weight: 800;
`;

export const ButtonContainer = styled.div`
  display: flex;
  gap: 10px;
  margin-bottom: 20px;
`;

export const Button = styled.button`
  font-size: 18px;
  font-weight: 600;
  border: solid 2px #d9d9d9;
  border-radius: 4px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

export const StatisticsContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

export const FeedbackCounter = styled.p`
  margin: 0;
  font-size: 18px;
  font-weight: 600;
`;
