import React from 'react';
import {View, Text, Image} from 'react-native';
import {Picker} from '@react-native-picker/picker';


const Puppy = ({question, picture, setBreed}) => {

    return (
        <View style={{margin: 10}}>

            <Text>{question}</Text>

            <Image
                source={picture}
                style={{width: '100%', height: 250}}
            />

            <Picker onValueChange={(value) => setBreed(value)}>
                <Picker.Item label="Select the dog breed" value="" />
                <Picker.Item label="Golden Retriever" value="Golden Retriever" />
                <Picker.Item label="Pomeranian" value="Pomeranian" />
                <Picker.Item label="Husky" value="Husky" />
            </Picker>

        </View>
    );
};

export default Puppy;
