import { Box, Container } from "@mui/material";

export const MainLayout = (props) => {
  return (
    <Box sx={{bgcolor: "#F4F4F4", minHeight: "100vh"}}>
      <Container maxWidth="xs" sx={{bgcolor: "white", minHeight: "100vh", p: 0}}>
        {props.children}
      </Container>
    </Box>
  )
}