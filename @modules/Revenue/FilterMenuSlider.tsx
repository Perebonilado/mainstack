import React, { FC } from "react";
import Button from "../../@shared/Button";
import CloseIcon from "../../@icons/CloseIcon";
import cn from "classnames";

interface Props {
  handleCloseSlider: () => void;
  handleCloseFilterMenu: () => void;
  isSliderOpen: boolean;
}

const FilterMenuSlider: FC<Props> = ({
  handleCloseSlider,
  isSliderOpen,
  handleCloseFilterMenu,
}) => {
  const sliderState = cn({
    "translate-x-0": isSliderOpen,
    "translate-x-[120%]": !isSliderOpen,
  });

  const handleCloseSliderAndMenu = () => {
    handleCloseSlider();
    handleCloseFilterMenu();
  };

  return (
    <div
      className={`fixed z-[55] right-3 top-1/2 -translate-y-1/2 w-full max-w-[450px] h-[97vh] rounded-3xl bg-white p-8 transition-transform duration-700 ${sliderState}`}
    >
      <div className="flex justify-between items-center">
        <p className="text-xl font-extrabold">Filter</p>
        <Button
          title=""
          variant="text"
          startIcon={<CloseIcon />}
          className="hover:bg-[#EFF1F6] p-2 hover:rounded-full"
          onClick={handleCloseSliderAndMenu}
        />
      </div>

      <div className="flex items-center justify-between py-8">
        <Button
          title="Today"
          variant="outlined"
          size="small"
          className="hover:bg-[#EFF1F6]"
        />
        <Button
          title="Last 7 Days"
          variant="outlined"
          size="small"
          className="hover:bg-[#EFF1F6]"
        />
        <Button
          title="This month"
          variant="outlined"
          size="small"
          className="hover:bg-[#EFF1F6]"
        />
        <Button
          title="Last 3 months"
          variant="outlined"
          size="small"
          className="hover:bg-[#EFF1F6]"
        />
      </div>
    </div>
  );
};

export default FilterMenuSlider;
