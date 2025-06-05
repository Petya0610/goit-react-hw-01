import FriendListItem from "../FriendListItem/FriendListItem"
import s from './FriendList.module.css'

const FriendList = ({ friends }) => {
  const friendMembers = friends.map(friend => (
    <li key={friend.id}>
      <FriendListItem
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    </li>
  ));

  return <ul className={s.friendList}>{friendMembers}</ul>;
};

export default FriendList