import axios from "axios";
import { Breed } from "./types";

const catAPI = axios.create({
    baseURL: "https://api.thecatapi.com/v1",
    headers: {"x-api-key": process.env.CAT_API}
})

export const fetchListOfBreeds = () => {
    return catAPI.get(`/breeds`).then(({data}) => data).catch((err:Error) => console.warn(err.message))
}
export const fetchCatImage = (breedID:string) => {
    return catAPI.get(`/images/${breedID}`).then(({data}) => data).catch((err:Error) => console.warn(err.message))
}