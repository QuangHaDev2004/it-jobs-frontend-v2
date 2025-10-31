import { getCityList } from "@/services/city";
import { useQuery } from "@tanstack/react-query";

export const useCityList = () => {
  const { data } = useQuery({
    queryKey: ["cityList"],
    queryFn: getCityList,
  });

  const cityList = data?.code === "success" ? data.cityList : [];

  return { cityList };
};
