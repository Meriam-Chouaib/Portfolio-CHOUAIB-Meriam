import QuizByCategory from 'features/QuizByCategory/QuizByCategory'
import quizImage from 'assets/images/microphone-heart.svg'
import { useTranslation } from 'react-i18next'

function QuizByCategoryPage() {
  const { t } = useTranslation()
  return <QuizByCategory text={t('quiz.theme')} img={quizImage} />
}

export default QuizByCategoryPage
