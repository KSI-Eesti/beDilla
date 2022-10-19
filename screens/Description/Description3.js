import React from "react";
import { SafeAreaView, Image, View, Text, ScrollView} from 'react-native';
import { foodRecipes } from "../../sampleData";
import images from "../../constants/images";
import style from "./DescriptionStyle";

export default function DescriptionThree({navigation}) {
    return(
        <SafeAreaView style={style.container}>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={style.view}>
                    {foodRecipes.slice(2, 3).map((foodRecipe, index) => {
                        return(
                            <View key={index}>
                                <Image source={images.eru} style={style.img}/>
                                <Text style={style.item}> {foodRecipe.id} : {foodRecipe.name} </Text>
                                <Text style={style.item}> Recipe : {foodRecipe.recipe} </Text>
                                <Text style={style.item}> Description : {foodRecipe.description} </Text>
                            </View>
                        );
                    })}
                </View>
            </ScrollView>
                
        </SafeAreaView>
    );
}