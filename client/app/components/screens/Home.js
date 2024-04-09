import Screen from "@common/Screen";
import FeaturedNews from "@components/FeaturedNews";
import BreakingNews from "@components/BreakingNews";
import PoliticalNews from "@components/PoliticalNews";
import TechNews from "@components/TechNews";
import EntertainmentNews from "@components/EntertainmentNews";
import useNews from "@/app/hooks/useNews";
import SearchBar from "@components/SearchBar";
import ActivityIndicator from "@common/ActivityIndicator";
import { useState } from "react";

const Home = () => {
  const [isSearchFocussed, setIsSearchFocussed] = useState(false);

  const [
    featuredNews,
    politicalNews,
    breakingNews,
    techNews,
    entertainmentNews,
    loading,
  ] = useNews();

  return (
    <>
      <ActivityIndicator visible={loading} />
      <Screen isSearchFocussed={isSearchFocussed}>
        <SearchBar setIsSearchFocussed={setIsSearchFocussed} />
        <FeaturedNews item={featuredNews} />
        <BreakingNews data={breakingNews} />
        <PoliticalNews data={politicalNews} />
        <TechNews data={techNews} />
        <EntertainmentNews data={entertainmentNews} />
      </Screen>
    </>
  );
};

export default Home;
