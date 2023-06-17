import { Stack, Typography, IconButton } from '@mui/material';
import { Logout } from '@mui/icons-material';

export const Header = () => {
  return (
    <Stack
      direction="row"
      justifyContent="space-between"
      alignItems="center"
      spacing={2}
      sx={{px: "15px", py: "15px", bgcolor: "#A23A50"}}
    >
      <IconButton />
      <Typography variant='h4' color="white">TrendToDo</Typography>
      <IconButton 
        color='default'
        onClick={() => { console.log("pushed header's button."); }}
        children={<Logout />}
      />
    </Stack>
  );
};