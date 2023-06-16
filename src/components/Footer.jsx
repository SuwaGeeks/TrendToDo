import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { BottomNavigation, BottomNavigationAction, Paper, Box, Container, Stack } from '@mui/material';
import { Person, Group, Home } from '@mui/icons-material';

export  function Footer() {
  const location = useLocation();

  const footerButtonsList = [
    { label: 'Personal', icon: <Person/>, link_to: '/personal_task'},
    { label: 'Home', icon: <Home/>, link_to: '/'},
    { label: 'Group', icon: <Group/>, link_to: '/group_task'},
  ]

  const footerButton = footerButtonsList.map((elm) => {
    return (
      <BottomNavigationAction
        key={elm.label}
        value={elm.link_to}
        label={elm.label}
        icon={elm.icon}
        LinkComponent={Link}
        to={elm.link_to}
      />
    )
  });

  return (
    <Box sx={{ pb: 10 }}>
      <Stack justifyContent="center" alignItems="center">
        <Container sx={{ position: 'fixed', bottom: 0 }} maxWidth="xs">
          <Paper sx={{ px: 0 }}>
            <BottomNavigation
              showLabels
              value={location.pathname}
              children={footerButton}
              sx={{ bgcolor: "#FFDDB9" }}
            />
          </Paper>
        </Container>
      </Stack>
    </Box>
  );
}