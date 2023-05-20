import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';


export function DoneTask() {
  return (
    <div className='Dmenu'>
      <div className='Dback'>
      <Stack spacing={2} direction="row">
        <Button variant="text">< ArrowBackIcon /></Button>
      </Stack>
      </div>
      <div className='Dtitle'>aaa論</div>
      <div className='Ddetail'>
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

    <Stack direction="row" spacing={2}>
    <Button variant="contained" >
        タスク完了
      </Button>
      <Button variant="outlined">
        戻る
      </Button>
    </Stack>
      </div>
      
  )


}

