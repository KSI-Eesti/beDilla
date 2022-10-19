import React from 'react';
import { Text, TouchableOpacity, TextInput, View, ScrollView } from 'react-native';
import { Formik } from 'formik';
import style from './signInStyle';
import AsyncStorage from '@react-native-async-storage/async-storage';
import signInValidation from '../../components/signInValidation';

export default function SignIn({navigation}) {
    return(
        <View style= {style.container}>
          <ScrollView>
            <View style={style.headerText}>
                <Text style={style.text}> Hello, </Text>
                <Text style={style.texte2}> Welcome, New User </Text>
            </View>
            <Formik initialValues={{firstName: '', lastName: '', email: '', password: ''}}
                    validationSchema={signInValidation}
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
                        <Text style={style.texte}> First Name : </Text>
                        <TextInput style={style.textInput} placeholder='First Name' onChangeText={props.handleChange('firstName')} value={props.values.firstName} autoComplete='name-given'>

                        </TextInput>

                        <View> 
                            {(props.errors.firstName && props.touched.firstName) && <Text style={{ fontSize: 10, color: 'red' }}>{props.errors.firstName}</Text>} 
                        </View>

                        <Text style={style.texte}> Last Name : </Text>
                        <TextInput style={style.textInput} placeholder='Last Name' onChangeText={props.handleChange('lastName')} value={props.values.lastName} autoComplete='name-family'>

                        </TextInput>

                        <View> 
                            {(props.errors.lastName && props.touched.lastName) && <Text style={{ fontSize: 10, color: 'red' }}>{props.errors.lastName}</Text>} 
                        </View>

                        <Text style={style.texteEmail}> Email : </Text>
                        <TextInput style={style.textInput} placeholder='Email' onChangeText={props.handleChange('email')} value={props.values.email} keyboardType='email-address' autoComplete='email'>

                        </TextInput>

                        <View> 
                            {(props.errors.email && props.touched.email) && <Text style={{ fontSize: 10, color: 'red' }}>{props.errors.email}</Text>} 
                        </View>

                        <Text style={style.texte}> Password : </Text>
                        <TextInput style={style.textInput} placeholder='Password' onChangeText={props.handleChange('password')} value={props.values.password} secureTextEntry={true} autoComplete='password'>

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
          </ScrollView>
        </View>
    );
}