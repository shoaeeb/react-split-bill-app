import Friend from "./Friend";

export default function FriendList({ friends, onSelected, isSelected }) {
  return (
    <ul>
      {friends.map((friend) => (
        <Friend
          friend={friend}
          isSelected={isSelected}
          onSelectedFriend={onSelected}
          key={friend.id}
        />
      ))}
    </ul>
  );
}
