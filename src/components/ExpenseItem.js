import './ExpenseItem.css'
import ExpenseDatre from './ExpenseDate'

function ExpenseItem(props) {
    return (
        <div>
            <div>{props.date.toISOString()}</div>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className='expense-item__price'>${props.amount}</div>
            </div>
        </div>
    )
}

export default ExpenseItem;