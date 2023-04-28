import { useEffect,useState } from 'react'
import { v4 as uuidv4 } from 'uuid';

const FormComponent = (props) =>{
     
    const {onAddItem} = props

    const [title,setTitle] = useState('')
    const [amount,setAmount] = useState(0)
    const [formValid,setFormValid] = useState(false)

    const inputTitle = (event) =>{
        setTitle(event.target.value)
    }
    const inputAmount = (event) =>{
        setAmount(event.target.value)
    }
    const saveItem = (event)=>{  
        event.preventDefault()
        const itemData = {
            id:(uuidv4()),
            title:title,
            amount:Number(amount)
        }

        onAddItem(itemData)
        setTitle('')
        setAmount(0)
    }

    useEffect(()=>{
        const checkData = title.trim().length>0 && amount !==0
        if(checkData){
            setFormValid(true)
        }

    },[title,amount])
    return(
        <div className="main-form">
            <form onSubmit={saveItem}>
                <div className = "form-control">
                    <label>ชื่อรายการ</label>
                    <input type="text" name="title" placeholder="ระบุชื่อของคุณ" onChange={inputTitle} value={title}></input>
                </div>
                <div className = "form-control">
                    <label>จำนวนเงิน</label>
                    <input type="number" name="amount" placeholder="ระบุจำนวนเงิน" onChange={inputAmount} value={amount}></input>
                </div>
                <div>
                    <button type="submit" name="submit" disabled={!formValid}>เพิ่มข้อมูล +</button>
                </div>
            </form>
        </div>
    )
}

export default FormComponent;