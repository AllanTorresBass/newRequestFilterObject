import { StatusBar } from "expo-status-bar";
import { useState } from "react";
import { StyleSheet, Text, View, Button, TouchableOpacity } from "react-native";
import { obj } from "./arbol.js";
import { returnKeys } from "./utilities";

export default function App() {
  const [increase, setIncrease] = useState(0);
  //control Which Object To Loop
  const [controlWOTL, setControlWOTL] = useState(0);
  const [nextObj, setNextObj] = useState();
  const [selectObj, setSelectObj] = useState();

  let current;
  let next;
  let data;
  let newObj;
  if (controlWOTL === 0) {
    current = returnKeys(obj).next;

    data = returnKeys(obj).data;
    newObj = returnKeys(obj).firstObj;
  }
  if (controlWOTL === 1) {
    current = returnKeys(nextObj).current;
    next = returnKeys(nextObj).next;
    data = returnKeys(nextObj).data;
    newObj = returnKeys(nextObj).newObj;
  }
  return (
    <View style={styles.container}>
      <View>
        <Text style={{ fontSize: 25 }}>id: {data.id}</Text>
        <Text style={{ fontSize: 25 }}>
          parent: {data.parent === undefined ? "Vacio" : data.parent}
        </Text>
        <Text style={{ fontSize: 25 }}>
          navigationText: {data.navigationText}
        </Text>
        <Text style={{ fontSize: 25 }}>type: {data.type}</Text>
      </View>
      <View style={{ top: 50 }}>
        <TouchableOpacity
          style={{ left: 50 }}
          onPress={() => {
            setControlWOTL(0);
          }}
        >
          <Text>Back</Text>
        </TouchableOpacity>
        {current.map((e, i) => (
          <TouchableOpacity
            style={{
              left: 20,
              top: 20,
              width: 200,
              height: 50,
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
            }}
            onPress={() => {
              setSelectObj(newObj[i]);
            }}
            key={"e" + i}
          >
            <Text style={{ fontSize: 20 }}>{e}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity
          style={{ left: 50, top: 20 }}
          onPress={() => {
            setControlWOTL(1);
            setNextObj(selectObj);
          }}
        >
          <Text> {data.navigationText}</Text>
        </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    top: 40,
  },
});
