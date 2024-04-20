import React, { useEffect, useState } from "react";
import CardFollowers from "./CardFollowers";
import load from "../assets/loading.gif";

const Followers = ({ filtered }) => {
  const [person, setPerson] = useState([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);

  const getUser = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `https://api.github.com/users/anthonyharold67/followers?per_page=12&page=${page}`
      );
      if (!response.ok) {
        setLoading(false);
        throw new Error("Warning");
      }
      setLoading(false);
      // const data = await response.json();
      setPerson(await response.json());
    } catch (error) {
      console.Error(error);
    }
  };
  useEffect(() => {
    getUser();
  }, [page]);

  const nextPage = () => {
    setPage(prevPage => prevPage + 1);
  };
  const previousPage = () => {
    setPage(prevPage => prevPage - 1);
  };

  if (loading) {
    return (
      <div className="text-center">
        <img src={load} alt="loading" />
      </div>
    );
  } else {
    return (
      <>
        <div className="d-flex flex-wrap justify-content-around align-items-center">
          {filtered === ""
            ? person.map((item, i) => <CardFollowers key={i} item={item} />)
            : person
                .filter(
                  (x) =>
                    filtered && x.login.toLowerCase().includes(filtered.trim())
                )
                .map((item, i) => <CardFollowers key={i} item={item} />)}
        </div>
        <div className="text-center text-success">
        <button onClick={previousPage}>Previous Page</button>
        <button onClick={nextPage}>Next Page</button>
        </div>

      </>
    );
  }
};

export default Followers;
