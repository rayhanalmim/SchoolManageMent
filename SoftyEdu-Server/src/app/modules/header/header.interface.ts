export interface HeaderInfo {
  key: string;
  logo_url: string;
  school_name_in_bangla: string;
  school_name_in_english: string;
  eiin_number: number;
  technical_code: number;
  established: number;
}
export interface HeaderInfoForUpdate {
  key: string;
  logo_url?: string;
  school_name_in_bangla?: string;
  school_name_in_english?: string;
  eiin_number?: number;
  technical_code?: number;
  established?: number;
}
