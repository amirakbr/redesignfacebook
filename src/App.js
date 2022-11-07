import Header from "./Components/Header/Header";
import StoryLine from "./Components/StoryLine/StoryLine";
import Post from "./Components/Post/Post";
import TimeLine from "./Components/TimeLine/TimeLine";
function App() {
  return (
    <div className="container">
      <Header />
      <StoryLine />
      <Post />
      <TimeLine />
    </div>
  );
}

export default App;
