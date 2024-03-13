/**
 * @file api.js
 * @description This file contains functions for making API calls to a backend server.
 * @author @Tarak1246
 * @date Mar 13, 2024
 */

/**
 * @module apiConfig
 * @description This module configures Axios for making API requests with authentication.
 */
import axios from 'axios';
/**
 * @desription imports interceptor module for the axios calls
 */
import authInterceptor from './interceptor';
/**
 * @description Apply auth interceptor for all requests
 */
axios.interceptors.request.use(authInterceptor);
/**
 * @description  Configure the base URL for API requests
 */
const BASE_URL = 'http://localhost:3001';
/**
 * @function getUsers
 * @description Fetches a list of users from the API.
 * @returns {Promise<object[]>} A promise that resolves to an array of user objects.
 * @throws {Error} If the API request fails.
 */
export const getUsers = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/v/getUsers`);
    return response.data;
  } catch (error) {
    throw new Error(`Error user login: ${error.message}`);
  }
};
/**
 * @function loginUser
 * @description Logs a user in to the system.
 * @param {object} userData - An object containing login credentials.
 * @returns {Promise<object>} A promise that resolves to the user data on successful login.
 * @throws {Error} If the login request fails.
 */
export const loginUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/v1/login`, userData);
    return response.data;
  } catch (error) {
    throw new Error(`Error user login: ${error.message}`);
  }
};
/**
 * @function registerUser
 * @description Registers a new user on the server.
 * @param {object} userData - An object containing user registration details (e.g., username, password, email).
 * @returns {Promise<object>} A promise that resolves to the newly registered user data on success.
 * @throws {Error} If the user registration fails.
 */
export const registerUser = async (userData) => {
  try {
    const response = await axios.post(`${BASE_URL}/v/register`, userData);
    return response.data;
  } catch (error) {
    throw new Error(`Error user register: ${error.message}`);
  }
};

export const getDashboardData = async () => {
  try {
    const response = await axios.get(`/v2/getDashboardData`);
    return response.data;
  } catch (error) {
    throw new Error(`Error user register: ${error.message}`);
  }
};
/**
 * @function getLoggedinUserData
 * @description Fetches data for the currently logged-in user.
 * @param {string} username - The username of the logged-in user.
 * @returns {Promise<object>} A promise that resolves to the user data on success.
 * @throws {Error} If the API request fails.
 */
export const getLoggedinUserData = async (username) => {
  try {
    const response = await axios.get(`${BASE_URL}/v2/getLoggedinUserData/${username}`);
    return response.data;
  } catch (error) {
    throw new Error(`Error user register: ${error.message}`);
  }
};
/**
 * @function updateUserData
 * @description Updates user data on the server.
 * @param {object} data - Data containing the updated user information.
 * @returns {Promise<object>} A promise that resolves to the updated user data on success.
 * @throws {Error} If the update request fails.
 */
export const updateUserData = async (data) => {
  try {
    const response = await axios.post(`${BASE_URL}/v2/updateUserData`,data);
    return response.data;
  } catch (error) {
    throw new Error(`Error user edit: ${error.message}`);
  }
};
/**
 * @function updateUserPrivileges
 * @description Updates user privileges on the server.
 * @param {string} id - The ID of the user to update.
 * @param {object} data - Data containing the updated privileges.
 * @returns {Promise<object>} A promise that resolves to the updated user data.
 * @throws {Error} If the update request fails.
 */
export const updateUserPrivileges = async (id,data) => {
  try {
    const response = await axios.put(`${BASE_URL}/v2/updateUserPrivileges/${id}`,data);
    return response.data;
  } catch (error) {
    throw new Error(`Error user edit: ${error.message}`);
  }
};

export const projectDbPull = async () => {
  try {
    const response = await axios.get(`${BASE_URL}/v2/getProjects`);
    return response.data;
  } catch (error) {
    throw new Error(`Error user edit: ${error.message}`);
  }
};