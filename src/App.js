import Header from "./Components/Header/Header";
import StoryLine from "./Components/StoryLine/StoryLine";
import Post from "./Components/Post/Post";
import TimeLine from "./Components/TimeLine/TimeLine";
import FixedBottomMenu from "./Components/FixedNavbar/FixedMenu";
function App() {
  return (
    <div className="container mx-auto">
      <Header />
      <StoryLine />
      <Post />
      <TimeLine />
      <p>salam</p>
      <FixedBottomMenu />
    </div>
  );
}

export default App;
