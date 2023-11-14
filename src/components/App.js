import { useState } from "react";
import Button from "./Button";
import FormAddFriend from "./FormAddFriend";
import FriendList from "./FriendList";
import SplitBill from "./SplitBill";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];

function App() {
  // const friends = initialFriends;
  const [friends, setFriends] = useState(initialFriends);
  const [isAddFriendOpen, setIsAddFriendOpen] = useState(false);
  const [selectedFriend, setSelectedFriend] = useState(null);
  let isSelected = !selectedFriend ? null : selectedFriend.id;

  function addSelectedFriend(friend) {
    setSelectedFriend(friend);
  }
  function addMoreFriends(friend) {
    setFriends((friends) => [...friends, friend]);
    setIsAddFriendOpen(false);
  }
  function handleToggleAddFriendForm() {
    setIsAddFriendOpen((isOpen) => !isOpen);
  }
  function updatedBalance(updatedBalance) {
    setFriends((freinds) =>
      friends.map((friend) =>
        friend.id === selectedFriend.id
          ? { ...friend, balance: friend.balance + updatedBalance }
          : { ...friend }
      )
    );
  }

  return (
    <div className="app">
      <div className="sidebar">
        <FriendList
          friends={friends}
          isSelected={isSelected}
          onSelected={addSelectedFriend}
        />
        {isAddFriendOpen && <FormAddFriend onAddFriend={addMoreFriends} />}
        <Button onClickHanlder={handleToggleAddFriendForm}>
          {isAddFriendOpen ? "Close" : "Add Friend"}
        </Button>
      </div>
      {selectedFriend && (
        <SplitBill onUpdateBalance={updatedBalance} friend={selectedFriend} />
      )}
    </div>
  );
}

export default App;
