import './function.js';
import React from "react";
import Transaction from './components/Transaction.js';
import './style.css';
import FormComponent from './components/FormComponent.js';
import { useState , useEffect } from 'react';
import DataContext from './data/DataContext.js';
import ReportComponent from './components/ReportComponent.js';
import ReportBalance from './components/reportBalance.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

const Title = () =><h1>Transaction Application</h1>

function App() {
  const initState = [
    {id:1,title:"ค่าเดินทาง",amount:-2000},
    {id:2,title:"ค่าอาหาร",amount:-1500},
    {id:3,title:"ค่ารักษาพยาบาล",amount:-5000},
    {id:4,title:"เงินเดือน",amount:50000},
    {id:5,title:"ค่าที่พักอาศัย",amount:-2500}
  ]
  const [reportIncome,setReportIncome] = useState(0)
  const [reportExpense,setReportExpense] = useState(0)
  const [items,setItems] = useState(initState)
  const [reportBalance,setBalance] = useState(0)

  const formatNumber=(num)=>{
    return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')
  }
  
  const onAddNewItem = (newItem) =>{
    setItems((previtem)=>{
      return [newItem,...previtem]
    })
  }

  useEffect(()=>{
    const amounts = items.map(element=>element.amount)
    console.log(amounts)
    const income = amounts.filter(element=> element > 0)
      const sumIncome = income.reduce((accumulator, value) => {
        return accumulator + value;
      }, 0);
      setReportIncome(formatNumber(sumIncome.toFixed(2)))

    const expense = amounts.filter(element=> element < 0)
        const sumExpense = expense.reduce((accumulator, value) => {
          return accumulator + value;
        }, 0)*-1
        setReportExpense(formatNumber(sumExpense.toFixed(2)))
    const balance = sumIncome - sumExpense; 
    setBalance(formatNumber(balance.toFixed(2)))
  },[items,reportIncome,reportExpense])

  return (
    <DataContext.Provider value={{balance:reportBalance,income:reportIncome,expense:reportExpense}}>
        <div>
            <Title/>  
            <Router>
              <div>
                <ul className="menu">
                  <li>
                    <Link to="/">ข้อมูลบัญชี</Link>
                  </li>
                  <li>
                    <Link to="/insert">บันทึกข้อมูล</Link>
                  </li>
                </ul>
              </div>
              <Switch>
                <Route path="/" exact>
                      <ReportBalance/>
                      <ReportComponent/>
                </Route>
                <Route path="/insert">
                      <FormComponent onAddItem={onAddNewItem}/>
                      <Transaction items={items}/>
                </Route>
              </Switch>
            </Router>
            
        </div>
    </DataContext.Provider>
        
  );
}


export default App;
