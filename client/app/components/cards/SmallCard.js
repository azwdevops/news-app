import { Dimensions, StyleSheet, Text, View } from "react-native";
import React from "react";
import BlockCard from "./BlockCard";
import ViewMore from "./ViewMore";
import { getNewsByCategory } from "@/app/api/newsAPI";
import { useNavigation } from "@react-navigation/native";

const SmallCard = ({ item, onPress }) => {
  const navigation = useNavigation();

  const handleViewMore = async (category) => {
    const result = await getNewsByCategory(category);
    navigation.navigate("NewsList", result);
  };

  if (item.type === "viewMore") {
    return (
      <ViewMore
        style={styles.viewMore}
        onPress={() => handleViewMore(item.category)}
      />
    );
  }

  return (
    <BlockCard
      onPress={onPress}
      style={styles.container}
      imageStyleProps={styles.image}
      item={item}
    />
  );
};

export default SmallCard;

const styles = StyleSheet.create({
  container: {
    width: Dimensions.get("window").width / 2,
    marginRight: 15,
    height: 200,
  },
  image: {
    height: 100,
  },
  viewMore: {
    width: Dimensions.get("window").width / 2,
    height: 200,
  },
});
