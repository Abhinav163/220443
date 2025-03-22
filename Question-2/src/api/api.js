import axios from "axios";

const API_BASE_URL = "http://20.244.56.144/test/";

const API = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzQyNjI3Mzk1LCJpYXQiOjE3NDI2MjcwOTUsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjUxMmYzNjllLTBjMmQtNDM0My1iYzM1LWNjZGVmNDIyNjQzNCIsInN1YiI6ImFiaGluYXYuc2hhcm1hLjIyY3NlQGJtdS5lZHUuaW4ifSwiY29tcGFueU5hbWUiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2d5IiwiY2xpZW50SUQiOiI1MTJmMzY5ZS0wYzJkLTQzNDMtYmMzNS1jY2RlZjQyMjY0MzQiLCJjbGllbnRTZWNyZXQiOiJza3NBTFdZWEJ1ZFFxSnJrIiwib3duZXJOYW1lIjoiQWJoaW5hdiBTaGFybWEiLCJvd25lckVtYWlsIjoiYWJoaW5hdi5zaGFybWEuMjJjc2VAYm11LmVkdS5pbiIsInJvbGxObyI6IjIyMDQ0MyJ9.UoFB3DcNksQHbd9u18v7aAUnfVjlBVrFnKolFEgtS3E`,
    "Content-Type": "application/json",
  },
});

export const fetchTopUsers = async () => {
  try {
    const response = await API.get("/users");
    return response.data;
  } catch (error) {
    console.error("Error fetching top users:", error);
    throw error;
  }
};

export const fetchTrendingPosts = async () => {
  try {
    const response = await API.get("/trending-posts");
    return response.data;
  } catch (error) {
    console.error("Error fetching trending posts:", error);
    throw error;
  }
};

export const fetchFeed = async () => {
  try {
    const response = await API.get("/feed");
    return response.data;
  } catch (error) {
    console.error("Error fetching feed:", error);
    throw error;
  }
};

export default API;
