import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Body from "./components/Body";
import SearchBox from "./components/Searchbox";
import Header from "./components/Header";
import { Route } from "react-router-dom";
import LyricsBox from "./components/LyricsBox";
import SearchResult from "./components/SearchResult";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <SearchBox />
        <Route path="/" exact component={Body} />
        <Route path="/lyrics" component={LyricsBox} />
        <Route path="/search" component={SearchResult} />
      </div>
    </BrowserRouter>
  );
}

export default App;
