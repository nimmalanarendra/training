import axios, {
	AxiosRequestConfig,
	AxiosResponse,
	InternalAxiosRequestConfig,
} from "axios";

const BASE_URL = process.env.REACT_APP_API_BASE_URL;

const apiClient = axios.create({
	baseURL: BASE_URL, // Replace with your API base URL
	timeout: 1000,
	headers: { "Content-Type": "application/json" },
});

apiClient.interceptors.request.use(
	(config: InternalAxiosRequestConfig) => {
		// Modify config before request is sent (e.g., add auth token)
		return config;
	},
	(error) => {
		// Handle request error
		return Promise.reject(error);
	}
);

apiClient.interceptors.response.use(
	(response: AxiosResponse) => {
		// Modify response data if necessary
		return response;
	},
	(error) => {
		// Handle response error
		return Promise.reject(error);
	}
);

export const get = async (url: string, config?: AxiosRequestConfig) => {
	try {
		const response = await apiClient.get(url, config);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const post = async (
	url: string,
	data: any,
	config?: AxiosRequestConfig
) => {
	try {
		const response = await apiClient.post(url, data, config);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const put = async (
	url: string,
	data: any,
	config?: AxiosRequestConfig
) => {
	try {
		const response = await apiClient.put(url, data, config);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export const del = async (url: string, config?: AxiosRequestConfig) => {
	try {
		const response = await apiClient.delete(url, config);
		return response.data;
	} catch (error) {
		throw error;
	}
};

export default apiClient;
