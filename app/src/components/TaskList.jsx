import * as React from 'react';
import Box from '@mui/material/Box';
import TaskIcon from '@mui/icons-material/Task';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Stack from '@mui/material/Stack';

const commonStyles1 = {
    bgcolor: 'gainsboro',
    borderColor: 'text.primary',
    m: 1,
    border: 1,
    width: 350,
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
                <a href='/' onClick={(e) => {
                    e.preventDefault();
                    props.ValueChange(2);
                }}>
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
                </a>
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
                            <a href='/' onClick={(e) => {
                                e.preventDefault();
                                props.ValueChange(1);
                            }}>追加</a>
                        </div>
                    </Box>

                </Box>
            </div>);

}

