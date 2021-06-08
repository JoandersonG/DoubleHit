import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import styles from "./styles";

const LiveMatch = (props) => {
  return (
    <View style={[styles.liveComponent, 
            {backgroundColor: props.matchCategoryColor}]}>
      <Text style={styles.championshipText}>{props.championship}</Text>

      <View style={styles.teams}>
        <Text style={styles.teamText}>{props.houseTeam}</Text>
        <Image
          source={require("../../../src/image/flamengo_logo.png")}
          style={styles.teamLogo}
        />
        <Text style={styles.teamText}> X </Text>
        <Image
          source={require("../../../src/image/fluminense_logo.png")}
          style={styles.teamLogo}
        />
        <Text style={styles.teamText}>{props.guestTeam}</Text>
      </View>

      <View style={styles.teams}>
        <View style={styles.verticalAlign}>
          <Text style={styles.textAposta}>Casa</Text>
          <TouchableOpacity style={styles.buttonAposta}>
            <Text style={styles.buttonApostaText}>
              {props.betProportionHouse}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.verticalAlign}>
          <Text style={styles.textAposta}>Empate</Text>
          <TouchableOpacity style={styles.buttonAposta}>
            <Text style={styles.buttonApostaText}>
              {props.betProportionTie}
            </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.verticalAlign}>
          <Text style={styles.textAposta}>Visitante</Text>
          <TouchableOpacity style={styles.buttonAposta}>
            <Text style={styles.buttonApostaText}>
              {props.betProportionGuest}
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};
export default LiveMatch;
