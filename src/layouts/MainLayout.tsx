import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress'
import Header from 'layouts/Header/Header'
import Footer from 'layouts/Footer/Footer'
import { CustomContainer } from 'layouts/MainLayout.style'

export default function MainLayout() {
  return (
    <Suspense fallback={<CircularProgress />}>
      <Header />
      <CustomContainer maxWidth='md'>
        <Outlet />
      </CustomContainer>
      <Footer />
    </Suspense>
  )
}
