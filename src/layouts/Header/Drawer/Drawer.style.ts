import { styled, Button } from '@mui/material'
import { Link } from 'react-router-dom'
import ListItemText from '@mui/material/ListItemText'

export const ButtonDrawer = styled(Button)(({ theme }) => ({
  padding: '2px 7px',
  minWidth: '40px',
  backgroundColor: theme.palette.grey[400],
  color: '#000',
  [theme.breakpoints.down('md')]: {
    display: 'flex',
  },
  ':hover': {
    backgroundColor: theme.palette.grey[300],
  },
}))
export const LinkStyled = styled(Link)({
  textDecoration: 'none',
})
export const ListItemTextStyled = styled(ListItemText)(({ theme }) => ({
  color: theme.palette.primary.main,
  span: {
    fontWeight: 600,
    fontSize: '16px',
  },
}))
