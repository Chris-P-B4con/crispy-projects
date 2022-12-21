import Button from '@mui/material/Button'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import CardMedia from '@mui/material/CardMedia'
import Typography from '@mui/material/Typography'

import styled from 'styled-components'

export const Wrapper = styled.div`
  transition: 300ms all ease-in-out;
  background-color: ${(props) => props.theme.palette.background.level1};
  box-shadow: var(--shadow-elevation-medium);
  border-radius: var(--border-radius);
  &:hover {
    box-shadow: var(--shadow-elevation-high);
  }
  display: flex;
  flex-direction: column;
`

export { Button, CardActions, CardContent, CardMedia, Typography }
