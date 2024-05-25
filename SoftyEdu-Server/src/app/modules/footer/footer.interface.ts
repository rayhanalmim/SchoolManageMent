export interface FooterInfo {
  key: string;
  school_name: string;
  short_description: string;
  location: string;
  contact_number: string;
  email_address: string;
}

export interface FooterInfoForUpdate {
  key?: string;
  school_name?: string;
  short_description?: string;
  location?: string;
  contact_number?: string;
  email_address?: string;
}
