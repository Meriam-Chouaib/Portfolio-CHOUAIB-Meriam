export interface CountTimeQuestionProps {
  timer: number;

  handleNext: () => void;

  setTimeQuestionTaken: (timeQuestionTaken: number) => void;

  questionIndex: number;
}
