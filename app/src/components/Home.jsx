import React, { useState } from 'react';
import { Navigation } from "./Navigation";
import { TaskList } from './TaskList';


export  function Home() {
    const [tabState, setValue] = useState(1);
    return (
        <div>
            {
                tabState === 0 &&
                // 個人タスク画面
                <div>
                    <TaskList isPrivate={true} tasks={[{'title':'aaa論', 'detail':'200字のレポート'},{'title':'bbb論', 'detail':'200字のレポート'}]} />
                </div>
            }
            {
                tabState === 1 &&
                // ホーム画面
                <div>
                    <TaskList isPrivate={true} tasks={[{'title':'aaa論', 'detail':'200字のレポート'},{'title':'bbb論', 'detail':'200字のレポート'}]} />
                    <TaskList isPrivate={false} tasks={[{'title':'aaa論', 'detail':'200字のレポート'},{'title':'bbb論', 'detail':'200字のレポート'}]} />
                </div>
                

            }
            {
                tabState === 2 &&
                // 授業タスク画面
                <div>
                    <TaskList isPrivate={false} tasks={[{'title':'aaa論', 'detail':'200字のレポート'},{'title':'bbb論', 'detail':'200字のレポート'}]} />
                </div>
            }
            <Navigation handleValueChange={ (newValue)=>{setValue(newValue)} } /> 
        </div>
    );
  }