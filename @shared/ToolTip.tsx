import React, { FC } from "react";
import { Tooltip as ReactToolTip } from "react-tooltip";

interface Props {
  toolTipId: string;
  content: string;
}

const ToolTip: FC<Props> = ({ toolTipId, content }) => {
  return (
    <div
      data-tooltip-id={toolTipId}
      data-tooltip-content={content}
      className="w-[15px] h-[15px] text-[#888F95] text-xs rounded-full border border-[#888F95] flex justify-center items-center cursor-pointer"
    >
      i
      <ReactToolTip id={toolTipId} />
    </div>
  );
};

export default ToolTip;
