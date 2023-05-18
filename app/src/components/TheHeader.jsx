import IconButton from '@mui/material/IconButton';
import Settings from '@mui/icons-material/Settings';

export function TheHeader() {
    return (
        <div className="header">
            <h1>TrendToDo</h1>
            <IconButton className='setting' color="primary">
                <Settings color="action" />
            </IconButton>   
        </div>
      );
}