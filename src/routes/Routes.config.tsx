import { RouteIdEnum } from 'config/enums/routes.enum'
import MainLayout from 'layouts/MainLayout'
import AboutPage from 'pages/AboutPage/AboutPage'
import Home from 'pages/Home/Home'
import LoginPage from 'pages/LoginPage'
import QuizByCategoryPage from 'pages/QuizByCategoryPage/QuizByCategoryPage'
import QuizQuestion from 'pages/QuizQuestion/QuizQuestion'
import SignupPage from 'pages/SignupPage/SignupPage'
import RouteObject from 'types/interfaces/RouteObject'

const RoutesConfig: RouteObject[] = [
  {
    path: RouteIdEnum.Root,
    children: [
      {
        path: RouteIdEnum.Home,
        element: <Home />,
      },
      {
        path: RouteIdEnum.Login,

        element: <LoginPage />,
      },
      {
        path: RouteIdEnum.Signup,

        element: <SignupPage />,
      },
      {
        path: RouteIdEnum.About,
        element: <AboutPage />,
      },
    ],
    element: <MainLayout />,
  },
  {
    path: RouteIdEnum.quizQuestion,
    children: [],
    element: <QuizQuestion />,
  },
  {
    path: RouteIdEnum.quizByCategory,
    children: [],
    element: <QuizByCategoryPage />,
  },
]
export default RoutesConfig
