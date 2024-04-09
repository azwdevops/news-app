import { StyleSheet, StatusBar, ScrollView } from "react-native";

const Screen = ({ children, isSearchFocussed }) => {
  const keyboardShouldPersistTaps = isSearchFocussed ? "always" : "never";

  return (
    <ScrollView
      keyboardShouldPersistTaps={keyboardShouldPersistTaps}
      scrollEnabled={!isSearchFocussed}
      style={styles.container}
    >
      {children}
    </ScrollView>
  );
};

export default Screen;

const styles = StyleSheet.create({
  container: {
    marginTop: StatusBar.currentHeight,
    paddingHorizontal: 15,
    backgroundColor: "#f7f3f3",
    flex: 1,
  },
});
