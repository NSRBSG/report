export type ButtonType = 'action' | 'operator' | 'number' | 'equals';

export type User = {
  username: string;
};

export type AuthContextType = {
  user: User | null;
  login: (user: User) => void;
  logout: () => void;
};

