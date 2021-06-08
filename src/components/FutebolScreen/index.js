import "react-native-gesture-handler";
import React, { Component } from "react";
import {
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  ImageBackground,
} from "react-native";
import styles from "./styles";

const CategoryScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={styles.topbar}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => {
            navigation.navigate("Home");
          }}
        >
          <Text style={styles.backButtonText}>{"<"}</Text>
        </TouchableOpacity>
        <Text style={styles.topbarText}>Futebol</Text>
      </View>

      <ImageBackground
        source={require("../../../src/image/background_light.png")}
        style={[styles.background]}
      >
        <View style={{ height: "100%", width: "100%" }}>
          <ScrollView style={styles.scrollView}>
            <Image
              source={require("../../../src/image/futebol.jpg")}
              style={styles.banner}
            />
            <View style={styles.gameComponent}>
              <Text style={styles.championshipText}>Campeonato Brasileiro</Text>

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

            <View style={[styles.gameComponent]}>
              <Text style={styles.championshipText}>UEFA EURO 2021</Text>

              <View style={styles.teams}>
                <Text style={styles.teamText}>Turquia </Text>
                <Image
                  source={require("../../../src/image/futebol_logo1.png")}
                  style={styles.teamLogo}
                />
                <Text style={styles.teamText}> X </Text>
                <Image
                  source={require("../../../src/image/futebol_logo2.png")}
                  style={styles.teamLogo}
                />
                <Text style={styles.teamText}> Itália</Text>
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

            <View style={[styles.gameComponent]}>
              <Text style={styles.championshipText}>UEFA EURO 2021</Text>

              <View style={styles.teams}>
                <Text style={styles.teamText}>Bélgica </Text>
                <Image
                  source={require("../../../src/image/futebol_logo3.png")}
                  style={styles.teamLogo}
                />
                <Text style={styles.teamText}> X </Text>
                <Image
                  source={require("../../../src/image/futebol_logo4.png")}
                  style={styles.teamLogo}
                />
                <Text style={styles.teamText}> Rússia</Text>
              </View>

              <View style={styles.teams}>
                <View style={styles.verticalAlign}>
                  <Text style={styles.textAposta}>Casa</Text>
                  <TouchableOpacity style={styles.buttonAposta}>
                    <Text style={styles.buttonApostaText}>3.2</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.verticalAlign}>
                  <Text style={styles.textAposta}>Empate</Text>
                  <TouchableOpacity style={styles.buttonAposta}>
                    <Text style={styles.buttonApostaText}>2.5</Text>
                  </TouchableOpacity>
                </View>

                <View style={styles.verticalAlign}>
                  <Text style={styles.textAposta}>Visitante</Text>
                  <TouchableOpacity style={styles.buttonAposta}>
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
