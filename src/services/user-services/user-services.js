const apiUrl = process.env.REACT_APP_API_URL + "/User";

const getUserById=async(id)=>{
    const data = await fetch(apiUrl+'/'+id).then(res=>res.json()).then(data=>data);
    return data;
}

export const userServices ={getUserById}