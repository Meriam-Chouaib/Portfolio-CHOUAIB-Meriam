import * as React from 'react'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import { Link } from 'react-router-dom'
import Divider from '@mui/material/Divider'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import InboxIcon from '@mui/icons-material/MoveToInbox'
import MailIcon from '@mui/icons-material/Mail'
import MenuIcon from '@mui/icons-material/Menu'
import { BoxDrawer } from 'layouts/Header/Header.style'
import {
  ButtonDrawer,
  LinkStyled,
  ListItemTextStyled,
} from 'layouts/Header/Drawer/Drawer.style'
import { itemsDrawer } from 'layouts/Header/Headers.constant'
import { useTranslation } from 'react-i18next'
import CustomImage from 'components/Common/Image/Image'
import Logo from 'assets/images/logo.png'
import BoxCenter from 'components/Common/BoxCenter/BoxCenter'

export default function TemporaryDrawer() {
  const [openDrawer, setOpenDrawer] = React.useState(false)
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  })
  const { t } = useTranslation()

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return
      }

      setState({ ...state, ['left']: open })
      setOpenDrawer(open)
    }

  const list = () => (
    <BoxDrawer
      sx={{ width: 250 }}
      role='presentation'
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <BoxCenter>
        <CustomImage src={Logo} height='9vh' width='auto' />
      </BoxCenter>
      <List>
        {itemsDrawer().map((item, index) => (
          <LinkStyled to={item.path} key={`item-header-${index}`}>
            <ListItem
              key={item.txt}
              disablePadding
              sx={{ margin: '1rem 0rem' }}
            >
              <ListItemButton>
                <ListItemIcon>
                  {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
                </ListItemIcon>
                <ListItemTextStyled primary={t(item.txt)} />
              </ListItemButton>
            </ListItem>
          </LinkStyled>
        ))}
      </List>
    </BoxDrawer>
  )

  return (
    <>
      {
        <React.Fragment key={'left'}>
          <ButtonDrawer onClick={toggleDrawer(true)} variant='outlined'>
            <MenuIcon />
          </ButtonDrawer>
          <Drawer
            anchor={'left'}
            open={openDrawer}
            onClose={toggleDrawer(false)}
          >
            {list()}
          </Drawer>
        </React.Fragment>
      }
    </>
  )
}
