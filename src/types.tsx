import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Login: undefined;
  Details: undefined;
  Menu: undefined;
  Blank: { title?: string };
};

export type LoginProps = StackScreenProps<RootStackParamList, 'Login'>;

export type HomeProps = StackScreenProps<RootStackParamList, 'Home'>;

export type DetailsProps = StackScreenProps<RootStackParamList, 'Details'>;

export type MenuProps = StackScreenProps<RootStackParamList, 'Menu'>;

export type BlankProps = StackScreenProps<RootStackParamList, 'Blank'>;
