import React, { useEffect, useState } from "react";
import { Card, CardBody, CardHeader } from "@chakra-ui/react";
import axios from "axios";

function BugList() {
  const [bugList, setBugList] = useState(null);
  useEffect(() => {
    const getBugs = async () => {
      try {
        const bugs = await axios.get("http://127.0.0.1:8000/api/bugs/");
        console.log(bugs.data);
        setBugList(bugs.data);
      } catch (e) {
        console.log(e);
      }
    };
    getBugs();
  }, []);
  return (
    <>
      <h1>Bugs List</h1>
    </>
  );
}
export default BugList;
