import DataContext from "../data/DataContext";
import { useContext } from "react";

const ReportComponent = ()=>{
    const {income,expense} = useContext(DataContext);
    return (
        <div className="report-main">
            <div className="report-container">
                <div className="displayIncome">
                    <h4>ยอดรายรับ</h4>
                    <h3>{income}</h3>
                </div>
                <div className="displayExpense">
                    <h4>ยอดรายจ่าย</h4>
                    <h3>{expense}</h3>
                </div>
            </div>
        </div>
    );
}

export default ReportComponent