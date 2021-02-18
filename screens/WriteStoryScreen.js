import * as React from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  TextInput,
  ToastAndroid,
  KeyboardAvoidingView,
  Keyboard,
  TouchableWithoutFeedback
} from "react-native";

import db from "../config";
import * as firebase from "firebase";

export default class WriteStoryScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      author: "",
      title: "",
      story: "",
    };
  }

  sumbitStory = async () => {
    db.collection("stories").add({
      title: this.state.title,
      author: this.state.author,
      story: this.state.story,
    });

    ToastAndroid.show("Story created sucessfully.", ToastAndroid.SHORT);
    this.setState({
      author: "",
      title: "",
      story: "",
    });
     
  };
  render() {
    return (
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <KeyboardAvoidingView
        style={styles.container}
        behavior={Platform.OS === "android" ? "padding" : "height"}
        enabled
      >
      <View style={styles.container}>
        <View>
          <Image
            source={require("../assets/write.png")}
            style={{ width: 100, height: 100, alignSelf: "center" }}
          />
          <Text style={{ textAlign: "center", fontSize: 30 }}>
            Write your story
          </Text>
        </View>

        <TextInput
          style={styles.StoryTitleBox}
          placeholder={"Story Title"}
          value={this.state.title}
          onChangeText={(text) => {
            this.setState({ title: text });
          }}
        />
        <TextInput
          style={styles.StoryAuthorBox}
          placeholder={"Author"}
          value={this.state.author}
          onChangeText={(text) => {
            this.setState({ author: text });
          }}
        />
        <TextInput
          style={styles.WriteStoryBox}
          placeholder={"Write your story...."}
          multiline={true}
          value={this.state.story}
          onChangeText={(text) => {
            this.setState({ story: text });
          }}
        />

        <TouchableOpacity
          style={styles.SubmitButton}
          onPress={this.sumbitStory}
        >
          <Text style={{ fontWeight: "bold" }}>Submit</Text>
        </TouchableOpacity>
      </View>
      </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 400,
  },
  displayText: {
    fontSize: 15,
    textDecorationLine: "underline",
  },
  SubmitButton: {
    backgroundColor: "yellow",
    width: 60,
    borderWidth: 1.5,
    //marginTop: 500,
    alignSelf: "center",
    textAlign: "center",
  },
  buttonText: {
    textAlign: "center",
    fontSize: 15,
    //marginTop: 10,
  },
  inputView: {
    flexDirection: "row",
    margin: 20,
  },
  StoryTitleBox: {
    width: 200,
    height: 40,
    borderWidth: 1.5,
    fontSize: 20,
    alignSelf: "center",
    //marginTop: 20,
  },

  StoryAuthorBox: {
    width: 200,
    height: 40,
    borderWidth: 1.5,
    fontSize: 20,
    alignSelf: "center",
    //marginTop: 20,
  },

  WriteStoryBox: {
    width: 300,
    height: 200,
    borderWidth: 1.5,
    fontSize: 20,
    alignSelf: "center",
    // marginTop: 20,
  },
});
