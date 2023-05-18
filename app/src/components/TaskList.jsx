import * as React from 'react';
import Box from '@mui/material/Box';


export function TaskList(props) {

    const isPrivate = props.isPrivate;
    const detail = props.tasks.map((element) => 
        <Box sx={{ display: 'flex', justifyContent: 'center' }}>
            <h3>{element.title}</h3>
            <p>{element.detail}</p>
        </Box>
    );

    return (<div>
        <h2>{(isPrivate)? "個人タスク":"授業タスク"}</h2>
            {detail}
        </div>);
}

