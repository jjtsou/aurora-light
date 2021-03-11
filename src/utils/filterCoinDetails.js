export const filterCoinDetails = ({
  data: {
    description: { en: coinDescription },
    links,
    community_data,
    developer_data,
    sentiment_votes_up_percentage: reputationUpVotesPercentage,
    sentiment_votes_down_percentage: reputationDownVotesPercentage,
    market_data,
  },
}) => {
  const {
    homepage,
    official_forum_url,
    subreddit_url: subredditUrl,
    twitter_screen_name,
  } = links;
  const homepageUrl = homepage.find((url) => !!url);
  const forumUrl = official_forum_url.find((url) => !!url);
  const twitterProfileUrl =
    twitter_screen_name && `https://twitter.com/${twitter_screen_name}`;

  const {
    twitter_followers: twitterFollowers,
    reddit_subscribers: redditSubscribers,
  } = community_data;

  const {
    forks,
    stars,
    subscribers,
    total_issues: totalIssues,
  } = developer_data;

  const {
    current_price: { usd: currentPrice },
    price_change_percentage_24h,
    price_change_percentage_7d,
    price_change_percentage_14d,
    price_change_percentage_30d,
    price_change_percentage_60d,
    price_change_percentage_200d,
    price_change_percentage_1y,
    high_24h: { usd: highPrice24h },
    low_24h: { usd: lowPrice24h },
    ath: { usd: highestPrice },
    ath_date: { usd: highestPriceDate },
    atl: { usd: lowestPrice },
    atl_date: { usd: lowestPriceDate },
  } = market_data;

  const priceChange = [
    {
      period: '1d',
      price: price_change_percentage_24h,
    },
    {
      period: '7d',
      price: price_change_percentage_7d,
    },
    {
      period: '14d',
      price: price_change_percentage_14d,
    },
    {
      period: '30d',
      price: price_change_percentage_30d,
    },
    {
      period: '60d',
      price: price_change_percentage_60d,
    },
    {
      period: '200d',
      price: price_change_percentage_200d,
    },

    {
      period: '1y',
      price: price_change_percentage_1y,
    },
  ];
  return {
    coinDescription,
    links: {
      homepageUrl,
      forumUrl,
    },
    socialMedia: {
      twitterProfileUrl,
      subredditUrl,
      twitterFollowers,
      redditSubscribers,
    },
    github: {
      forks,
      stars,
      subscribers,
      totalIssues,
    },
    reputationUpVotesPercentage,
    reputationDownVotesPercentage,
    market: {
      currentPrice,
      priceChange,
      highPrice24h,
      lowPrice24h,
      highestPrice,
      highestPriceDate,
      lowestPrice,
      lowestPriceDate,
    },
  };
};
