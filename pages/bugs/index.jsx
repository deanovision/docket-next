import React, { useEffect } from "react";
import axios from "axios";
import BugsTable from "../../components/bugs/BugsTable";
import Bug from "@/components/bugs/Bug";
import DashboardStats from "@/components/DashboardStats";
import Navigation from "@/components/Navigation";

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
  const BugWithNavigation = Navigation(Bug);
  return (
    <div style={{ height: "100%", display: "flex" }}>
      <BugWithNavigation />
    </div>
  );
}
export default Bugs;
