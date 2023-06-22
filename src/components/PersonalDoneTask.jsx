import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import {Link} from 'react-router-dom';


export function DoneTask(props) {
  return (
    <div className='Dmenu'>
      <div className='Dback'>
        <Stack spacing={2} direction="row">
          <Stack direction="row" spacing={2}>
            <a href='/' onClick={(e) => {
              e.preventDefault();
              props.ValueChange(0);
            }}><Button variant="text">< ArrowBackIcon /></Button>{ }</a>
            </Stack>
          </Stack>
      </div>
      <div className='Dtitle'>aaa論</div>
      <div className='Ddetail'>
      <div className='DDD'>
        <div>
          <h3>内容</h3>
          <div className='D'>xxxについて100字以内</div>
        </div>

        <div>
          <h3>期限</h3>
          <div>YYYYY/MM/DD HH:WW</div>
        </div>
        </div>

      <div className='Dline'></div>
      <div className='Dbutton'>
      <Stack direction="row" spacing={2}>
      <Link to='/personal_task'>
          <Button variant="contained" >
            タスク完了
          </Button></Link>
          <Link to='/personal_task'>
          <Button variant="contained" >
            キャンセル
          </Button></Link>
      </Stack>
      </div>
      </div>
    </div>

  )


}

