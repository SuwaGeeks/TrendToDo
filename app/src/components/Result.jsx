import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';


export function Result(props) {
  return (
    <div className='RAll'>
      <div className='Rtime'>
        <h1>所要時間</h1>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div className='Rtime'>
            <TextField
              id="outlined-number"
              label="所要時間"
              type="number"
              InputLabelProps={{
                shrink: true,
              }}
            />
          </div>
        </Box>
      </div>

      <div>
        <h1>大変さ</h1>
        <div className='Rtime'>
        <Box sx={{ width: 300 }}>
          <Slider
            aria-label="Temperature"
            defaultValue={3}
            valueLabelDisplay="auto"
            step={1}
            marks
            min={1}
            max={5}
          />
        </Box>
        </div>
      </div>

      <div className='Dline'></div>

      <Stack direction="row" spacing={2}>
        <a href='/' onClick={(e) => {
          e.preventDefault();
          props.ValueChange(0);
        }}><Button variant="contained" >
            決定
          </Button></a>
        <a href='/' onClick={(e) => {
          e.preventDefault();
          props.ValueChange(2);
        }}><Button variant="contained" >
            戻る
          </Button></a>
      </Stack>
    </div>

  );
}

