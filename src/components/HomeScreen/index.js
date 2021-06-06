import "react-native-gesture-handler";
import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  Alert,
  ImageBackground,
  ScrollView,
} from "react-native";
import styles from "./styles";

const HomeScreen = ({ navigation }) => {
  const email = navigation.getParam("email");

  return (
    <View style={styles.container}>
      {/* TopBar */}

      <View style={styles.topbar}>
        <Image
          source={require("../../../src/image/laid_logo.png")}
          style={styles.logo}
        />
      </View>

      <ImageBackground
        source={require("../../../src/image/background_light.png")}
        style={[styles.background]}
      >
        <View style={{ height: 220, width: "100%" }}>
          <Text style={styles.liveText}>Ao Vivo</Text>
          <ScrollView horizontal={true} style={styles.scrollView}>
            <View style={styles.liveComponent}>
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
              style={[styles.liveComponent, { backgroundColor: "#0c0c0c" }]}
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

        {/* cateogory Buttons */}
        <View style={{ backgroundColor: "white", paddingBottom: 20, height: '70%' }}>
          
          <View style={{ flexDirection: "row", justifyContent: 'center', marginTop: 25 }}>
            <TouchableOpacity
              style={styles.buttonCategory}
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <Text style={styles.buttonCategoryText}>Futebol</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.buttonCategory, {backgroundColor: '#c837abc3'}]}
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <Text style={styles.buttonCategoryText}>Basquete</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", justifyContent: 'center', marginTop: 25 }}>
            <TouchableOpacity
              style={[styles.buttonCategory, {backgroundColor: '#000080ce'}]}
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <Text style={styles.buttonCategoryText}>NFL</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.buttonCategory, {backgroundColor: '#1a1a1ad8'}]}
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <Text style={styles.buttonCategoryText}>CS:GO</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", justifyContent: 'center', marginTop: 25 }}>
            <TouchableOpacity
              style={[styles.buttonCategory, {backgroundColor: '#d40000d5'}]}
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <Text style={styles.buttonCategoryText}>Valorant</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.buttonCategory, {backgroundColor: '#ffa500db'}]}
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <Text style={styles.buttonCategoryText}>Vôlei</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", justifyContent: 'center', marginTop: 25 }}>
            <TouchableOpacity
              style={[styles.buttonCategory, {backgroundColor: '#d4aaa0d5'}]}
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <Text style={styles.buttonCategoryText}>Handebol</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.buttonCategory, {backgroundColor: '#552200cd'}]}
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <Text style={styles.buttonCategoryText}>Baseball</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", justifyContent: 'center', marginTop: 25 }}>
            <TouchableOpacity
              style={[styles.buttonCategory, {backgroundColor: '#ff6600ce'}]}
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <Text style={styles.buttonCategoryText}>Hearthstone</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.buttonCategory, {backgroundColor: '#ff2a2adb'}]}
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <Text style={styles.buttonCategoryText}>MOBA</Text>
            </TouchableOpacity>
          </View>

          <View style={{ flexDirection: "row", justifyContent: 'center', marginTop: 25 }}>
            <TouchableOpacity
              style={[styles.buttonCategory, {backgroundColor: '#7137c8db'}]}
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <Text style={styles.buttonCategoryText}>Atletismo</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={[styles.buttonCategory, {backgroundColor: '#37abc8db'}]}
              onPress={() => {
                navigation.navigate("Home");
              }}
            >
              <Text style={styles.buttonCategoryText}>NHL</Text>
            </TouchableOpacity>
          </View>
        </View>

      </ImageBackground>
    </View>
  );
};
export default HomeScreen;
