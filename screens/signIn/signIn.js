import React from 'react';
import { Text, TouchableOpacity, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import style from './signInStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function SignIn() {
    return(
        <View style= {style.container}>
            <View style={style.headerText}>
                <Text style={style.text}> Hello, </Text>
                <Text style={style.texte2}> Welcome, New User </Text>
            </View>
            <Formik initialValues={{firstName: '', lastName: '', email: '', password: '', birthday: ''}} 
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
                        <TextInput style={style.textInput} placeholder='First Name' onChangeText={props.handleChange('firstName')} value={props.values.firstName} autoComplete='name-given'>

                        </TextInput>

                        <Text style={style.texte}> Last Name : </Text>
                        <TextInput style={style.textInput} placeholder='Last Name' onChangeText={props.handleChange('lastName')} value={props.values.lastName} autoComplete='name-family'>

                        </TextInput>

                        <Text style={style.texteEmail}> Email : </Text>
                        <TextInput style={style.textInput} placeholder='Email' onChangeText={props.handleChange('email')} value={props.values.email} keyboardType='email-address' autoComplete='email'>

                        </TextInput>

                        <Text style={style.texte}> Password : </Text>
                        <TextInput style={style.textInput} placeholder='Password' onChangeText={props.handleChange('password')} value={props.values.password} secureTextEntry={true} autoComplete='password'>

                        </TextInput>

                        <Text style={style.texteEmail}> Birthday : </Text>
                        <TextInput style={style.textInput} placeholder='DOB' onChangeText={props.handleChange('date_of_birth')} value={props.values.date} autoComplete='birthdate-full'>

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