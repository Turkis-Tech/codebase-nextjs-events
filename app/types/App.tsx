type TAppState = {
  theme: string;
};

type TAction = {
  type: string;
  payload?: any;
};

type TUser = {
  id: number;
  name: string;
  email: string;
};

export type { TAppState, TAction };
