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
        <Text style={styles.topbarText}>NFL</Text>
      </View>

      <ImageBackground
        source={require("../../../src/image/background_light.png")}
        style={[styles.background]}
      >
        <View style={{ height: "100%", width: "100%" }}>
          <ScrollView style={styles.scrollView}>
            <Image
              source={require("../../../src/image/NFL.jpg")}
              style={styles.banner}
            />
            <View style={styles.gameComponent}>
              <Text style={styles.championshipText}>NFAB</Text>

              <View style={styles.teams}>
                <Text style={styles.teamText}>FlaBasquete </Text>
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
              <Text style={styles.championshipText}>
                Football Champions League Americas
              </Text>

              <View style={styles.teams}>
                <Text style={styles.teamText}>Real Esteli </Text>
                <Image
                  source={require("../../../src/image/basquete_logo1.png")}
                  style={styles.teamLogo}
                />
                <Text style={styles.teamText}> X </Text>
                <Image
                  source={require("../../../src/image/basquete_logo2.png")}
                  style={styles.teamLogo}
                />
                <Text style={styles.teamText}> SESI Franca</Text>
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
              <Text style={styles.championshipText}>
                Football Champions League Americas
              </Text>

              <View style={styles.teams}>
                <Text style={styles.teamText}>Minas </Text>
                <Image
                  source={require("../../../src/image/basquete_logo3.png")}
                  style={styles.teamLogo}
                />
                <Text style={styles.teamText}> X </Text>
                <Image
                  source={require("../../../src/image/basquete_logo4.png")}
                  style={styles.teamLogo}
                />
                <Text style={styles.teamText}> Instituto</Text>
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
