import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import TextField from '@mui/material/TextField';


export function Result() {
  return (
    <div className='Result'>
      <div>
        <h1>所要時間</h1>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField
            id="outlined-number"
            label="所要時間"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
        </Box>
      </div>

      <div>
        <h1>大変さ</h1>
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

      <div className='Dline'></div>

      <Stack direction="row" spacing={2}>
        <Button variant="contained" >
          決定
        </Button>
        <Button variant="outlined">
          戻る
        </Button>
      </Stack>
    </div>

  );
}

