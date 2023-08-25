
import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export interface Task {
  taskId: string;
  assignedTo: string;
  status: string;
  comments: string;
}

export interface UserRegistrationResponse {
  success: boolean;
  errorMessage?: string;
}

export class TaskApi {
  static async createTask(task: Task): Promise<UserRegistrationResponse> {
    try {
      const response = await axios.post(`${BASE_URL}/tasks`, task);
      return response.data;
    } catch (error) {
      console.error('Error creating task:', error);
      throw error;
    }
  }

  static async updateTask(taskId: string, updatedTask: Task): Promise<UserRegistrationResponse> {
    try {
      const response = await axios.put(`${BASE_URL}/tasks/${taskId}`, updatedTask);
      return response.data;
    } catch (error) {
      console.error('Error updating task:', error);
      throw error;
    }
  }
}