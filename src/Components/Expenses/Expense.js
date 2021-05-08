import ExpenseItem from "./ExpenseItem"
import "./Expense.css"
import Card from '../UI/Card'

function Expense() {
  const expenses = [
    {
      typeOfExpense: "Car insurance",
      amout: 234.33,
      date: new Date(2021, 2, 22),
    },
    {
      typeOfExpense: "LIC Bill",
      amout: 543.23,
      date: new Date(2020, 2, 22),
    },
    {
      typeOfExpense: "Crypto Investment",
      amout: 79.33,
      date: new Date(2018, 3, 19),
    },
  ];

  return (
    <Card className="expenses">
      <ExpenseItem
        title={expenses[0].typeOfExpense}
        amout={expenses[0].amout}
        date={expenses[0].date}
      />
      <ExpenseItem
        title={expenses[1].typeOfExpense}
        amout={expenses[1].amout}
        date={expenses[1].date}
      />
      <ExpenseItem
        title={expenses[2].typeOfExpense}
        amout={expenses[2].amout}
        date={expenses[2].date}
      />
    </Card>
  );
}

export default Expense;
