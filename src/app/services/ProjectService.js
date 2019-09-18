import { ENDPOINT_ADD_PROJECT, ENDPOINT_REMOVE_PROJECT } from "../constants/ApiEndpoints/ProjectEndpoints";
import { axios } from './BaseService';


export const addProject = async () => {
    let res = await axios.post(ENDPOINT_ADD_PROJECT);
    return res.data;
}

export const removeProject = async (id) => {
    let res = await axios.delete(`${ENDPOINT_REMOVE_PROJECT}${id}`);
    return res.data;
}