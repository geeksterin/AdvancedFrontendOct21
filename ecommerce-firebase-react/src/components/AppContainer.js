import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import { collection, where, query, getDocs } from "@firebase/firestore";
import { userCollection, userJson } from "../Constants";
import { initializeFirestore } from "../helperFunctions/firebase";
import Navbar from "./Navbar";
import style from "../styles/AppContainer.module.css";

function AppContainer(props) {
  const { userId } = props;
  const [userAccountDetails, setUserAccountDetails] = useState(
    JSON.parse(JSON.stringify(userJson))
  );
  const [db] = useState(() => initializeFirestore());
  const [tabIndex, setTabIndex] = useState(0);

  useEffect(() => {
    if (userId) {
      getUserAccountDetails();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getUserAccountDetails = async () => {
    const queryData = query(
      collection(db, userCollection),
      where("userId", "==", userId)
    );
    const querySnapshot = await getDocs(queryData);
    querySnapshot.forEach((doc) => {
      console.log(doc.data());
      setUserAccountDetails(doc.data());
    });
  };

  return (
    <Box className={style.appContainer}>
      <Navbar {...props} userAccountDetails={userAccountDetails} setUserAccountDetails={setUserAccountDetails}/>
    </Box>
  );
}

export default AppContainer;
