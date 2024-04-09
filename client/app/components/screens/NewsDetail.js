import { getNewsByCategory, getSingleNews } from "@/app/api/newsAPI";
import { useEffect, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  View,
  Dimensions,
} from "react-native";
import HorizontalList from "@lists/HorizontalList";
import Close from "@common/Close";
import { useNavigation } from "@react-navigation/native";
import ActivityIndicator from "@common/ActivityIndicator";

const NewsDetail = ({ route }) => {
  const { id: postId, category: postCategory } = route.params.item;

  const navigation = useNavigation();

  const [news, setNews] = useState({});
  const [relatedNews, setRelatedNews] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchNews = async () => {
      setLoading(true);
      const result = await getSingleNews(postId);
      setNews(result);
    };
    const fetchRelatedPosts = async () => {
      const result = await getNewsByCategory(postCategory, 6);
      setRelatedNews(result.filter((item) => item.id !== postId));
    };
    fetchNews();
    fetchRelatedPosts();
    setLoading(false);
  }, []);

  return (
    <>
      <ActivityIndicator visible={loading} />
      <ScrollView style={styles.container}>
        <Image style={styles.image} source={{ uri: news.thumbnail }} />
        <View style={styles.contentContainer}>
          <Text style={styles.title}>{news.title}</Text>
          <Text style={styles.content}>{news.content}</Text>
        </View>
        <View style={styles.relatedPostsContainer}>
          <HorizontalList data={relatedNews} title="Related Posts" />
        </View>
      </ScrollView>
      <Close onPress={() => navigation.popToTop()} />
    </>
  );
};

export default NewsDetail;

const styles = StyleSheet.create({
  container: {},
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").height / 3,
  },
  contentContainer: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  content: {
    fontSize: 16,
    color: "#4e4d4d",
  },
  relatedPostsContainer: {
    padding: 10,
  },
});
