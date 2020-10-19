import { StackScreenProps } from '@react-navigation/stack';

type RootStackParamList = {
  Home: undefined;
  Details: undefined;
  Blank: { title?: string };
};

export type LoginProps = StackScreenProps<RootStackParamList, 'Login'>;

export type HomeProps = StackScreenProps<RootStackParamList, 'Home'>;

export type DetailsProps = StackScreenProps<RootStackParamList, 'Details'>;

export type BlankProps = StackScreenProps<RootStackParamList, 'Blank'>;
