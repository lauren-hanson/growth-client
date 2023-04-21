import './Growth.css';
import { QuestionList } from "./components/questions/QuestionList"
import { TopicList } from "./components/topics/TopicList"
import { VideoList } from "./components/videos/VideoList"


function Growth() {
  return (
    <div className="App">
      <h2>Video Journey</h2>
      <QuestionList />
      <TopicList />
      <VideoList />
    </div>
  );

}

export default Growth;
