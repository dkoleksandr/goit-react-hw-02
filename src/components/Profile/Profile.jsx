import css from "./Profile.module.css";

const Profile = ({
  name,
  tag,
  location,
  image,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.profile}>
      <div>
        <img src={image} alt="User avatar" width={150} />
        <p>{name}</p>
        <p>{`@${tag}`}</p>
        <p>{location}</p>
      </div>

      <ul className={css.profileList}>
        <li className={css.profileStats}>
          <span>Followers</span>
          <span>{followers}</span>
        </li>
        <li className={css.profileStats}>
          <span>Views</span>
          <span>{views}</span>
        </li>
        <li className={css.profileStats}>
          <span>Likes</span>
          <span>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

export default Profile;
