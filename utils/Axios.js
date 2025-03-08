import axios from "axios"

export const axios_instance=axios.create({
    baseURL:"https://estudy-backend.vercel.app",
    headers: {
        "Content-Type": "application/json",
        "Accept":"application/json"
       
    }
})

