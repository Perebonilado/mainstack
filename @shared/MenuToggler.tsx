import React, { FC } from "react";
import Avatar from "./Avatar";

interface Props {
  usernameAbbreviation: string;
  handleClick?: () => void;
}

const MenuToggler: FC<Props> = ({ usernameAbbreviation }) => {
  return (
    <div className="bg-[#EFF1F6] w-[70px] h-[36px] rounded-full p-2 px-2 flex justify-between items-center cursor-pointer">
      <Avatar fallback={usernameAbbreviation} size="md" />
      <div className="flex flex-col gap-[3px]">
        <div className="w-[15px] h-[1px] bg-[#56616B]"></div>
        <div className="w-[15px] h-[1px] bg-[#56616B]"></div>
        <div className="w-[15px] h-[1px] bg-[#56616B]"></div>
      </div>
    </div>
  );
};

export default MenuToggler;
