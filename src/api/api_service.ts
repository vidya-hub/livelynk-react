import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import APIRoutes from "../utils/api_routes";
import User from "../types/user";
import Contact from "../types/contact";

class APIService {
  private static axiosInstance: AxiosInstance = axios.create({
    baseURL: APIRoutes.baseUrl,
    headers: {
      "Content-Type": "application/json",
    },
  });

  // Private static method to handle errors
  private static handleError(error: unknown): Promise<any> {
    if (axios.isAxiosError(error)) {
      if (error.response) {
        console.log("Here is the response data:", error.response);

        return Promise.reject({
          type: "AxiosError",
          status: error.response.status,
          data: error.response.data,
        });
      } else if (error.request) {
        // The request was made but no response was received
        return Promise.reject({
          type: "AxiosError",
          message: "No response received from the server",
        });
      } else {
        // Something happened in setting up the request that triggered an Error
        return Promise.reject({
          type: "AxiosError",
          message: error.message,
        });
      }
    } else if (error instanceof Error) {
      // Handle generic JavaScript errors
      return Promise.reject({
        type: "GenericError",
        message: error.message,
      });
    } else {
      // Handle unknown errors
      return Promise.reject({
        type: "UnknownError",
        message: "An unknown error occurred",
      });
    }
  }
  private static transformToUser(data: any): User {
    return {
      userId: data.user.userId,
      username: data.user.username,
      email: data.user.email,
      roomId: data.user.roomId,
      unRequestedUsers: data.user.unRequestedUsers || {},
      requestedUsers: data.user.requestedUsers || {},
      invitedUsers: data.user.invitedUsers || {},
      acceptedUsers: data.user.acceptedUsers || {},
      originalUsers: data.user.originalUsers || {},
    };
  }
  private static transformToContact(data: any): Contact {
    return {
      userId: data.userId,
      username: data.username,
      email: data.email,
      roomId: data.roomId,
      chatMessages: data.chatMessages || [],
      contactId: data.contactId || null,
    };
  }
  // Auth
  static async login(data: {
    email: string;
    password: string;
  }): Promise<{ message: string; user: User }> {
    try {
      const response = await this.axiosInstance.post(APIRoutes.login, data);
      return {
        message: response.data.message,
        user: this.transformToUser(response.data),
      };
    } catch (error) {
      return this.handleError(error);
    }
  }

  static async register(data: {
    email: string;
    password: string;
    userName: string;
  }): Promise<{ message: string; user: User }> {
    try {
      const response = await this.axiosInstance.post(APIRoutes.register, data);
      return {
        message: response.data.message,
        user: this.transformToUser(response.data),
      };
    } catch (error) {
      return this.handleError(error);
    }
  }

  // Contact
  static async addContact(data: object): Promise<AxiosResponse> {
    try {
      return await this.axiosInstance.post(APIRoutes.addContact, data);
    } catch (error) {
      return this.handleError(error);
    }
  }

  static async acceptContactRequest(data: object): Promise<AxiosResponse> {
    try {
      return await this.axiosInstance.post(
        APIRoutes.acceptContactRequest,
        data
      );
    } catch (error) {
      return this.handleError(error);
    }
  }

  static async deleteContact(data: object): Promise<AxiosResponse> {
    try {
      return await this.axiosInstance.post(APIRoutes.deleteContact, data);
    } catch (error) {
      return this.handleError(error);
    }
  }

  static async getContacts({
    userId,
  }: {
    userId: number;
  }): Promise<AxiosResponse> {
    try {
      return await this.axiosInstance.get(
        `${APIRoutes.getContacts}currentUserId=${userId}`
      );
    } catch (error) {
      return this.handleError(error);
    }
  }

  static async getAllContacts(params: object = {}): Promise<AxiosResponse> {
    try {
      return await this.axiosInstance.get(APIRoutes.getAllContacts, { params });
    } catch (error) {
      return this.handleError(error);
    }
  }

  static async getChatContacts({
    userId,
  }: {
    userId: number;
  }): Promise<Contact[]> {
    try {
      const response = await this.axiosInstance.get(
        `${APIRoutes.getChatContacts}currentUserId=${userId}`
      );
      if (response.status === 200) {
        console.log(response.data);

        return response.data.data.map((contact: any) => {
          const tfContact: Contact = this.transformToContact(contact);
          return tfContact;
        });
      }
      return [];
    } catch (error) {
      return [];
    }
  }

  // Chat
  static async getChatHistory(params: object = {}): Promise<AxiosResponse> {
    try {
      return await this.axiosInstance.get(APIRoutes.getChatHistory, { params });
    } catch (error) {
      return this.handleError(error);
    }
  }
}

export default APIService;
