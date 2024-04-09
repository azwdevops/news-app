import { StyleSheet, Text, View } from "react-native";
import BlockCard from "@cards/BlockCard";

import { useNavigation } from "@react-navigation/native";

const FeaturedNews = ({ item }) => {
  const navigation = useNavigation();
  return (
    <BlockCard
      item={item}
      styleProps={{ marginVertical: 15, width: "100%" }}
      onPress={() => navigation.navigate("NewsDetail", { item })}
    ></BlockCard>
  );
};

export default FeaturedNews;

const styles = StyleSheet.create({});
