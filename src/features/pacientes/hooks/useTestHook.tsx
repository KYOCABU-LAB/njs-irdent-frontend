import { useState } from "react";
import { getTest } from "../services/test.service";

const useOdontograma = () => {
  const [test, settest] = useState<string>("");

  const getListtest = async () => {
    try {
      const user = await getTest();
      settest(user);
    } catch (error) {
      console.error("Error fetching tests:", error);
    }
  };

  const handClick = () => {};

  return {
    getListtest,
    handClick,
    test,
  };
};
export default useOdontograma;
