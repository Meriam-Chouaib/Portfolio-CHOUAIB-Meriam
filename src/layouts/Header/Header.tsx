import TemporaryDrawer from 'layouts/Header/Drawer/Drawer'
import { BoxHeader } from 'layouts/Header/Header.style'

import { Container } from '@mui/material'
import CustomImage from 'components/CustomImage/CustomImage'
import logo from 'assets/images/Logo.svg'
import { CustomContainer } from 'layouts/MainLayout.style'

function Header() {
  return (
    <BoxHeader>
      <CustomContainer
        maxWidth='md'
        sx={{ display: 'flex', alignItems: 'center' }}
      >
        <TemporaryDrawer />
        <CustomImage src={logo} width='120' margin='0px 10px' />
      </CustomContainer>
    </BoxHeader>
  )
}

export default Header
