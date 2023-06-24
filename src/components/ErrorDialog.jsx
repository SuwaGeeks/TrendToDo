import { Dialog, DialogTitle } from "@mui/material"

export function ErrorDialog(props) {
  return (
    <Dialog onClose={props.handleClose} open={props.open}>
      <DialogTitle children={props.title} />
    </Dialog>
  )
}