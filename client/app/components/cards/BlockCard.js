import {
  Image,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
} from "react-native";
import React from "react";
import SubTitle from "@common/SubTitle";
import Title from "@common/Title";

const BlockCard = ({ styleProps, imageStyleProps, item, onPress }) => {
  const { thumbnail, title, desc: subtitle } = item;
  return (
    <TouchableWithoutFeedback onPress={onPress}>
      <View style={[styles.container, styleProps]}>
        <Image
          source={{ uri: thumbnail }}
          style={[styles.image, imageStyleProps]}
        />
        <View style={styles.contentContainer}>
          <Title>{title}</Title>
          <SubTitle>{subtitle}</SubTitle>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default BlockCard;

const styles = StyleSheet.create({
  container: {
    width: 200,
    marginRight: 30,
    maxWidth: "100%",
    height: 250,
    borderRadius: 8,
    overflow: "hidden",
    backgroundColor: "#fff",
  },
  image: {
    width: "100%",
    height: 200,
  },
  contentContainer: {
    padding: 5,
  },
});
