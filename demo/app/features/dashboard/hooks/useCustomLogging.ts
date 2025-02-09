import { useEffect } from "react";

export const useCustomLogging = () => {
  //dole v array jsou promenne ktere use effect sleduje a pokud se zmeni provede se kod ve funkci. V pripade prazdne array se provede kod jen1 pri nacteni komponenty
  useEffect(() => {
    // logging
    // business logic
    //
    console.log("mounted");
    //dependencies
  }, []);
};
