import React, { useState, useEffect, useCallback } from "react";
import { View, Image, Text } from "react-native";
import { RectButton } from "react-native-gesture-handler";
import { useNavigation, useFocusEffect } from "@react-navigation/native";

import landingImg from "../../assets/images/landing.png";
import studyIcon from "../../assets/images/icons/study.png";
import giveClassesIcon from "../../assets/images/icons/give-classes.png";
import heartIcon from "../../assets/images/icons/heart.png";

import styles from "./styles";
import api from "../../services/api";

function Landing() {
  const { navigate } = useNavigation();

  const [totalConnections, setTotalConnections] = useState(0);

  /* Vai ser disparado assim que o componente for exibido em tela. 
   Recebe uma função que será disparada e um array indicando quando
   ela será disparada. Caso o array esteja vazio, ela será disparada
   uma vez só no começo do componente. Caso tenha alguma váriavel,
   toda vez que ela mudar, a função é disparada. */
  useFocusEffect(
    useCallback(() => {
      api.get("connections").then((response) => {
        const { total } = response.data;

        setTotalConnections(total);
      });
    }, [])
  );

  function handleNavigateToGiveClasses() {
    navigate("GiveClasses");
  }

  function handleNavigateToStudyPages() {
    navigate("Study");
  }

  return (
    <View style={styles.container}>
      <Image source={landingImg} style={styles.banner} />
      <Text style={styles.title}>
        Seja bem-vindo, {"\n"}
        <Text style={styles.titleBold}>O que deseja fazer?</Text>
      </Text>

      <View style={styles.buttonsContainer}>
        <RectButton
          onPress={handleNavigateToStudyPages}
          style={[styles.button, styles.buttonPrimary]}
        >
          <Image source={studyIcon} />

          <Text style={styles.buttonText}>Estudar</Text>
        </RectButton>

        <RectButton
          onPress={handleNavigateToGiveClasses}
          style={[styles.button, styles.buttonSecondary]}
        >
          <Image source={giveClassesIcon} />

          <Text style={styles.buttonText}>Dar aulas</Text>
        </RectButton>
      </View>

      <View style={styles.totalConnectionsContainer}>
        <Text style={styles.totalConnections}>
          Total de {totalConnections} conexões já realizadas{" "}
          <Image source={heartIcon} />
        </Text>
      </View>
    </View>
  );
}

export default Landing;
