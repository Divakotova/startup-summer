export interface ContentState {
  value?: string;
  onValueChange: (e: any) => void;
}

export interface SearchValue {
  value: string;
}

export interface UserRepo {
  message?: string;
  html_url: string;
  name: string;
  id: number;
  description?: string;
  updated_at?: string;
}

export interface User {
  message?: string;
  avatar_url: string;
  followers: number;
  following: number;
  html_url: string;
  id?: number;
  login: string;
  name?: string;
  node_id?: string;
  public_repos: number;
}

export interface StaticData {
  [key: string]: number;
}
