import axios from 'axios';
import { BASE_URL_NEXT } from '../constants/baseUrl';

export const UseApiPrivate = () => {
  const api = axios.create({
    baseURL: BASE_URL_NEXT,
    headers: {
      'Content-Type': 'application/json',
    }
  });
  
  
  return api;
}

export default UseApiPrivate;
