import * as React from 'react';
import Box from '@mui/material/Box';
import TaskIcon from '@mui/icons-material/Task';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';

const commonStyles1 = {
    bgcolor: 'gainsboro',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    width: 300,
};

const commonStyles2 = {
    bgcolor: 'gainsboro',
    m: 1,
    borderColor: 'gray',
    width: 300,
};


export function TaskList(props) {

    const detail = props.tasks.map((element) =>
        <Stack spacing={2} direction="row">
            <Button variant="text">
            <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                <Box sx={{ ...commonStyles2, borderBottom: 1 }}>
                    <div className='Ptask'>
                        <div className='Picon'><AssignmentIndIcon fontSize='large' /></div>
                        <div className='Pcom'>
                            {element.title}<br />
                            <font size="2">{element.detail}</font>
                        </div>
                    </div>
                </Box>
            </Box>
            </Button>
            </Stack>
            );

            return (
            <div className='TaskList'>
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <Box sx={{ ...commonStyles1, borderRadius: '16px' }}>
                        {<TaskIcon />}
                        <br />
                        <font size="5">個人タスク </font>
                        {detail}

                        <div className='Padd'>
                            <Stack spacing={2} direction="row">
                                <Button variant="text">追加</Button>
                            </Stack>
                        </div>
                    </Box>

                </Box>
            </div>);
}

