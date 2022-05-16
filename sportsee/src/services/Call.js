import axios from "axios";
import { Navigate } from 'react-router';

const instance = axios.create({
  baseURL: "http://localhost:3000/user",
  headers: {"X-Custom-Header": "foobar"},
  timeout: 1000
});

export const getUserInformations = async(id) => {
  try {
    const response = await instance.get(`/${id}`);
    return response.data.data;
  } catch (error) {
    <Navigate replace to="/404" />
  }
}