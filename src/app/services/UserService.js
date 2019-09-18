import { ENDPOINT_USERS } from "../constants/ApiEndpoints/UserEndpoints";
import { UserListDto } from "../dto/UserDto";
import { axios } from './BaseService';


export const getUserList = async () => {
    let res = await axios.get(ENDPOINT_USERS);
    return new UserListDto(res.data);
}