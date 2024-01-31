import { useState,useEffect } from "react";

import { MENUAPI } from "./constants";

const useMenu = (resId) => {
  const [menuApi, setMenuApi] = useState(null);

  useEffect(() => {
    fetchMenuApi();
  }, []);

  const fetchMenuApi = async () => {
    const data = await fetch(MENUAPI + resId);

    const json = await data.json();

    setMenuApi(json.data);
  };

  return menuApi;
};
export default useMenu;
