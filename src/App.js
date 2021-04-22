import logo from './logo.svg';

import DashboardWidget from "./components/DashboardWidget";
import Reviews from "./components/Reviews";
import AverageRating from "./components/AverageRating";
import SentimentAnalysis from "./components/SentimentAnalysis";
import WebsiteVisitors from './components/WebsiteVisitors';

import './App.css';
import "./styles.css";

function App() {
  return (
    <div>
    <DashboardWidget />
    <Reviews />
    <AverageRating />
    <SentimentAnalysis />
    <WebsiteVisitors />
    </div>
  );
}

export default App;
