import { useContext } from "react";
import DataContext from "../data/DataContext";

const ReportBalance = () =>{
    const {balance} = useContext(DataContext)
    return (
        <div className="report-balance-main">
            <div className="displaySecBalance">
                <h4 style={{textAlign:"center"}}>ยอดเงินคงเหลือ</h4>
                <h1 className="balance">{balance}</h1>
            </div>
        </div>
    )
}

export default ReportBalance;