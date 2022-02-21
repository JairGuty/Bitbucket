import { useEffect, useState } from "react";
import { GistsCard } from "./GistsCard";
// import { GitHubUsers } from "./GitHubUsers";

// Funcion para extraer la informacion de la api github.
export const GetGitApi = () => {
    
  const [users, setUsers] = useState([]);


   // Hacemos la peticion a la api
  const getUsers = async() => {
    const URL = 'https://api.github.com/gists/public';
    const res = await fetch(URL);
    const data = await res.json();
    console.log(data);
    const gists = data.map( img => {
      return {
        id: img.id,
        name: img.owner.name,
        image: img.owner.avatar_url,
        username: img.owner.login,
        desc: img.description,
        files: img?.files.size,
        fecha: img.created_at,
        url: img.gist_url, 
      }
    })
    

    console.log(gists)
    setUsers(gists);
      
  }
  
   // Utilizamos el hook useEffect que se dispare varias veces la petición cuando cambia el componente
   useEffect(() => {
    getUsers();
  }, []);
  

  return (
      
    <div>
      <GistsCard users={users}/>
    </div>              
  );
}
