import { StyleSheet, Text, View } from "react-native";
import React from "react";
import FlatCard from "./FlatCard";
import ViewMore from "./ViewMore";
import { useNavigation } from "@react-navigation/native";
import { getNewsByCategory } from "@/app/api/newsAPI";

const VerticalCard = ({ item, onPress }) => {
  const navigation = useNavigation();

  const handleViewMore = async (category) => {
    const result = await getNewsByCategory(category);
    navigation.navigate("NewsList", result);
  };

  if (item.type === "viewMore") {
    return <ViewMore onPress={() => handleViewMore(item.category)} />;
  }
  return <FlatCard onPress={onPress} item={item} />;
};

export default VerticalCard;

const styles = StyleSheet.create({});
