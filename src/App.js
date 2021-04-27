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
    <div className="container-fluid">
      <div className="row">
        <div className="col-3">
          <DashboardWidget />
        </div>
        <div className="col-9">
          <div className="row">
            <div className="col-4">
              <Reviews />
            </div>
            <div className="col-4">
              <AverageRating />
            </div>
            <div className="col-4">
              <SentimentAnalysis />
            </div>
          </div>
          <div className="row">
            <div className="col-12">
              <WebsiteVisitors />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
