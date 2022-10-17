import React from 'react';
import { Text, TouchableOpacity, TextInput } from 'react-native';
import { Formik } from 'formik';
import style from './loginStyle';
import AsyncStorage from '@react-native-community/async-storage';

export default function Login() {
    return(
        <View style= {style.container}>
            <View style={style.headerText}>
                <Text style={style.text}> Hello, </Text>
                <Text style={style.texte}> Welcome Back </Text>
            </View>
            <Formik initialValues={{firstName: '', lastName: '', email: '', password: '', date_of_birth: '', place_of_birth: ''}} 
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
                        <Text style={style.texte}> First Name : </Text>
                        <TextInput style={style.textInput} placeholder='First Name' onChangeText={props.handleChange('firstNaame')} value={props.values.email}>

                        </TextInput>

                        <Text style={style.texte}> Last Name : </Text>
                        <TextInput style={style.textInput} placeholder='Last Name' onChangeText={props.handleChange('lastName')} value={props.values.email}>

                        </TextInput>

                        <Text style={style.texte}> Email : </Text>
                        <TextInput style={style.textInput} placeholder='put your email' onChangeText={props.handleChange('email')} value={props.values.email}>

                        </TextInput>

                        <Text style={style.texte}> Password : </Text>
                        <TextInput style={style.textInput} placeholder='password' onChangeText={props.handleChange('password')} value={props.values.password}>

                        </TextInput>

                        <Text style={style.texte}> Date of Birth : </Text>
                        <TextInput style={style.textInput} placeholder='password' onChangeText={props.handleChange('date_of_birth')} value={props.values.password}>

                        </TextInput>

                        <Text style={style.texte}> Place of Birth : </Text>
                        <TextInput style={style.textInput} placeholder='password' onChangeText={props.handleChange('place_of_birth')} value={props.values.password}>

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