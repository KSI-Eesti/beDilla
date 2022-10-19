import React from "react";
import { SafeAreaView, Image, ScrollView, TouchableOpacity, View, Text} from 'react-native';
import leStyle from "./HomeStyle";
import images from "../../constants/images";
import { foodRecipes } from "../../sampleData";

export default function Home({navigation}) {
    return(
        <SafeAreaView style={leStyle.container}>
            <ScrollView showsVerticalScrollIndicator= {false}>

                <TouchableOpacity>
                    <View style={leStyle.view}>
                        <Image source={images.okok} style={leStyle.img}/>
                        {foodRecipes.slice(0, 1).map((foodRecipe, index) => {
                            return (
                                        <View key={index}>
                                            <Text style={leStyle.item}>{foodRecipe.name}</Text>
                                        </View>
                                    );
                        })}

                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={leStyle.view}>
                        <Image source={images.ndole} style={leStyle.img}/>
                        {foodRecipes.slice(1, 2).map((foodRecipe, index) => {
                            return (
                                        <View key={index}>
                                            <Text style={leStyle.item}>{foodRecipe.name}</Text>
                                        </View>
                                    );
                        })}
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={leStyle.view}>
                        <Image source={images.eru} style={leStyle.img}/>
                        {foodRecipes.slice(2, 3).map((foodRecipe, index) => {
                            return (
                                        <View key={index}>
                                            <Text style={leStyle.item}>{foodRecipe.name}</Text>
                                        </View>
                                    );
                        })}
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View style={leStyle.view}>
                        <Image source={images.sanga} style={leStyle.img}/>
                        {foodRecipes.slice(3, 4).map((foodRecipe, index) => {
                            return (
                                        <View key={index}>
                                            <Text style={leStyle.item}>{foodRecipe.name}</Text>
                                        </View>
                                    );
                        })}
                    </View>
                </TouchableOpacity>

                <TouchableOpacity style={leStyle.createRecipe} onPress={() => {navigation.navigate("CreateRecipe")}}>
                    <Text style={leStyle.text}> Create Meal </Text>
                </TouchableOpacity>

            </ScrollView>

        </SafeAreaView>
    );
}
