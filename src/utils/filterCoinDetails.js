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
  const {
    homepage,
    official_forum_url,
    subreddit_url: subredditUrl,
    twitter_screen_name,
    repos_url,
  } = links;
  const homepageUrl = homepage.find((url) => !!url);
  const forumUrl = official_forum_url.find((url) => !!url);
  const twitterProfileUrl =
    twitter_screen_name && `https://twitter.com/${twitter_screen_name}`;
  const { github } = repos_url;
  const githubUrl = github?.find((url) => !!url) ?? '';

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
      period: '1 day',
      price: price_change_percentage_24h,
    },
    {
      period: '7 days',
      price: price_change_percentage_7d,
    },
    {
      period: '14 days',
      price: price_change_percentage_14d,
    },
    {
      period: '30 days',
      price: price_change_percentage_30d,
    },
    {
      period: '60 days',
      price: price_change_percentage_60d,
    },
    {
      period: '200 days',
      price: price_change_percentage_200d,
    },

    {
      period: '1 year',
      price: price_change_percentage_1y,
    },
  ];
  return {
    name,
    coinDescription,
    image: large,
    links: {
      homepageUrl,
      forumUrl,
      githubUrl,
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
    markets: [
      { label: 'Current Price', value: currentPrice },
      { label: 'High Price (24h)', value: highPrice24h },
      { label: 'Low Price (24h)', value: lowPrice24h },
      {
        label: 'Highest Price',
        value: highestPrice,
        date: new Date(highestPriceDate).toLocaleDateString(),
      },
      {
        label: 'Lowest Price',
        value: lowestPrice,
        date: new Date(lowestPriceDate).toLocaleDateString(),
      },
    ],
    priceChange,
  };
};
