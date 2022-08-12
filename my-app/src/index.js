import React, {useState} from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';
import Workers from "./workers";

function CreateTable(props) {
const [workers, setWorkers] = useState(Workers);
const [worker, setWorker] = useState({
    Name: "",
    Surname: "",
    Days: "",
    SalaryDay: ""
})

function handleInputChange(e) {
    setWorker({
    ...worker,
    [e.target.name]: e.target.value,
})
     }


function multiply(a,b) {
return a * b;
}

return (
    <table>
        <tbody>
        {
        props.workers.map((item, index)=>{
            return (<tr key={index} id={index}><td>{item.Name}</td><td>{item.Surname}</td><td><input type='text' name='days' value={item.Days} onChange={(event) => handleInputChange(event) } ></input></td><td><input type='text' name='salary' value={item.SalaryDay}  onChange={(event) => handleInputChange(event)}></input></td><td>{multiply(item.Days, item.SalaryDay)} </td></tr>)
        })
        }
        </tbody>
    </table>
)
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
     <CreateTable workers={Workers}></CreateTable>

  </React.StrictMode>
);
