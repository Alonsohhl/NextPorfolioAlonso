export interface ApiResponse extends Response{
  success?: boolean;
  message?: string; // Optional properties can be marked with ?
}


