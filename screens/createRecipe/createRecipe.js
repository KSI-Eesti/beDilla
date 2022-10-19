import React from 'react';
import { Text, TextInput, SafeAreaView, Image, Button, View, TouchableOpacity, ScrollView } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Formik } from 'formik';
import estilo from './createRecipeStyle';
import * as ImagePicker from 'expo-image-picker';

export default function CreateRecipe({navigation}) {
    
    const pickImage = async (handleChange) => {
        // No permissions request is necessary for launching the image library
        let result = await ImagePicker.launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.All,
          allowsEditing: true,
          aspect: [4, 3],
          quality: 1,
        });

        console.log(result);

    if (!result.cancelled) {
      handleChange(result.uri);
    }
  };

    return(
        <SafeAreaView style={estilo.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
            <Formik initialValues={{id: 0, name: '', image: '', recipe: '', description: ''}}
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

                    <>

                    <View>
                        <Text style={estilo.text}> Meal ID: </Text>
                        <TextInput style={estilo.textinput} onChangeText={props.handleChange('id')} value={props.values.id} keyboardType='numeric'/>
                    </View>
                    
                    <View >
                        <Text style={estilo.text}> Name: </Text>
                        <TextInput style={estilo.textinput} onChangeText={props.handleChange('name')} value={props.values.name} autoComplete='name' keyboardType='default'/>
                    </View>

                    <View style={{flexDirection: 'row'}}>
                        <Text style={estilo.text}> Image: </Text>
                        <Button
                            title='Image' icon="add-a-photo" mode="contained" onPress={() => {pickImage(props.handleChange('image'))}}
                        /> 
                    </View>

                    {props.values.image && props.values.image.length > 0 ?
                    <Image source={{ uri: props.values.image }} style={{ width: 50, height: 50, borderRadius: 125, overflow: 'hidden', borderColor: '#121', borderWidth: 4, marginTop: 10 }} /> : null}

                    <View >
                        <Text style={estilo.text}> Recipe: </Text>
                        <TextInput style={estilo.textinput} onChangeText={props.handleChange('recipe')} value={props.values.recipe} multiline numberOfLines={55} keyboardType='default'/>
                    </View>

                    <View >
                        <Text style={estilo.text}> Description: </Text>
                        <TextInput style={estilo.textinput} onChangeText={props.handleChange('description')} value={props.values.description} multiline numberOfLines={55} keyboardType='default'/>
                    </View>

                    <TouchableOpacity onPress={props.handleSubmit} style={estilo.login}>  
                        <Text style={estilo.textes}> Submit </Text>
                    </TouchableOpacity>

                    </>

                )}
            </Formik>
            </ScrollView>
        </SafeAreaView>
    );
}