export interface Program {
  id: number;
  university: string;
  country: string;
  description: string;
}

export type RootStackParamList = {
  Home: undefined;
  Details: { program: Program };
};
