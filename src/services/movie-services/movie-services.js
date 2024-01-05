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
        navigate("/streaming");
      }
    });
    return mutation
  }

  export const movieServices={useAdd}
