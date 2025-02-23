import UserInfo from "./UserInfo";

function ProfilePage() {
  const userData = useContext();
  return <UserInfo userData={userData} />;
}

export default ProfilePage;
