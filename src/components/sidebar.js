import React from "react";
import dashboard_icon from "../static/dashboard_icon.png";
import schedule from "../static/schedule_icon.png";
import setting from "../static/setting_icon.png";
import transaction from "../static/transaction_icon.png";
import user from "../static/user_icon.png";
import Container from "./container";
const sidebarList = [
  {
    image: dashboard_icon,
    text: "Dashboard",
  },
  {
    image: schedule,
    text: "Text",
  },
  {
    image: setting,
    text: "setting",
  },
  {
    image: transaction,
    text: "transaction",
  },
  {
    image: user,
    text: "User",
  },
];

function Sidebar() {
  return (
    <>
      <ul>
        {sidebarList &&
          sidebarList.map((listEle) => (
            <SidebarItem listObj={listEle} key={listEle.text} />
          ))}
      </ul>
      <Container />
    </>
  );
}

function SidebarItem({ listObj }) {
  return (
    <li>
      <img src={listObj.image} alt={listObj.text} />
      <p>{listObj.text}</p>
    </li>
  );
}

export default Sidebar;
