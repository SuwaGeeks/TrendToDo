import * as React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import HomeIcon from '@mui/icons-material/Home';


export  function Navigation(props) {
  const [value, setValue] = React.useState(0);

  return (
    <div className="Navi">
    <Box>
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
          props.handleValueChange(newValue);
        }}
      >
        <BottomNavigationAction label="個人" icon={<PersonIcon />} />
        <BottomNavigationAction label="ホーム" icon={<HomeIcon />} />
        <BottomNavigationAction label="授業" icon={<GroupIcon />} />
      </BottomNavigation>
    </Box>
    </div>
  );
}