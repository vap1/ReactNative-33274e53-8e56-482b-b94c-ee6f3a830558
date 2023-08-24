
export interface Employee {
  employeeId: string;
  name: string;
  contactInfo: string;
  role: string;
  permissions: string;
}

export interface EmployeeDetails {
  // Define the fields for employee details here
}

export interface EmployeeResponse {
  success: boolean;
  errorMessage?: string;
}