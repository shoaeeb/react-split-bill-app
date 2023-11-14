import { useState } from "react";
import Button from "./Button";

export default function SplitBill({ friend, onUpdateBalance }) {
  const [bill, setBill] = useState("");
  const [paidByUser, setPaidByUser] = useState("");
  const paidByFriend = bill ? bill - paidByUser : "";
  const [whoPaying, setWhoPaying] = useState("me");
  function handleSubmitForm(e) {
    e.preventDefault();

    if (!bill || !paidByUser) return;
    const updatedBalance = whoPaying === "me" ? paidByFriend : -paidByUser;
    onUpdateBalance(updatedBalance);
    setBill("");
    setPaidByUser("");
    setWhoPaying("me");
  }
  return (
    <>
      <form className="form-split-bill">
        <h2>Split A Bill With {friend.name}</h2>
        <label>💰Bill:</label>
        <input
          value={bill}
          onChange={(e) => setBill(+e.target.value)}
          type="text"
        />
        <label>💲Your Expense</label>
        <input
          value={paidByUser}
          onChange={(e) => setPaidByUser(+e.target.value)}
          type="text"
        />

        <label>👤 {friend.name}'s Expense</label>
        <input disabled value={paidByFriend} type="text" />
        <label>🤔 Who is going to pay?</label>
        <select
          value={whoPaying}
          onChange={(e) => setWhoPaying(e.target.value)}
        >
          <option value="me">You</option>
          <option value={friend.name}>{friend.name}</option>
        </select>
        <Button onClickHanlder={handleSubmitForm}>Split Bill</Button>
      </form>
    </>
  );
}
