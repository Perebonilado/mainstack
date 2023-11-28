import React, { FC, useState, useEffect } from "react";
import FilterMenuSlider from "./FilterMenuSlider";
import cn from "classnames";

interface Props {
  isFilterMenu: boolean;
  handleCloseFilterMenu: () => void;
  filterMenuOpacity: number;
}

const FilterMenu: FC<Props> = ({
  isFilterMenu,
  handleCloseFilterMenu,
  filterMenuOpacity,
}) => {
  const [isSliderOpen, setIsSliderOpen] = useState(false);

  const handleCloseSlider = () => {
    setIsSliderOpen(false);
  };

  const filterMenuState = cn({
    hidden: !isFilterMenu,
    fixed: isFilterMenu,
  });

  useEffect(() => {
    if (isFilterMenu) {
      setIsSliderOpen(true);
    }
  }, [isFilterMenu]);

  return (
    <>
      <div
        className={`w-screen h-screen ${filterMenuState} bg-zinc-800 z-50 top-0 left-0 transition-opacity duration-700`}
        style={{ opacity: `${filterMenuOpacity}` }}
      ></div>
      <FilterMenuSlider
        isSliderOpen={isSliderOpen}
        handleCloseSlider={handleCloseSlider}
        handleCloseFilterMenu={handleCloseFilterMenu}
      />
    </>
  );
};

export default FilterMenu;
