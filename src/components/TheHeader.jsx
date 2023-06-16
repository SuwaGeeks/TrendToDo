import IconButton from '@mui/material/IconButton';
import Logout from '@mui/icons-material/Logout';

export function TheHeader(props) {
    return (
        <div className="header">
            <h1>TrendToDo</h1>
            <IconButton
              className='setting'
              color="primary"
              onClick={()=>{
                props.handleValueChange(false);
              }}
            >
                <Logout color="action" />
            </IconButton>   
        </div>
      );
}







