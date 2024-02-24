type TAppState = {
  theme: string;
};

type TAction = {
  type: string;
  payload?: any;
};

type TUser = {
  id: number;
  name?: string;
  username: string;
  password: string;
};

export type { TAppState, TAction, TUser };
