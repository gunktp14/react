import Item from './Item';


const Transaction = (props) =>{
    const {items} = props
    return(
        <ul id="listTransaction">
            {items.map((element)=> {
                return <Item {...element} key={element.id}/>
            })}
        </ul>
    )
}

export default Transaction;