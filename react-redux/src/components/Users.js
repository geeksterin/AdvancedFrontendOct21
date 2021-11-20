import React, { useEffect } from "react";
import { connect } from "react-redux";
import axios from "axios";
import {
  fetchUsersError,
  fetchUsersRequest,
  fetchUsersSuccess,
} from "../redux";

function Users(props) {
  const { loading, users, error, fetchUsers } = props;

  useEffect(() => {
    fetchUsers();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "98vh",
        width: "100%",
      }}
    >
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>Error getting users</div>
      ) : (
        <div>
          {users.map((user, index) => (
            <p key={index}>{user}</p>
          ))}
        </div>
      )}
    </div>
  );
}

const mapStateToProps = (state) => {
  return state.users;
};

const fetchUsers = () => {
  return function (dispatch) {
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => {
        const users = response.data.map((user) => user.name);
        dispatch(fetchUsersSuccess(users));
      })
      .catch((error) => {
        dispatch(fetchUsersError(error.message));
      });
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchUsers: () => dispatch(fetchUsers()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Users);
