import Axios from 'axios';

const API_ROOT = process.env.REACT_APP_API_MANAGEMENT_ROOT_URL;

export const axios = Axios.create({
  baseURL: API_ROOT,
  headers: { 'Content-Type': 'application/json' }
});

axios.defaults.headers.common.Authorization = `Bearer eyJhbGciOiJIUzUxMiJ9.eyJqdGkiOiI4MjFlNzQ4ODhhODc0MTM0OTYyMGRmYmUwNzhlM2RkYSIsInN1YiI6IjMwOGFiMTEyLTc2YTUtNDMxZi04MDFiLTZlMGIzYjY3YzA2ZSIsImlhdCI6MTU1ODU4MDcxNywiZXhwIjoxNTU4NjY3MTE3fQ.OsH4BdP7OEdJnQruh7rAuyH-Hq_1aZgChUNS8IQDlNednx2mAc6oDa22OmKPCabqqcSyv9GtTmMc18ZSC_54mA`;

axios.interceptors.request.use((config) => {
  return config;
}, (err) => {
  return Promise.reject(err);
});

axios.interceptors.response.use((res) => {
  return res;
}, async (err) => {
  return Promise.reject(err);
});
