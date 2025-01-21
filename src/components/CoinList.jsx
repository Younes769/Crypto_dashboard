import styled from "styled-components";

const CoinList = ({ coins }) => {
  return (
    <GridContainer>
      <GridHeader>
        <span>#</span>
        <span>Name</span>
        <span>Price</span>
        <span>24h Change</span>
        <span>Market Cap</span>
      </GridHeader>
      {coins.map((coin) => (
        <CoinItem key={coin.id}>
          <span>{coin.market_cap_rank}</span>
          <CoinInfo>
            <img src={coin.image} alt={coin.name} />
            <div>
              <h3>{coin.name}</h3>
              <p>{coin.symbol.toUpperCase()}</p>
            </div>
          </CoinInfo>
          <PriceInfo>
            <span>${coin.current_price.toLocaleString()}</span>
            <small>≈ {coin.current_price.toFixed(8)} BTC</small>
          </PriceInfo>
          <PriceChange isPositive={coin.price_change_percentage_24h > 0}>
            {coin.price_change_percentage_24h > 0 && "+"}
            {coin.price_change_percentage_24h.toFixed(2)}%
          </PriceChange>
          <MarketCapInfo>
            <span>${coin.market_cap.toLocaleString()}</span>
            <small>Volume: ${coin.total_volume.toLocaleString()}</small>
          </MarketCapInfo>
        </CoinItem>
      ))}
    </GridContainer>
  );
};

const GridContainer = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: var(--card-shadow);
  overflow: hidden;

  @media (prefers-color-scheme: dark) {
    background: #2a2f35;
  }
`;

const GridHeader = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 2fr 1.5fr 1fr 1.5fr;
  padding: 1rem 1.5rem;
  background: var(--light-color);
  border-bottom: 1px solid #e9ecef;
  font-weight: 600;
  color: var(--secondary-color);

  @media (prefers-color-scheme: dark) {
    background: #343a40;
    border-bottom-color: #454d55;
  }

  @media (max-width: 768px) {
    grid-template-columns: 0.5fr 2fr 1fr 1fr;
    & > span:last-child {
      display: none;
    }
  }
`;

const CoinItem = styled.div`
  display: grid;
  grid-template-columns: 0.5fr 2fr 1.5fr 1fr 1.5fr;
  padding: 1rem 1.5rem;
  align-items: center;
  border-bottom: 1px solid #e9ecef;
  transition: all 0.2s ease;
  cursor: pointer;

  @media (prefers-color-scheme: dark) {
    border-bottom-color: #454d55;
  }

  &:hover {
    background-color: var(--light-color);
    @media (prefers-color-scheme: dark) {
      background-color: #343a40;
    }
  }

  @media (max-width: 768px) {
    grid-template-columns: 0.5fr 2fr 1fr 1fr;
    & > *:last-child {
      display: none;
    }
  }

  img {
    width: 32px;
    height: 32px;
    margin-right: 1rem;
  }
`;

const CoinInfo = styled.div`
  display: flex;
  align-items: center;

  div {
    h3 {
      margin: 0;
      font-size: 1rem;
      font-weight: 500;
    }
    p {
      margin: 0;
      font-size: 0.8rem;
      color: var(--secondary-color);
    }
  }
`;

const PriceInfo = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-weight: 500;
  }

  small {
    font-size: 0.75rem;
    color: var(--secondary-color);
  }
`;

const MarketCapInfo = styled.div`
  display: flex;
  flex-direction: column;

  span {
    font-weight: 500;
  }

  small {
    font-size: 0.75rem;
    color: var(--secondary-color);
  }
`;

const PriceChange = styled.div`
  color: ${(props) =>
    props.isPositive ? "var(--success-color)" : "var(--danger-color)"};
  font-weight: 500;
`;

export default CoinList;
