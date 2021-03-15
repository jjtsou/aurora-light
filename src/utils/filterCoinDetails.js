import {
  filterSocialMedia,
  filterGithubStatistics,
  filterMarketData,
  filterPriceChange,
} from './coinDetails';

export const filterCoinDetails = ({
  data: {
    name,
    description: { en: coinDescription },
    image: { large },
    links,
    community_data,
    developer_data,
    sentiment_votes_up_percentage: reputationUpVotesPercentage,
    sentiment_votes_down_percentage: reputationDownVotesPercentage,
    market_data,
  },
}) => {
  const socialMedia = filterSocialMedia(links, community_data);
  const github = filterGithubStatistics(links, developer_data);
  const markets = filterMarketData(market_data);
  const priceChange = filterPriceChange(market_data);

  return {
    name,
    coinDescription,
    image: large,
    socialMedia,
    github,
    reputationUpVotesPercentage,
    reputationDownVotesPercentage,
    markets,
    priceChange,
  };
};
