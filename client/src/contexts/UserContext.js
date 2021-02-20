import React, { useState, createContext } from "react";

// Create Context Object
export const userContext = createContext();

// Create a provider for components to consume and subscribe to changes
export const UserContextProvider = props => {

  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    _id: "",
    goalsList: "",
  });

  useEffect(() => {
    //populate userData

    const fetchUser = () => {
      axios.get("/api/auth/user")
        .then(res => {
          const { firstName, lastName, _id } = res.data.user;

          setUserData({
            firstName: firstName,
            lastName: lastName,
            _id: _id,
          })

        });
    }
    const getGoalList = () => {
      axios.get("/api/goals/list/", {
        params: {
          _id: _id
        }
      }).then((res) => {
        console.log(res);
      })
    };

    return (
      <UserContext.Provider value={[userData, setUserData]}>
        {props.children}
      </UserContext.Provider>
    );
  });
};