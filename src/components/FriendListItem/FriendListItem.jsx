import clsx from "clsx";
import css from "./FriendListItem.module.css";

const FriendListItem = ({ avatar, name, isOnline }) => {
  const styleIsOnline = clsx(isOnline ? css.online : css.offline);

  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p className={styleIsOnline}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
};

export default FriendListItem;
