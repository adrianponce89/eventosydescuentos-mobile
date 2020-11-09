import React from 'react';
import { TextInput } from 'react-native';
import { Field } from 'redux-form';

interface Props {
  input: {
    onChange: (text: string) => void;
  };
}

const renderInput = ({
  input: { onChange, ...restInput },
  ...otherProps
}: Props) => {
  return <TextInput onChangeText={onChange} {...restInput} {...otherProps} />;
};

export const FieldInput = (props: any) => (
  <Field {...props} component={renderInput} />
);
