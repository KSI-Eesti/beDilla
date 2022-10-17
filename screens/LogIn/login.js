import React from 'react';
import { Text, TouchableOpacity, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import style from './loginStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function Login() {
    return(
        <View style= {style.container}>
            <View style={style.headerText}>
                <Text style={style.text}> Hello, </Text>
                <Text style={style.texte2}> Welcome Back </Text>
            </View>
            <Formik initialValues={{email: '', password: ''}} 
                    onSubmit={(values) => {
                        // storing data
                        const storeUser = async (values) => {
                            try {
                            await AsyncStorage.setItem("user", JSON.stringify(values));
                            } catch (error) {
                            console.log(error);
                            }
                        };

                        storeUser(values);
  
                    }
            }>
                {(props) => (
                    <View style={style.formStyle}>
                        <Text style={style.texteEmail}> Email : </Text>
                        <TextInput style={style.textInput} placeholder='email' onChangeText={props.handleChange('email')} value={props.values.email} keyboardType='email-address' autoComplete='email'>

                        </TextInput>

                        <Text style={style.texte}> Password : </Text>
                        <TextInput style={style.textInput} placeholder='password' onChangeText={props.handleChange('password')} value={props.values.password} keyboardType='numbers-and-punctuation' autoComplete='password' secureTextEntry={true}>

                        </TextInput>
                        <TouchableOpacity style={style.login} onPress={props.handleSubmit}>
                            <Text style={style.textes}> Submit </Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </View>
    );
};