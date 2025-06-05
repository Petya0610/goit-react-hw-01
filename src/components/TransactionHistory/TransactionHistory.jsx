import s from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
  const TransactionTable = items.map(({ id, type, amount, currency }) => (
    <tr key={id}>
      <td>{type}</td>
      <td>{amount}</td>
      <td>{currency}</td>
    </tr>
  ));

  return (
    <table className={s.table}>
      <thead>
        <tr className={s.header}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{TransactionTable}</tbody>
    </table>
  );
};

export default TransactionHistory;
