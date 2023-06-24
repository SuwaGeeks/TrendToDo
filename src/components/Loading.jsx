import { Backdrop, CircularProgress } from "@mui/material"


export const Loading = (props) => {
  return (
    <Backdrop open={props.open} sx={{zIndex: 20}}>
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}