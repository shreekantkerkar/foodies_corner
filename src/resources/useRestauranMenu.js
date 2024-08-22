import { useState, useEffect, useCallback } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  const fetchData = useCallback(async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json);
  }, [resId]);  // Add resId as a dependency if it's used inside fetchData

  useEffect(() => {
    fetchData();
  }, [fetchData]);  // Now fetchData is a stable dependency

  return resInfo;
};

export default useRestaurantMenu;
