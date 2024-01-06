import { useQuery, useMutation, useQueryClient } from "react-query";
import { useNavigate } from "react-router-dom";
const apiUrl = process.env.REACT_APP_API_URL + "/Room";
const getRoomById = async (id) => {
  const MainApiUrl = `${apiUrl}/${id}`;
  const data = await fetch(MainApiUrl)
    .then((response) => response.json())
    .then((json) => json);
  return data;
};
const useGetRoomById = (id) => {
  const properties = useQuery({
    queryKey: ["RoomById", { id }],
    queryFn: ({ queryKey }) => {
      const [_key, { id }] = queryKey;
      return getRoomById(id);
    },
  });
  return properties;
};
const getAvailableRooms = async () => {
  const MainApiUrl = `${apiUrl}/all`;
  const data = await fetch(MainApiUrl)
    .then((response) => response.json())
    .then((json) => json);
  return data;
};
const useGetAvailableRooms = (id) => {
  const properties = useQuery({
    queryKey: ["AllRooms", { id }],
    queryFn: ({ queryKey }) => {
      const [_key, { id }] = queryKey;
      return getAvailableRooms();
    },
  });
  return properties;
};
const SoftDelete = async (id) => {
  const data = await fetch(apiUrl + "/softrm/" + id, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => data);
  return data;
};
const useSoftDelete = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (id) => SoftDelete(id),
    onSuccess: (data) => {
      navigate("/");
      console.log(data);
    },
  });
  return mutation;
};
const AddRoom = async (room) => {
  const data = await fetch(apiUrl + "/add", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body:JSON.stringify(room)
  })
    .then((res) => res.json())
    .then((data) => data);
  return data;
};
const useAddRoom = () => {
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const mutation = useMutation({
    mutationFn: (room) => AddRoom(room),
    onSuccess: (data) => {
      navigate("/streaming/"+data.id)
    },
  });
  return mutation;
};
export const roomServices = { useGetRoomById, useGetAvailableRooms,useSoftDelete,useAddRoom };
