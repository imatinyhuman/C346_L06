
import React, {useState} from 'react';
import {Text, ScrollView, Button, ToastAndroid} from 'react-native';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import Puppy from './components/puppy';

const PuppyQuiz = () => {

    const [Breed1, setBreed1] = useState('');
    const [Breed2, setBreed2] = useState('');
    const [Breed3, setBreed3] = useState('');
    const [score, setScore] = useState(0);

    return (
        <ScrollView>
            <Text></Text>
            <Text>
                <FontAwesome6 name="dog" size={20} color="black" />
                {' '}DogBreed Quiz
            </Text>

            <Puppy
                question="Question 1: What dog breed is this?"
                picture={{uri: "https://www.akc.org/wp-content/uploads/2017/11/Siberian-Husky-standing-outdoors-in-the-winter.jpg"}}
                setBreed={setBreed1}
            />

            <Puppy
                question="Question 2: What dog breed is this?"
                picture={{uri: "https://www.akc.org/wp-content/uploads/2020/07/Golden-Retriever-puppy-standing-outdoors.jpg"}}
                setBreed={setBreed2}
            />

            <Puppy
                question="Question 3: What dog breed is this?"
                picture={{uri: "https://cdn.britannica.com/41/233841-050-4FFECCF1/Pomeranian-dog.jpg"}}
                setBreed={setBreed3}
            />

            <Button
                title="Submit"
                onPress={() => {

                    let marks = 0;

                    if (Breed1 == 'Husky') {
                        marks = marks + 1;
                    }

                    if (Breed2 == 'Golden Retriever') {
                        marks = marks + 1;
                    }

                    if (Breed3 == 'Pomeranian') {
                        marks = marks + 1;
                    }

                    setScore(marks);

                    let mymessage = 'Your Score: ' + marks + '/3  Try Again!';

                    if (marks == 3) {
                        mymessage = 'Good Job! Your Score: 3/3';
                    }

                    ToastAndroid.show(mymessage, ToastAndroid.SHORT);
                }}
            />

            <Text>Score: {score}/3</Text>

        </ScrollView>
    );
};

export default PuppyQuiz;
