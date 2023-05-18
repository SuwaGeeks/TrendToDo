import * as React from 'react';
import Box from '@mui/material/Box';


export function TaskList(props) {

    const title = props.title;
    const detail = props.tasks.map((element) => 
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
        {element.detail}
        </Box>
    );

    return (<div>
            {detail}
        </div>);
}

