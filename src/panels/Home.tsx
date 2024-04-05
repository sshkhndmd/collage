import { FC } from "react";
import { Panel} from "@vkontakte/vkui";
import "./style.css";
import HomeCollage from "../components/home-collage";
import HomeTemplates from "../components/home-templates";
import { setActivePanel } from "../store/panel";
import { PANELS } from "../types/panels";

interface HomeProps {
  id: string
}

const Home: FC<HomeProps> = ({id}) => {
  return (
    <Panel id={id}>
      <div className="home-container">
        <HomeCollage title="Collages" url/>
        <HomeTemplates/>
      </div>
    </Panel>
  );
};

export default Home;
