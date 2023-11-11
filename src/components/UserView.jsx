import React, { useEffect, useState } from "react";
import UserNavbar from "./UserNavbar";
import axios from "axios";

const UserView = () => {
  const [data, changeData] = useState([]);

  const fetchData = () => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((response) => {
      changeData(response.data);
    });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <UserNavbar />
      <div className="container">
        <div className="row">
          <div className="col">
            <div className="row g-3 d-flex ">
              {data.map((value, index) => {
                return (
                  <div className="col col-12 col-sm-6 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                    <div class="card shadow border-secondary">
                      <img
                        src="data:image/jpeg;base64,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"
                        class="card-img-top"
                        alt="..."
                      />
                      <div class="card-body d-flex flex-column align-items-center">
                        <h5 class="card-title">{value.username}</h5>
                        <p class="card-text">Name: {value.name}</p>
                        <p class="card-text">Email: {value.email}</p>
                        <p class="card-text">Phone: {value.phone}</p>
                        <p class="card-text">Website: {value.website}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserView;
