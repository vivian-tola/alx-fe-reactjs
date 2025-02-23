import UserDetails from './UserDetails';

function UserInfo() {
      const userData = useContext();
  return <UserDetails userData={userData} />;
}

export default UserInfo;