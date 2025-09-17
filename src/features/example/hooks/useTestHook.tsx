import { useEffect, useState } from "react";
import { getTest } from "../services/test.service";
import { useQuery } from "react-query";
import toast from "react-hot-toast";


export interface User {
  id: number;
  name: string;
  email: string;
}

const useOdontograma = () => {
  const [test, setest] = useState<User | null>(null);
  const number = null;
  const { isLoading, error, data } = useQuery({
    queryKey: "test",
    queryFn: async () => {
      getTest;
    },
    enabled: number!!,
    onError: (error: any) => console.log(error),
  });

  const getTest = async () => {
    const response = await getTest();
  };

  const handClick = () => {
    console.log("click");
  };

  return {
    handClick,
    data,
    test,
  };
};
export default useOdontograma;
