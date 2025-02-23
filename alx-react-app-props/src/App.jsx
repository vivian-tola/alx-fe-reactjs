import React from "react";
import ProfilePage from "./components/ProfilePage";
import UserProfile from "./components/UserProfile";
import UserContext from "./components/UserContext";

const App = () => {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  return (
    <UserContext.Provider value={userData}>
      <ProfilePage userData={userData} />
      <UserProfile />
    </UserContext.Provider>
  );
};

export default App;
