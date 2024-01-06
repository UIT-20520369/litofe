import { useQuery, useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
const apiUrl = process.env.REACT_APP_API_URL + "/Movie";
const Create = async (movie) => {
  const data = await fetch(apiUrl + "/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(movie),
  })
    .then((res) => res.json())
    .then((data) => data);
  return data;
};
const useAdd = ()=>{
    const queryClient = useQueryClient();
    const navigate = useNavigate();
    const mutation = useMutation({
      mutationFn:(movie) =>Create(movie),
      onSuccess:(data)=>{
      }
    });
    return mutation
  }
  const getAll = async () => {
    const MainApiUrl = `${apiUrl}/all`;
    const data = await fetch(MainApiUrl)
      .then((response) => response.json())
      .then((json) => json);
    return data;
  };
  const useAllMovies = () => {
    const properties = useQuery({
      queryKey: ["AllMovies"],
      queryFn: () => {
        return getAll();
      },
    });
    return properties;
  };
  export const movieServices={useAdd,useAllMovies}
