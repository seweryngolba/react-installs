import { useQuery } from "@tanstack/react-query";
import Axios from "axios";

const Home = () => {
  const {
    data: catData,
    isLoading,
    isError,
    refetch,
  } = useQuery(["cat"], () => {
    return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
  });

  if (isError) {
    return <h1>Error!!!!!!!</h1>;
  }

  if (isLoading) {
    return <h1>Loading...</h1>;
  }
  return (
    <h1>
      This is homepage and user is <p>{catData?.fact}</p>
      <button onClick={refetch}>UpdateData</button>
    </h1>
  );
};

export default Home;
