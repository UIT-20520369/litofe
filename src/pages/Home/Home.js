import * as React from "react";
import { Stack, Box } from "@mui/material";
import SongList from "./SongList";
import SongImage from "./SongImage";
import Player from "./Player";
import { useParams } from "react-router-dom";
import { playlistServices } from "../../services/playlist-services/playlist-services";
import * as signalR from "@microsoft/signalr"
function HomePage() {
  const [playlist,setPlayList] =React.useState(null);
  const {playlistId}= useParams();
  var connection = new signalR.HubConnectionBuilder().withUrl("https://localhost:44374/playlistHub").build();
  connection.on("ReceiveMessage", function ( message) {
    console.log(message);
    setPlayList(message);
});
connection.start().then(function () {
 
}).catch(function (err) { 
});
  React.useEffect(()=>{
    playlistServices.getPlaylistById(playlistId).then(data=>{
      console.log(data);
      setPlayList(data)
    })
  },[])
  return (
    <div style={{ width: "100%", height: "80%" }}>
      <Stack sx={{ height: "100%", width: "100%" }} direction="row" spacing={0}>
        <SongImage />
        <SongList songs={playlist?.songs} playlistId={playlistId} />
      </Stack>
      <Player />
    </div>
  );
}
export default HomePage;
