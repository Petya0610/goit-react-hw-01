import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  const TransactionTable = items.map(({ id, type, amount, currency }) => (
    <tr className={s.table} key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  ));
  return (
    <table className={s.tableTran}>
      <thead className={s.theadTran}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody className={s.tbodyTran}>{TransactionTable}</tbody>

    </table>
  );  
};

export default TransactionHistory;