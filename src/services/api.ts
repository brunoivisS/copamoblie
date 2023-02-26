import axios from "axios";

export const api = axios.create({

    //necessario troca de ip caso 
    baseURL: 'http://192.168.1.7:3333'
});
