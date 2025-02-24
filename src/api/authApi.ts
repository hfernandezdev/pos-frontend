import client from './client';

export const login = async (email: string, password: string) => {
  try {
    const response = await client.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const register = async (userData: {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
}) => {
  try {
    const response = await client.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    throw error;
  }
};

export const logout = async () => {
  try {
    const response = await client.post('/auth/logout');
    return response.data;
  } catch (error) {
    throw error;
  }
};
