import Title from 'components/Common/Title/Title'
import LoginForm from 'features/Auth/LoginForm/LoginForm'
import { useTranslation } from 'react-i18next'

function LoginPage() {
  const { t } = useTranslation()
  return (
    <>
      <Title text={t('auth.title')} isCenter={true} />
      <LoginForm />
    </>
  )
}

export default LoginPage
