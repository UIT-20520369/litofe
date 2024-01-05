import { useQuery,useMutation,useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
const apiUrl = process.env.REACT_APP_API_URL + "/User";

const getUserById = async (id) => {
  const data = await fetch(apiUrl + "/" + id)
    .then((res) => res.json())
    .then((data) => data);
  return data;
};
const login = async (user) => {
  const data = await fetch(apiUrl + "/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .then((data) => data);
  return data;
};
const register = async (user) => {
    const data = await fetch(apiUrl + "/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    })
      .then((res) => res.json())
      .then((data) => data);
    return data;
  };
const useLogin = ()=>{
  const queryClient = useQueryClient();
  const navigate= useNavigate();
  const mutation = useMutation({
    mutationFn:(user) =>login(user),
    onSuccess:(data)=>{
      localStorage.setItem("user",JSON.stringify(data));
      navigate("/");
    }
  });
  return mutation
}
const useRegister = ()=>{
    const queryClient = useQueryClient();
    const navigate= useNavigate();
  const mutation = useMutation({
    mutationFn:(user) =>register(user),
    onSuccess:(data)=>{
      localStorage.setItem("user",JSON.stringify(data));
      navigate("/");
    }
  });
  return mutation
}
export const userServices = { getUserById,login,register,useLogin,useRegister };
