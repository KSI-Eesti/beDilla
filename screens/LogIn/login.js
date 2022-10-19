import React from 'react';
import { Text, TouchableOpacity, TextInput, View } from 'react-native';
import { Formik } from 'formik';
import style from './loginStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import loginValidationSchema from '../../components/validation';

export default function Login({navigation}) {
    
    return(
        <View style= {style.container}>
            <View style={style.headerText}>
                <Text style={style.text}> Hello, </Text>
                <Text style={style.texte2}> Welcome Back </Text>
            </View>
            <Formik initialValues={{email: '', password: ''}}
                    validationSchema={loginValidationSchema}
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
                        navigation.navigate('Home');
  
                    }
            }>
                {(props) => (
                    <View style={style.formStyle}>
                        <Text style={style.texteEmail}> Email : </Text>
                        <TextInput style={style.textInput} placeholder='email' onChangeText={props.handleChange('email')} value={props.values.email} keyboardType='email-address' autoComplete='email'>

                        </TextInput>

                        <View> 
                            {(props.errors.email && props.touched.email) && <Text style={{ fontSize: 10, color: 'red' }}>{props.errors.email}</Text>} 
                        </View>

                        <Text style={style.texte}> Password : </Text>
                        <TextInput style={style.textInput} placeholder='password' onChangeText={props.handleChange('password')} value={props.values.password} autoComplete='password' secureTextEntry={true}>

                        </TextInput>

                        <View>  
                            {(props.errors.password && props.touched.password) && <Text style={{ fontSize: 10, color: 'red' }}>{props.errors.password}</Text>}
                        </View>

                        <TouchableOpacity style={style.login} onPress={props.handleSubmit}>
                            <Text style={style.textes}> Submit </Text>
                        </TouchableOpacity>
                    </View>
                )}
            </Formik>
        </View>
    );
}