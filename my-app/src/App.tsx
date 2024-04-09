import React, { useState } from 'react';
import './App.css';
import { Modal } from "./components/modal/Modal";
import Adidas from './components/Adidas';
import SuperButton from './components/SuperButton/SuperButton';


function App() {
    const [tasks, setTasks] = useState([
        { id: 1, title: 'HTML', isDone: true },
        { id: 2, title: 'JS', isDone: false },
        { id: 3, title: 'React', isDone: true },
    ])

    return (
        <div className='App'>
            <Adidas tasks={tasks}>
                <SuperButton color={'red'} onClick={() => {}} >SuperBtnRed</SuperButton>
                <SuperButton onClick={() => {}} >SuperBtnGreen</SuperButton>
                <SuperButton disabled onClick={() => {}} >SuperBtnDisabled</SuperButton>
            </Adidas>
            <Adidas tasks={tasks} />
            <Adidas tasks={tasks} />
        </div>
        
    );
}


export default App;
