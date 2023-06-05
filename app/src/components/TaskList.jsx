import * as React from 'react';
import Box from '@mui/material/Box';
import TaskIcon from '@mui/icons-material/Task';
import Timer from '@mui/icons-material/Timer';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';
import Stack from '@mui/material/Stack';
import SentimentVeryDissatisfiedIcon from '@mui/icons-material/SentimentVeryDissatisfied';

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


// export function TaskList(props) {
//         const detail = props.tasks.map((element) =>
//             <Stack spacing={2} direction="row">
//                 <a href='/' onClick={(e) => {
//                     e.preventDefault();
//                     props.ValueChange(2);
//                 }}>
//                     <Box sx={{ display: 'flex', justifyContent: 'center' }}>
//                         <Box sx={{ ...commonStyles2, borderBottom: 1 }}>
//                             <div className='Ptask'>
//                                 <div className='Picon'><AssignmentIndIcon fontSize='large' /></div>
//                                 <div className='Pcom'>
//                                     {element.title}<br />
//                                     <font size="2">{element.detail}</font>
//                                     {
//                                         !props.isPrivate && 
//                                         <div className='div-inline'>
//                                             <Timer />{element.time} 
//                                             <SentimentVeryDissatisfiedIcon />{element.rating} 
//                                         </div>
//                                     }
//                                 </div>
//                             </div>
//                         </Box>
//                     </Box>
//                 </a>
//             </Stack>
//         );

//         return (
//             <div className='TaskList'>
//                 <Box sx={{ display: 'flex', justifyContent: 'center' }}>
//                     <Box sx={{ ...commonStyles1, borderRadius: '16px' }}>
//                         {<TaskIcon />}
//                         <br />
//                         <font size="5"> {(props.isPrivate)? "個":"グループ"}タスク </font>
//                         {detail}

//                         <div className='Padd'>
//                             <a href='/' onClick={(e) => {
//                                 e.preventDefault();
//                                 props.ValueChange((props.isPrivate)? 1:4);
//                             }}>追加</a>
//                         </div>
//                     </Box>

//                 </Box>
//             </div>);

// }

export function TaskList(props) {
    const detail = props.tasks.map((element) =>
        <div className='element'>
            <a href='/' onClick={(e) => {
                e.preventDefault();
                props.ValueChange(2);
            }}>
                <div className='wrapper'>
                    <div className='elem-icon'><AssignmentIndIcon fontSize='large' /></div>
                    <div className='Pcom'>
                        <h3 className='elem-title'>{element.title}</h3>
                        <p className='elem-detail'>{element.detail}</p>
                        
                    </div>
                    {
                        !props.isPrivate && 
                        <div className='status'>
                            <table>
                                <tr>
                                    <td><Timer /></td>
                                    <td>{element.time}</td>
                                    <td><SentimentVeryDissatisfiedIcon /></td>
                                    <td>{element.rating}</td>
                                </tr>
                            </table>                             
                        </div>
                    }
                </div>
            </a>
        </div>
    );

    return (
        <div className='TaskList'>
            <div>
                {<TaskIcon />}
                <br />
                <h2> {(props.isPrivate)? "個人":"グループ"}タスク </h2>
                {detail}
                <div className='Padd'>
                    <a href='/' onClick={(e) => {
                        e.preventDefault();
                        props.ValueChange((props.isPrivate)? 1:4);
                    }}>追加</a>
                </div>  
            </div>
        </div>);

}

