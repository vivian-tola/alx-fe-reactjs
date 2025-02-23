import React from "react";
import ProfilePage from "./components/ProfilePage";
import UserProfile from "./components/UserProfile";
import UserContext from "./components/UserContext";

const App = () => {
  const userData = { name: "Jane Doe", email: "jane.doe@example.com" };
  return (
    <UserContext.Provider value={userData}>
      <ProfilePage userData={userData} />
      <UserProfile name="Alice" age={25} bio="Loves hiking and photography" />
    </UserContext.Provider>
  );
};

export default App;
