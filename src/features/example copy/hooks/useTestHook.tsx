import { useState } from "react";
import { getTest } from "../services/test.service";

const useOdontograma = () => {
  const [test, setest] = useState<string>("");

  const getListest = async () => {
    try {
      const user = await getTest();
      setest(user);
    } catch (error) {
      console.error("Error fetching tests:", error);
    }
  };

  const handClick = () => {};

  return {
    getListest,
    handClick,
    test,
  };
};
export default useOdontograma;
