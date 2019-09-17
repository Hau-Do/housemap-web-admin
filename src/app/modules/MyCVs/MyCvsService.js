import {APIS_CV_LIST} from "../../constants/ApiEndpointConstant";
import {CvListDto} from "../../dto/CvDto";
import { axios } from '../../services/BaseService';

 export const getCvList = async () => {
    let res = await axios.get(APIS_CV_LIST);
    return new CvListDto(res.data.data);
}

