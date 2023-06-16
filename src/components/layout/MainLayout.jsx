import { Box, Container, Paper } from "@mui/material";

export const MainLayout = (props) => {
  return (
    <Box sx={{bgcolor: "#F4F4F4", minHeight: "100vh"}}>
      <Container maxWidth="xs">
        <Paper sx={{px: 0, bgcolor: "white", minHeight: "100vh"}}>
          {props.children}
        </Paper>
      </Container>
    </Box>
  )
}