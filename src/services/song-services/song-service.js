const apiUrl = process.env.REACT_APP_API_URL + "/Song";


const getAllSong= async () =>{
    const data =await fetch(apiUrl).then(res=>res.json()).then(data => data)
    return data;
}
export const songServices = {getAllSong}