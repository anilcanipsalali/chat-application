import { View, TextInput, StyleSheet, SafeAreaView } from 'react-native'
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { useState } from 'react';

const InputBox = () => {
  const [text, setText] = useState('');
  const [files, setFiles] = useState([]);
  const [progresses, setProgresses] = useState({});

  const onSend = () => {
    console.warn('Sending a new message: ', text);
    setText('');
  }

  return (
    <>
      {files.length > 0 && (
        <View style={styles.attachmentsContainer}>
          <FlatList
            data={files}
            horizontal
            renderItem={({ item }) => (
              <>
                <Image
                  source={{ uri: item.uri }}
                  style={styles.selectedImage}
                  resizeMode="contain"
                />

                {progresses[item.uri] && (
                  <View
                    style={{
                      position: "absolute",
                      top: "50%",
                      left: "50%",
                      backgroundColor: "#8c8c8cAA",
                      padding: 5,
                      borderRadius: 50,
                    }}
                  >
                    <Text style={{ color: "white", fontWeight: "bold" }}>
                      {(progresses[item.uri] * 100).toFixed(0)} %
                    </Text>
                  </View>
                )}

                <MaterialIcons
                  name="highlight-remove"
                  onPress={() =>
                    setFiles((existingFiles) =>
                      existingFiles.filter((file) => file !== item)
                    )
                  }
                  size={20}
                  color="gray"
                  style={styles.removeSelectedImage}
                />
              </>
            )}
          />
        </View>
      )}
      <SafeAreaView edges={["bottom"]} style={styles.container}>
        <AntDesign
          onPress={""}
          name="plus"
          size={20}
          color="royalblue"
        />
        <TextInput
          value={text}
          onChangeText={setText}
          style={styles.input}
          placeholder="Type your message..."
        />
        <MaterialIcons
          onPress={onSend}
          style={styles.send}
          name="send"
          size={16}
          color="white"
        />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    backgroundColor: "whitesmoke",
    padding: 5,
    paddingHorizontal: 10,
    alignItems: "center",
  },
  input: {
    flex: 1,
    backgroundColor: "white",
    padding: 5,
    paddingHorizontal: 10,
    marginHorizontal: 10,

    borderRadius: 50,
    borderColor: "lightgray",
    borderWidth: StyleSheet.hairlineWidth,
  },
  send: {
    backgroundColor: "royalblue",
    padding: 7,
    borderRadius: 15,
    overflow: "hidden",
  },
  attachmentsContainer: {
    alignItems: "flex-end",
  },
  selectedImage: {
    height: 100,
    width: 200,
    margin: 5,
  },
  removeSelectedImage: {
    position: "absolute",
    right: 10,
    backgroundColor: "white",
    borderRadius: 10,
    overflow: "hidden",
  },
});

export default InputBox