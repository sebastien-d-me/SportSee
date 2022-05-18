import axios from "axios";
import { Navigate } from 'react-router';

const instance = axios.create({
  baseURL: "http://localhost:3000/user",
  headers: {"X-Custom-Header": "foobar"},
  timeout: 1000
});

/* User Infos */
export const getUserInfos = async(id) => {
  try {
    const response = await instance.get(`/${id}`);
    return response.data.data;
  } catch (error) {
    <Navigate replace to="/404" />
  }
}

/* Activity */
export const getActivity = async(id) => {
  try {
    const response = await instance.get(`/${id}/activity`);
    return response.data.data;
  } catch (error) {
    <Navigate replace to="/404" />
  }
}

/* Average Sessions */
export const getAverageSessions = async(id) => {
  try {
    const response = await instance.get(`/${id}/average-sessions`);
    return response.data.data;
  } catch (error) {
    <Navigate replace to="/404" />
  }
}

/* User Performance */
export const getUserPerformance = async(id) => {
  try {
    const response = await instance.get(`/${id}/performance`);
    return response.data.data;
  } catch (error) {
    <Navigate replace to="/404" />
  }
}