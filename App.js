import { StatusBar } from "expo-status-bar";
import { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Button,
  TouchableOpacity,
  ScrollView,
  Alert,
} from "react-native";
import { obj } from "./arbol.js";
import { returnKeys } from "./utilities";
import { AntDesign } from "@expo/vector-icons";
export default function App() {
  const [increase, setIncrease] = useState(0);
  //control Which Object To Loop
  const [controlWOTL, setControlWOTL] = useState(0);
  const [controlButton, setControlButton] = useState(0);
  const [nextObj, setNextObj] = useState();
  const [selectObj, setSelectObj] = useState();
  const [locationButton, setLocationButton] = useState();
  const [textNav, setTextNav] = useState();
  const [recordNavLocation, setRecordNavLocation] = useState();
  const [recordNav, setRecordNav] = useState([]);
  const [recordObj, setRecordObj] = useState([]);

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

  useEffect(() => {
    // console.log(recordNav.filter((e, i) => i <= recordNavLocation));
    setRecordNav(recordNav.filter((e, i) => i <= recordNavLocation));
    setNextObj(recordObj[recordNavLocation]);

    setLocationButton(-1);
  }, [recordNavLocation]);

  return (
    <View style={styles.container}>
      {/* <View>
        <Text style={{ fontSize: 25 }}>id: {data.id}</Text>
        <Text style={{ fontSize: 25 }}>
          parent: {data.parent === undefined ? "Vacio" : data.parent}
        </Text>
        <Text style={{ fontSize: 25 }}>
          navigationText: {data.navigationText}
        </Text>
        <Text style={{ fontSize: 25 }}>type: {data.type}</Text>
      </View> */}
      <Text>{"\n "}</Text>
      <View
        style={{
          flexDirection: "row",
          width: "100%",
          height: 20,
        }}
      >
        <TouchableOpacity
          style={{
            width: 200,
            height: 50,
          }}
          onPress={() => {
            console.log("recordObj.length: ", recordObj.length);
            if (recordObj.length > 1) {
              setRecordNav(
                recordNav.filter((e, i) => i < recordNav.length - 1)
              );
              setNextObj(() => recordObj[recordObj.length - 2]);
              setRecordObj(
                recordObj.filter((e, i) => i < recordNav.length - 1)
              );
              setLocationButton(-1);
            } else if (recordObj.length === 1) {
              setRecordNavLocation(-1);
              setLocationButton(-1);
              setControlWOTL(0);
              setControlButton(0);
              setRecordNav([]);
            }
          }}
        >
          <AntDesign name="left" size={24} color="black" />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            width: 200,
            height: 50,
          }}
          onPress={() => {
            setRecordNavLocation(-1);
            setLocationButton(-1);
            setControlWOTL(0);
            setControlButton(0);
            setRecordNav([]);
          }}
        >
          <AntDesign
            name="close"
            size={24}
            color="black"
            style={{ left: 145 }}
          />
        </TouchableOpacity>
      </View>
      <Text>{"\n\n\n  "}</Text>
      <ScrollView
        horizontal={true}
        style={{ height: 30 }}
        contentContainerStyle={{ alignItems: "left" }}
      >
        <TouchableOpacity
          onPress={() => {
            setRecordNavLocation(-1);
            setLocationButton(-1);
            setControlWOTL(0);
            setControlButton(0);
            setRecordNav([]);
          }}
        >
          <Text style={{ fontSize: 17 }}> New Request {"/"} </Text>
        </TouchableOpacity>
        {recordNav.map((e, i) => {
          return (
            <TouchableOpacity
              key={"scroll" + i}
              onPress={() => {
                setRecordNavLocation(i);
                setControlButton(0);
              }}
            >
              <Text style={{ fontSize: 17 }} key={"scrollText" + i}>
                {" "}
                {e} {"/"}{" "}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
      <ScrollView style={{ height: 1000, left: 30 }}>
        <View>
          {current?.map((e, i) => {
            if (e === "Message") {
              return (
                <View style={{ width: "80%" }}>
                  <Text>{data.text.toString()}</Text>
                </View>
              );
            } else if (e === "Submit") {
              return (
                <View style={{ width: "80%" }}>
                  <Text>Form</Text>
                </View>
              );
            } else if (e === "Equipment_List") {
              return (
                <View style={{ width: "80%" }}>
                  <Text>Equipment List</Text>
                </View>
              );
            } else {
              return (
                <>
                  <TouchableOpacity
                    style={{
                      left: 0,
                      top: 20,
                      width: 300,
                      height: 50,
                      borderColor: "black",
                      borderWidth: 1,
                      borderRadius: 10,
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor:
                        locationButton === i ? "#2D7BB4" : "white",
                    }}
                    onPress={() => {
                      setLocationButton(i);
                      setSelectObj(newObj[i]);
                      setTextNav(e);
                      setControlButton(1);
                    }}
                    key={"e" + i}
                  >
                    <Text
                      style={{
                        fontSize: 20,
                        color: locationButton === i ? "white" : "black",
                      }}
                    >
                      {e}
                    </Text>
                  </TouchableOpacity>
                  <Text key={"ex" + i}>{"\n "}</Text>
                </>
              );
            }
          })}
          <TouchableOpacity
            style={{
              top: 20,
              left: 0,
              top: 20,
              width: 300,
              height: 50,
              borderColor: "black",
              borderWidth: 1,
              borderRadius: 10,
              alignItems: "center",
              justifyContent: "center",
              backgroundColor:
                controlButton === 1 || data.navigationText === "Finish"
                  ? "#2D7BB4"
                  : "gray",
            }}
            onPress={() => {
              if (data.navigationText !== "Finish") {
                if (controlButton === 1) {
                  setControlWOTL(1);
                  setNextObj(selectObj);
                  setLocationButton(-1);
                  setRecordNav([...recordNav, textNav]);
                  setRecordObj([...recordObj, selectObj]);
                  setControlButton(0);
                } else {
                  Alert.alert("Must to select an option");
                }
              } else {
                setRecordNavLocation(-1);
                setLocationButton(-1);
                setControlWOTL(0);
                setControlButton(0);
                setRecordNav([]);
              }
            }}
          >
            <Text style={{ color: "white", fontSize: 25, fontWeight: "bold" }}>
              {" "}
              {data.navigationText}
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",

    top: 40,
  },
});
