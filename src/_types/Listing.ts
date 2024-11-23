export interface Geolocation {
  lat: number;
  lng: number;
}

export interface Price {
  amount: number;
  currency: string;
}

export interface Location {
  address: string;
  building?: string;
}

export interface Listing {
  id: string;
  title: string;
  description: string;
  state: string;
  price: Price | null;
  location: Location | null;
  createdAt: string;
}
