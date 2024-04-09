import { StyleSheet, Text, View } from "react-native";
import HorizontalList from "@lists/HorizontalList";

const TechNews = ({ data }) => {
  return <HorizontalList title="Tech News" data={data} />;
};

export default TechNews;

const styles = StyleSheet.create({});
