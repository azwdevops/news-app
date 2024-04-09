import { StyleSheet, Text, View } from "react-native";
import HorizontalList from "@lists/HorizontalList";

const BreakingNews = ({ data }) => {
  return <HorizontalList title="Breaking News" data={data} />;
};

export default BreakingNews;

const styles = StyleSheet.create({});
