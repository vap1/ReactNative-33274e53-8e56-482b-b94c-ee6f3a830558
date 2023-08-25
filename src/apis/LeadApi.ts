
import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export interface Lead {
  leadId: string;
  contactDetails: string;
  relevantInfo: string;
  assignedTo: string;
  status: string;
}

export interface LeadDetails {
  // Define the fields for lead details here
}

export interface UserRegistrationResponse {
  success: boolean;
  errorMessage?: string;
}

export class LeadApi {
  static async addLead(leadDetails: LeadDetails): Promise<UserRegistrationResponse> {
    try {
      const response = await axios.post<UserRegistrationResponse>(`${BASE_URL}/leads`, leadDetails);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.errorMessage || 'Failed to add lead');
    }
  }

  static async updateLead(leadId: string, leadDetails: LeadDetails): Promise<UserRegistrationResponse> {
    try {
      const response = await axios.put<UserRegistrationResponse>(`${BASE_URL}/leads/${leadId}`, leadDetails);
      return response.data;
    } catch (error) {
      throw new Error(error.response?.data?.errorMessage || 'Failed to update lead');
    }
  }
}