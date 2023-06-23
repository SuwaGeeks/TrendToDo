import { Stack, Checkbox, Typography } from '@mui/material';
import { CalendarMonth } from '@mui/icons-material';
import { useState } from 'react';

export const PersonalTaskListItem = (props) => {
  const [checkBoxFlag, setCheckBoxFlag] = useState(false);

  function checkBoxHandler(event) {
    const tempFlag = !checkBoxFlag;
    setCheckBoxFlag(tempFlag);
  }

  return (
    <Stack direction="row">
      {/* チェックボックス */}
      <Checkbox checked={checkBoxFlag} onChange={checkBoxHandler} />
      
      {/* コンテンツ */}
      <Stack sx={{ overflow: "hidden" }} justifyContent="center">
        {/* タスク名 */}
        <Typography
          children={props.title}
          align="left"
          noWrap
          style={{ textDecoration: checkBoxFlag ? "line-through" : "none",
          color: checkBoxFlag ? "gray" : "inherit" }}
        />

        {/* タスクの期限 */}
        {props.limit && (
          <Stack direction="row" spacing={1} alignItems="center">
            <CalendarMonth fontSize="small" />
            <Typography variant="subtitle2" children={props.limit}
             style={{ textDecoration: checkBoxFlag ? "line-through" : "none" ,
             color: checkBoxFlag ? "gray" : "inherit"}}
              />
          </Stack>
        )}
      </Stack>
    </Stack>
  );
};
