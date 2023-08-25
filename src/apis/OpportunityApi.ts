
import axios from 'axios';

const BASE_URL = 'https://api.example.com'; // Replace with your actual API base URL

export interface Opportunity {
  opportunityId: string;
  leadId: string;
  assignedTo: string;
  status: string;
  notes: string;
  documents: string;
}

export interface CreateOpportunityRequest {
  leadId: string;
  assignedTo: string;
  status: string;
  notes: string;
  documents: string;
}

export interface UpdateOpportunityRequest {
  opportunityId: string;
  assignedTo: string;
  status: string;
  notes: string;
  documents: string;
}

export async function createOpportunity(
  request: CreateOpportunityRequest
): Promise<Opportunity> {
  try {
    const response = await axios.post<Opportunity>(
      `${BASE_URL}/opportunities`,
      request
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to create opportunity');
  }
}

export async function updateOpportunity(
  request: UpdateOpportunityRequest
): Promise<Opportunity> {
  try {
    const response = await axios.put<Opportunity>(
      `${BASE_URL}/opportunities/${request.opportunityId}`,
      request
    );
    return response.data;
  } catch (error) {
    throw new Error('Failed to update opportunity');
  }
}