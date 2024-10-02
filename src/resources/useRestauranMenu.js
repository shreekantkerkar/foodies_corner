import { useState, useEffect, useCallback } from "react";
import { MENU_API } from "./constants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  const fetchData = useCallback(async () => {
    const data = await fetch(MENU_API + resId);
    const json = await data.json();
    setResInfo(json);
  }, [resId]); 

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return resInfo;
};

export default useRestaurantMenu;
