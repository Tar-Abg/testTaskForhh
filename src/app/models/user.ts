export interface User {
  lastName: string;
  id: number;
  firstName: string;
  email: string;
  phone: string;
  address: Address;
}

export interface Address {
  streetAddress: string;
  city: string;
  state: string;
  zip: string;
}
