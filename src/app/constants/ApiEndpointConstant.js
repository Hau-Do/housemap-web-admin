export const API_BASE_LOGIN_URL         = process.env.REACT_APP_API_ROOT_LOGIN;
export const API_BASE_MANAGEMENT_URL    = process.env.REACT_APP_API_ROOT_MANGAGEMENT;
export const API_BASE_JOBSEEKER_URL     = process.env.REACT_APP_API_ROOT_JOBSEEKER;

export const APIS_LOGIN                 = API_BASE_LOGIN_URL + '/api/auth/login';

export const APIS_CV_LIST               = API_BASE_JOBSEEKER_URL + '/api/cvs';
export const APIS_APPLIED_JOB_LIST      = API_BASE_JOBSEEKER_URL + '/api/jobs/applied';
export const APIS_SAVEED_JOB_LIST       = API_BASE_JOBSEEKER_URL + '/api/jobs/favourite';
export const APIS_APPLY_JOB             = API_BASE_JOBSEEKER_URL + '/api/jobs/';
export const APIS_REMOVE_JOB            = API_BASE_JOBSEEKER_URL + '/api/jobs/';
