export interface GitHubRepository {
  id: number;
  name: string;
  html_url: string;
  description: string | null;
  owner: {
    login: string;
    avatar_url: string;
  };
  language: string | null;
  stargazers_count: number;
  created_at: string;
  updated_at: string;
  forks_count: number;
  open_issues_count: number;
  topics: string[];
  archived: boolean;
  disabled: boolean;
  private: boolean;
}

export interface ApiResponse<T> {
  status: number;
  data: T;
}

export interface ApiError {
  response?: {
    status: number;
    data?: {
      message?: string;
    };
  };
  request?: any;
  message: string;
}