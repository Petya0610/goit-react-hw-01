import clsx from 'clsx';
import s from './FriendListItem.module.css'


const FriendListItem = ({ avatar, name, isOnline }) => {
  return (
    <div className={s.friendCard}>
      <img src={avatar} alt={name} width="100" />
      <p>{name}</p>
      <p className={clsx(s.friendStatus, isOnline ? s.green : s.red)}>{isOnline ? 'Online' : 'Offline'}</p>
    </div>

  );
};

export default FriendListItem;