import React, { useState } from 'react';
import { Navigation } from "./Navigation";
import { TaskList } from './TaskList';
import { AddPersonalTask } from './AddPersonalTask';
import { DoneTask } from './DoneTask';

export  function Home() {
    const [tabState, setValue] = useState(1);
    const [AddTasks, AValue] = useState(0);
    return (
        <div>
            {
                tabState === 0 &&
                // 個人タスク画面
                <div>
                    {
                        AddTasks===0&&
                        <TaskList isPrivate={true} tasks={[{'title':'aaa論', 'detail':'200字のレポート'},{'title':'bbb論', 'detail':'200字のレポート'}]} ValueChange={AValue}/>

                    }
                    {
                        AddTasks===1&&
                            <AddPersonalTask ValueChange={AValue} />
                    }
                    {
                        AddTasks===2&&
                        <DoneTask ValueChange={AValue}/>
                    }
                    
                </div>
            }
            {
                tabState === 1 &&
                // ホーム画面
                <div>
                   {
                        AddTasks===0&&
                        <div>
                        <TaskList isPrivate={true} tasks={[{'title':'aaa論', 'detail':'200字のレポート'},{'title':'bbb論', 'detail':'200字のレポート'}]} ValueChange={AValue}/>
                        <TaskList isPrivate={false} tasks={[{'title':'aaa論', 'detail':'200字のレポート'},{'title':'bbb論', 'detail':'200字のレポート'}]} ValueChange={AValue}/>
                        </div>

                    }
                    {
                        AddTasks===1&&
                            <AddPersonalTask ValueChange={AValue}/>
                    }
                    {
                        AddTasks===2&&
                        <DoneTask ValueChange={AValue}/>
                    }
                </div>
                

            }
            {
                tabState === 2 &&
                // 授業タスク画面
                <div>
                    {
                        AddTasks===0&&
                        <div>
                        <TaskList isPrivate={false} tasks={[{'title':'aaa論', 'detail':'200字のレポート'},{'title':'bbb論', 'detail':'200字のレポート'}]} ValueChange={AValue}/>
                        </div>

                    }
                    {
                        AddTasks===1&&
                            <AddPersonalTask ValueChange={AValue} />
                    }
                    {
                        AddTasks===2&&
                        <DoneTask ValueChange={AValue}/>
                    }
                </div>
            }
            <Navigation handleValueChange={ (newValue)=>{setValue(newValue)} } /> 
        </div>
    );
  }