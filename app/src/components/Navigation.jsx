import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import RestoreIcon from '@mui/icons-material/Restore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LocationOnIcon from '@mui/icons-material/LocationOn';

export  function Navigation() {
  const [value, setValue] = React.useState(0);

  return (
    <div className="Navi">
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
        <BottomNavigationAction label="個人" icon={<RestoreIcon />} />
        <BottomNavigationAction label="ホーム" icon={<FavoriteIcon />} />
        <BottomNavigationAction label="授業" icon={<LocationOnIcon />} />
      </BottomNavigation>
    </Box>
    </div>
  );
}