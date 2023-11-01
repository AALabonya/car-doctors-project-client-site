import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";


const useServices = () => {
    const [service, setService] = useState([])

    useEffect(()=>{
           axios.get("https://car-doctors-server-dun.vercel.app/service")
           .then(res=>setService(res.data))
        // fetch("https://car-doctors-server-dun.vercel.app/service")
        // .then(res=>res.json())
        // .then(data=>setService(data))
    },[])
    return service
};

export default useServices;