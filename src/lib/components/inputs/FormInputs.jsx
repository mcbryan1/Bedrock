import React from "react";
import { TextInput , Text} from "react-native";
import styles from "./styles";

const FormInput = ({
  value,
  keyboard,
  maxLength,
  placeholder,
  onChangeText,
  numberOfLines,
  textInputStyle,
  autoFocus=false,
  multiline = false,
  secureTextEntry = false,
  label,
  labelStyle,
  autoCapitalize
}) => {
  return (
    <>
    <Text style={[styles.labelText,labelStyle]}>{label}</Text>
    <TextInput
      placeholder={placeholder}
      value={value}
      textAlignVertical={multiline ? "top" : "center"}
      maxLength={maxLength}
      onChangeText={onChangeText}
      numberOfLines={numberOfLines}
      multiline={multiline}
      autoFocus={autoFocus}
      showSoftInputOnFocus={true}
      keyboardType={
        keyboard === "email"
          ? "email-address"
          : keyboard === "number"
          ? "numeric"
          : "default"
      }
      autoCapitalize={autoCapitalize}
      style={[styles.textInput, textInputStyle]}
      secureTextEntry={secureTextEntry}
    />
    </>
  );
};

//

export default FormInput;
