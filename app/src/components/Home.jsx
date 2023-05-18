import React, { useState } from 'react';
import { Navigation } from "./Navigation";


export  function Home() {
    const [tabState, setValue] = useState(1);
    return (
        <div>
            {
                tabState === 0 &&
                   <h2>個人タスク</h2>
            }
            {
                tabState === 1 &&
                   <h2>ホーム</h2>
            }
            {
                tabState === 2 &&
                   <h2>授業タスク</h2>
            }
            <Navigation handleValueChange={ (newValue)=>{setValue(newValue)} } /> 
        </div>
    );
  }