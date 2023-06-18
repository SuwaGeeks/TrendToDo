import { Backdrop, CircularProgress } from "@mui/material"


export const Loading = (props) => {
  return (
    <Backdrop open={props.open}>
      <CircularProgress color="inherit" />
    </Backdrop>
  )
}