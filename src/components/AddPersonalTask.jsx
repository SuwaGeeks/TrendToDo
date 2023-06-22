import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Link, useLocation } from 'react-router-dom';

//const label = { inputProps: { 'aria-label': 'Switch demo' } };

export function AddPersonalTask(props) {
    return (
      <div className="add_personal_task">
        <h1>個人タスクの追加</h1>
        <Box
          component="form"
          sx={{
            '& .MuiTextField-root': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <div>
            <TextField
              required
              id="outlined-required"
              label="タスク名"
            />
          </div>

          <div>
            <TextField
              required
              id="outlined-required"
              label="詳細"
            />
          </div>
          <div className='shimekiri'>
            <FormGroup>
              <FormControlLabel control={<Switch defaultChecked />} label="締め切りを設定する" />
            </FormGroup>
          </div>

          <div>
          </div>
          <div>
            <TextField
              required
              id="outlined-required"
              label="日付"
            />
          </div>

          <div>
            <TextField
              required
              id="outlined-required"
              label="日時"
            />
          </div>
        </Box>

        <div className="submit">
          <Stack direction="row" spacing={2}>
          <Link to='/'>{<Button variant="outlined" startIcon={<DeleteIcon />}>
              キャンセル
            </Button>}
            </Link>

            <Link to='/'>{<Button variant="contained" endIcon={<SendIcon />}>
              決定
            </Button>}
            </Link>

          </Stack>
        </div>

      </div>
    );

}