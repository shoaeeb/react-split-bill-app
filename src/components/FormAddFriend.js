import { useState } from "react";
import Button from "./Button";

export default function FormAddFriend({ onAddFriend }) {
  const [friendName, setFriendName] = useState("");
  const [imageUrl, setImageUrl] = useState("https://i.pravatar.cc/48");

  function handleSubmitForm(e) {
    e.preventDefault();
    if (!friendName) return;
    const id = crypto.randomUUID();
    const friend = {
      id,
      name: friendName,
      image: imageUrl + `?id=${id}`,
      balance: 0,
    };
    onAddFriend(friend);
    setFriendName("");
    setImageUrl("");
  }
  return (
    <form className="from-add-friend">
      <label> 🕴️Friend Name</label>
      <input
        value={friendName}
        onChange={(e) => setFriendName(e.target.value)}
        type="text"
      />
      <label> 🏙️Image URL</label>
      <input
        value={imageUrl}
        onChange={(e) => setImageUrl(e.target.value)}
        type="text"
      />
      <Button onClickHanlder={handleSubmitForm}>Add</Button>
    </form>
  );
}
