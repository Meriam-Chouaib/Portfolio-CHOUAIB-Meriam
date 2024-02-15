import { Dispatch, SetStateAction } from 'react';

export interface CountdownQuizProps {
  countdownTime: number;
  questionIndex: number;
  timeOver: () => void;
  setTimeTaken: (timeQuestionTaken: number) => void;
  light?: boolean;
}
