import React, { useEffect, useState } from "react";
import { Box, styled, Tabs, alpha, Tab } from "@mui/material";
import { collection, where, query, getDocs } from "@firebase/firestore";
import { itemCategories, userCollection, userJson } from "../Constants";
import { initializeFirestore } from "../helperFunctions/firebase";
import Navbar from "./Navbar";
import ItemCategory from "./ItemCategory";
import style from "../styles/AppContainer.module.css";

const ItemTabs = styled(Tabs)(({ theme }) => ({
  "& .MuiTabs-indicator": {
    backgroundColor: "#ffffff",
  },
  "& .Mui-selected": {
    color: "#ffffff !important",
  },
  "&.MuiTabs-root": {
    backgroundColor: alpha("#0088a9", 0.9),
  },
  "& .MuiTab-root": {
    color: "rgba(255, 255, 255, 0.7)",
  },
}));

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

  const a11yProps = (index) => {
    return {
      id: `item-category-tab-${index}`,
      "aria-controls": `item-category-tabpanel-${index}`,
    };
  };

  return (
    <Box className={style.appContainer}>
      <Navbar
        {...props}
        userAccountDetails={userAccountDetails}
        setUserAccountDetails={setUserAccountDetails}
      />
      <Box className={style.itemTabs}>
        <ItemTabs
          value={tabIndex}
          onChange={(event, tabIndex) => setTabIndex(tabIndex)}
          aria-label="item category tabs"
        >
          {itemCategories.map((category, index) => (
            <Tab
              label={category.toUpperCase()}
              {...a11yProps(index)}
              key={index}
            />
          ))}
        </ItemTabs>
      </Box>
      {itemCategories.map((category, index) => (
        <TabPanel value={tabIndex} index={index} key={index}>
          <ItemCategory
            category={category}
            categoryIndex={index}
            db={db}
            setUserAccountDetails={setUserAccountDetails}
            userAccountDetails={userAccountDetails}
          />
        </TabPanel>
      ))}
    </Box>
  );
}

function TabPanel(props) {
  const { children, value, index, ...other } = props;
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`item-category-tab-${index}`}
      aria-labelledby={`item-category-tabpanel-${index}`}
      {...other}
    >
      {value === index && <Box>{children}</Box>}
    </div>
  );
}

export default AppContainer;
