import React, { FC, useEffect } from "react";
import Logo from "./Logo";
import Button from "./Button";
import HomeIcon from "../@icons/HomeIcon";
import AnalyticsIcon from "../@icons/AnalyticsIcon";
import RevenueIcon from "../@icons/RevenueIcon";
import CRMIcon from "../@icons/CRMIcon";
import AppsIcon from "../@icons/AppsIcon";
import NotificationIcon from "../@icons/NotificationIcon";
import ChatIcon from "../@icons/ChatIcon";
import MenuToggler from "./MenuToggler";
import { useRetrieveUserInfoQuery } from "../api-services/userApi";
import { useAppLoaderContext } from "../contexts/AppLoaderContext";

const Navbar: FC = () => {
  const { isLoading, isError, data } = useRetrieveUserInfoQuery("");
  const { setLoading } = useAppLoaderContext()

  useEffect(()=>{
    setLoading(isLoading)
  },[isLoading])

  return (
    <>
      <div className="w-screen absolute top-0 h-10 left-1/2 -translate-x-1/2 bg-white max-w-screen-xl z-20"></div>
      <nav className="w-screen absolute top-6 left-1/2 -translate-x-1/2 h-16 rounded-full shadow-md bg-white max-w-screen-xl z-30 py-3 px-6 flex">
        <div className="flex items-center" style={{ flex: 1 }}>
          <Logo />
        </div>
        <div
          className="flex items-center justify-between gap-4"
          style={{ flex: 2 }}
        >
          <Button title="Home" variant="text" startIcon={<HomeIcon />} />
          <Button
            title="Analytics"
            variant="text"
            startIcon={<AnalyticsIcon />}
          />
          <Button
            title="Revenue"
            variant="contained"
            startIcon={<RevenueIcon />}
          />
          <Button title="CRM" variant="text" startIcon={<CRMIcon />} />
          <Button title="Apps" variant="text" startIcon={<AppsIcon />} />
        </div>
        <div
          className="flex items-center justify-end gap-6"
          style={{ flex: 1 }}
        >
          <Button title="" startIcon={<NotificationIcon />} variant="text" />
          <Button title="" startIcon={<ChatIcon />} variant="text" />
          <MenuToggler usernameAbbreviation={data?.abbreviation || ""} />
        </div>
      </nav>
    </>
  );
};

export default Navbar;