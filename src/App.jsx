import { useState, useEffect } from "react";
import styled from "styled-components";
import CoinList from "./components/CoinList";
import MarketStats from "./components/MarketStats";
import SearchBar from "./components/SearchBar";
import "./App.css";

function App() {
  const [coins, setCoins] = useState([]);
  const [filteredCoins, setFilteredCoins] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCoinData();
  }, []);

  const fetchCoinData = async () => {
    try {
      const response = await fetch(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
      );
      const data = await response.json();
      setCoins(data);
      setFilteredCoins(data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching data:", error);
      setLoading(false);
    }
  };

  const handleSearch = (searchTerm) => {
    const filtered = coins.filter(
      (coin) =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCoins(filtered);
  };

  return (
    <AppContainer>
      <Title>Crypto Dashboard</Title>
      <SearchBar onSearch={handleSearch} />
      <MarketStats coins={coins} />
      {loading ? (
        <Loading>Loading...</Loading>
      ) : (
        <CoinList coins={filteredCoins} />
      )}
    </AppContainer>
  );
}

const AppContainer = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  min-height: 100vh;
`;

const Title = styled.h1`
  text-align: center;
  margin-bottom: 2rem;
  color: #2c3e50;
  font-size: 2.5rem;
`;

const Loading = styled.div`
  text-align: center;
  font-size: 1.2rem;
  margin-top: 2rem;
  color: #2c3e50;
`;

export default App;
