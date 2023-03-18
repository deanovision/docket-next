import React, { useEffect } from "react";
import axios from "axios";
import BugsTable from "../../components/BugsTable";

function Bugs() {
  useEffect(() => {
    const getBugs = async () => {
      try {
        const bugs = await axios.get("http://127.0.0.1:8000/api/bugs/");
        console.log(bugs.data);
      } catch (e) {
        console.log(e);
      }
    };
    getBugs();
  }, []);
  return (
    <div style={{ height: "100%" }}>
      <BugsTable />
    </div>
  );
}
export default Bugs;
