import styled from "styled-components";

const MarketStats = ({ coins }) => {
  const getTotalMarketCap = () => {
    return coins.reduce((total, coin) => total + coin.market_cap, 0);
  };

  const get24hVolume = () => {
    return coins.reduce((total, coin) => total + coin.total_volume, 0);
  };

  const getBtcDominance = () => {
    const totalMarketCap = getTotalMarketCap();
    const btc = coins.find((coin) => coin.symbol === "btc");
    return btc ? ((btc.market_cap / totalMarketCap) * 100).toFixed(1) : 0;
  };

  return (
    <StatsContainer>
      <StatCard>
        <StatIcon>💰</StatIcon>
        <StatContent>
          <StatTitle>Total Market Cap</StatTitle>
          <StatValue>${getTotalMarketCap().toLocaleString()}</StatValue>
        </StatContent>
      </StatCard>
      <StatCard>
        <StatIcon>📊</StatIcon>
        <StatContent>
          <StatTitle>24h Volume</StatTitle>
          <StatValue>${get24hVolume().toLocaleString()}</StatValue>
        </StatContent>
      </StatCard>
      <StatCard>
        <StatIcon>₿</StatIcon>
        <StatContent>
          <StatTitle>BTC Dominance</StatTitle>
          <StatValue>{getBtcDominance()}%</StatValue>
        </StatContent>
      </StatCard>
      <StatCard>
        <StatIcon>🏆</StatIcon>
        <StatContent>
          <StatTitle>Active Cryptocurrencies</StatTitle>
          <StatValue>{coins.length}</StatValue>
        </StatContent>
      </StatCard>
    </StatsContainer>
  );
};

const StatsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.5rem;
  margin-bottom: 2.5rem;
  padding: 0.5rem;
`;

const StatCard = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  background: white;
  padding: 1.5rem;
  border-radius: 12px;
  box-shadow: var(--card-shadow);
  transition: all 0.3s ease;

  @media (prefers-color-scheme: dark) {
    background: #2a2f35;
  }

  &:hover {
    transform: translateY(-5px);
    box-shadow: var(--card-hover-shadow);
  }
`;

const StatIcon = styled.div`
  font-size: 2rem;
  width: 48px;
  height: 48px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: var(--light-color);
  border-radius: 12px;

  @media (prefers-color-scheme: dark) {
    background: #343a40;
  }
`;

const StatContent = styled.div`
  flex: 1;
`;

const StatTitle = styled.h3`
  margin: 0;
  color: var(--secondary-color);
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
`;

const StatValue = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  color: var(--dark-color);

  @media (prefers-color-scheme: dark) {
    color: var(--light-color);
  }
`;

export default MarketStats;
