import styled from "styled-components";
import OverViewComponent from "./OverViewComponent";
import TransactionComponent from "./TransactionComponent";
import { useEffect, useState } from "react";
const Container = styled.div`
  display: flex;
  flex-direction: column;
  margin: 30px 0 10px;
  align-items: center;
`;

const HomeComponent = (props) => {
  const [transactions, updateTransaction] = useState([]);
  const [expense,updateExpense] = useState(0);
  const [income,updateIncome] = useState(0);
  const addTransaction = (payload) => {
    const transactionArray = [...transactions];
    transactionArray.push(payload);
    updateTransaction(transactionArray);
  };

  const calculateBalance = () => {
    let exp = 0;
    let inc = 0;
    transactions.map((payload) => {
      payload.type === "EXPENSE"
        ? (exp = exp + payload.amount)
        : (inc = inc + payload.amount);
    });

    updateExpense(exp);
    updateIncome(inc)
  };

  useEffect(() => calculateBalance(), [transactions])

  return (
    <Container>
      <TransactionComponent transactions={transactions} />
      <OverViewComponent addTransaction={addTransaction} expense={expense}  income = {income}/>
    </Container>
  );
};

export default HomeComponent;
