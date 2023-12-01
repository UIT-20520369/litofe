const apiUrl = process.env.REACT_APP_API_URL + "/Playlist";

const getPlaylistById = async (id) => {
  const data = await fetch(apiUrl + "/" + id)
    .then((res) => res.json())
    .then((data) => data);
  return data;
};
const addSongToPlaylist = async (song, id) => {
  let error = null;
  const data = await fetch(apiUrl+'/addSong?id='+id, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(song),
  })
    .then((res) => {
      if (!res.ok) {
        throw res;
      } else {
        return res;
      }
    })
    .then((data) => data)
    .catch((err) => {
      error = err;
    });
  return { data: data, error: error };
};
export const playlistServices = { getPlaylistById,addSongToPlaylist };
