import React, { useState } from 'react';
import { Navigation } from "./Navigation";
import { TaskList } from './TaskList';
import { AddPersonalTask } from './AddPersonalTask';
import { AddGroupTask } from "./AddGroupTask";
import { DoneTask } from './DoneTask';
import { AddGroup } from "./addGroup";
import { Result } from './Result';

export  function Home(props) {
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
                        <div>
                            <TaskList isPrivate={true} tasks={[{'title':'aaa論', 'detail':'200字のレポート'},{'title':'bbb論', 'detail':'200字のレポート'}]} ValueChange={AValue}/>
                            <AddGroup userID={props.UserID} />
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
                    {
                        AddTasks===3&&
                        <Result ValueChange={AValue}/>
                    }
                    {
                        AddTasks===4&&
                        <AddGroupTask ValueChange={AValue}/>
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
                            <TaskList isPrivate={false} tasks={[{'title':'aaa論', 'detail':'200字のレポート', rating: 3.4, time:'4:32'},{'title':'bbb論', 'detail':'200字のレポート', rating: 4.9, time:'1:24'}]} ValueChange={AValue}/>
                            <AddGroup userID={props.UserID} />
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
                     {
                        AddTasks===3&&
                        <Result ValueChange={AValue}/>
                    }
                    {
                        AddTasks===4&&
                        <AddGroupTask ValueChange={AValue}/>
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
                            <TaskList isPrivate={false} tasks={[{'title':'aaa論', 'detail':'200字のレポート', rating: 3.4, time:'4:32'},{'title':'bbb論', 'detail':'200字のレポート', rating: 4.9, time:'1:24'}]} ValueChange={AValue}/>
                            <AddGroup userID={props.UserID} />
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
                     {
                        AddTasks===3&&
                        <Result ValueChange={AValue}/>
                    }
                    {
                        AddTasks===4&&
                        <AddGroupTask ValueChange={AValue}/>
                    }
                </div>
            }
            <Navigation handleValueChange={ (newValue)=>{setValue(newValue)} } /> 
        </div>
    );
  }