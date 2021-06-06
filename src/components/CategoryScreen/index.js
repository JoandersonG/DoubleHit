import "react-native-gesture-handler";
import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ScrollView,
  ImageBackground,
} from "react-native";
import styles from "./styles";

const CategoryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <Text style={styles.topbarText}>Basquete</Text>
      </View>

      <ImageBackground
        source={require("../../../src/image/background_light.png")}
        style={[styles.background]}
      >
        <View style={{ height: '100%', width: "100%" }}>
          <ScrollView style={styles.scrollView}>
            <Image
              source={require("../../../src/image/basquete.png")}
              style={styles.banner}
            />
            <View style={styles.gameComponent}>
              <Text style={styles.championshipText}>Campeonato carioca</Text>

              <View style={styles.teams}>
                <Text style={styles.teamText}>Flamengo </Text>
                <Image
                  source={require("../../../src/image/flamengo_logo.png")}
                  style={styles.teamLogo}
                />
                <Text style={styles.teamText}> X </Text>
                <Image
                  source={require("../../../src/image/fluminense_logo.png")}
                  style={styles.teamLogo}
                />
                <Text style={styles.teamText}> Fluminense</Text>
              </View>

              <View style={styles.teams}>
                <View style={styles.verticalAlign}>
                  <Text style={styles.textAposta}>Casa</Text>
                  <TouchableOpacity
                    style={styles.buttonAposta}
                    onPress={() => {
                      navigation.navigate("Home");
                    }}
                  >
                    <Text style={styles.buttonApostaText}>3.2</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.verticalAlign}>
                  <Text style={styles.textAposta}>Empate</Text>
                  <TouchableOpacity
                    style={styles.buttonAposta}
                    onPress={() => {
                      navigation.navigate("Home");
                    }}
                  >
                    <Text style={styles.buttonApostaText}>2.5</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.verticalAlign}>
                  <Text style={styles.textAposta}>Visitante</Text>
                  <TouchableOpacity
                    style={styles.buttonAposta}
                    onPress={() => {
                      navigation.navigate("Home");
                    }}
                  >
                    <Text style={styles.buttonApostaText}>7.0</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View
              style={[styles.gameComponent]}
            >
              <Text style={styles.championshipText}>Campeonato carioca</Text>

              <View style={styles.teams}>
                <Text style={styles.teamText}>Flamengo </Text>
                <Image
                  source={require("../../../src/image/flamengo_logo.png")}
                  style={styles.teamLogo}
                />
                <Text style={styles.teamText}> X </Text>
                <Image
                  source={require("../../../src/image/fluminense_logo.png")}
                  style={styles.teamLogo}
                />
                <Text style={styles.teamText}> Fluminense</Text>
              </View>

              <View style={styles.teams}>
                <View style={styles.verticalAlign}>
                  <Text style={styles.textAposta}>Casa</Text>
                  <TouchableOpacity
                    style={styles.buttonAposta}
                    onPress={() => {
                      navigation.navigate("Home");
                    }}
                  >
                    <Text style={styles.buttonApostaText}>3.2</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.verticalAlign}>
                  <Text style={styles.textAposta}>Empate</Text>
                  <TouchableOpacity
                    style={styles.buttonAposta}
                    onPress={() => {
                      navigation.navigate("Home");
                    }}
                  >
                    <Text style={styles.buttonApostaText}>2.5</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.verticalAlign}>
                  <Text style={styles.textAposta}>Visitante</Text>
                  <TouchableOpacity
                    style={styles.buttonAposta}
                    onPress={() => {
                      navigation.navigate("Home");
                    }}
                  >
                    <Text style={styles.buttonApostaText}>7.0</Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </ImageBackground>
    </View>
  );
};
export default CategoryScreen;
