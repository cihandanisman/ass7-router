import React, { useEffect, useState } from "react";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardFollowers from "./CardFollowers";
import SearchUser from "./SearchUser";

const Followers = ({filtered}) => {
  const [person, setPerson] = useState([]);
  

  const getUser = async () => {
    try {
      const response = await fetch(
        "https://api.github.com/users/anthonyharold67/followers?per_page=100"
      );
      if (!response.ok) {
        throw new Error("Warning");
      }
      const data = await response.json();
      setPerson(data);
    } catch (error) {
      console.Error(error);
    }
  };
  useEffect(() => {
    getUser();
  }, []);



  

  return (
    <div className="d-flex flex-wrap justify-content-around align-items-center">
    {filtered === '' ? (
      person.map((item, i) => (
        <CardFollowers key={i} item={item} />
      ))
    ) : (
      person
        .filter((x) =>filtered && x.login.toLowerCase().includes(filtered.trim()))
        .map((item, i) => (
          <CardFollowers key={i} item={item} />
        ))
    )}
  </div>
    
  );
};

export default Followers;
