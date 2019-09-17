import {APIS_APPLIED_JOB_LIST, APIS_SAVEED_JOB_LIST, APIS_APPLY_JOB, APIS_REMOVE_JOB } from "../../constants/ApiEndpointConstant";
import {JobListDto} from "../../dto/JobDto";
import { axios } from '../../services/BaseService';

export const appliedJobs = async () => {
    let res = await axios.get(APIS_APPLIED_JOB_LIST);
    return new JobListDto(res.data.data.collection);
}

export const savedJobs = async () => {
    let res = await axios.get(APIS_SAVEED_JOB_LIST);
    return new JobListDto(res.data.data.collection);
}

export const applyJob = async (jobId) => {
    let res = await axios.post(APIS_APPLY_JOB + jobId);
    return res.data;
}

export const removeJob = async (jobId) => {
    let res = await axios.delete(APIS_REMOVE_JOB + jobId);
    return res.data;
}

