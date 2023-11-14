import Button from "./Button";

export default function Friend({ friend, onSelectedFriend, isSelected }) {
  const selected = isSelected === friend.id ? true : null;
  return (
    <li>
      <img src={friend.image} alt={friend.name} />
      <h3>{friend.name}</h3>
      <p
        className={
          friend.balance === 0 ? "" : friend.balance > 0 ? "green" : "red"
        }
      >
        {friend.balance === 0
          ? `You are even with your ${friend.name}`
          : friend.balance > 0
          ? `${friend.name} owes you € ${friend.balance}`
          : `You owe your freind € ${Math.abs(friend.balance)}`}
      </p>
      <Button onClickHanlder={() => onSelectedFriend(selected ? null : friend)}>
        {selected ? "Close" : "Select"}
      </Button>
    </li>
  );
}
