// import ExpenseItem from "./Components/ExpenseItem";
import Expense from "./Components/Expenses/Expense"
import NewExpense from './Components/NewExpense/NewExpense'

function App() {
  
  const newExpenseHandler = (expense) => {
      console.log("in App.js");
      console.log(expense);
  } 
  
  return (
    <div>
      <NewExpense onNewExpense={newExpenseHandler} />
      <Expense />
    </div>
  );
}
export default App;
