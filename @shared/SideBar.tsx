import React, { ElementRef, FC, MutableRefObject } from "react";
import Avatar from "./Avatar";
import Button from "./Button";
import AnalyticsIcon from "../@icons/AnalyticsIcon";
import useClickOutside from "../hooks/useClickOutside";

interface Props {
  handleClose: () => void;
  lastName: string;
  firstName: string;
  email: string;
  elementsToAvoidTriggeringClickOutside?: MutableRefObject<any>[]
}

const SideBar: FC<Props> = ({ handleClose, lastName, firstName, email, elementsToAvoidTriggeringClickOutside }) => {
  const ref = useClickOutside<ElementRef<"div">>(() => handleClose(), elementsToAvoidTriggeringClickOutside);

  return (
    <div
      ref={ref}
      className="shadow-lg rounded-xl bg-white w-full max-w-[300px] p-6 py-4 absolute top-[7rem] right-1"
    >
      <div className="flex items-center gap-3">
        <Avatar fallback="OJ" size="lg" />
        <div className="flex flex-col gap-[1px]">
          <p className="text-black text-lg font-bold">
            {lastName} {firstName}
          </p>
          <p className="text-sm text-[#56616B]">{email}</p>
        </div>
      </div>

      <div className="">
        <Button
          title="Settings"
          variant="text"
          className="!text-black !text-sm mb-8 mt-8"
          startIcon={<AnalyticsIcon />}
        />
        <Button
          title="Purchase History"
          variant="text"
          startIcon={<AnalyticsIcon />}
          className="!text-black !text-sm mb-8"
        />
        <Button
          title="Refer and Earn"
          variant="text"
          startIcon={<AnalyticsIcon />}
          className="!text-black !text-sm mb-8"
        />
        <Button
          title="Integrations"
          variant="text"
          startIcon={<AnalyticsIcon />}
          className="!text-black !text-sm mb-8"
        />
        <Button
          title="Report Bug"
          variant="text"
          startIcon={<AnalyticsIcon />}
          className="!text-black !text-sm mb-8"
        />
        <Button
          title="Switch Account"
          variant="text"
          startIcon={<AnalyticsIcon />}
          className="!text-black !text-sm mb-8"
        />
        <Button
          title="Sign Out"
          variant="text"
          startIcon={<AnalyticsIcon />}
          className="!text-black !text-sm"
        />
      </div>
    </div>
  );
};

export default SideBar;
