import {AppearanceProvider, Div, Text } from "@vkontakte/vkui";
import FrameImage from "../assets/frames.svg";
import CollageImage from "../assets/collage.svg";
import ButtonMenu from "../assets/buttonMenu.svg";
import { setActivePanel } from "../store/panel";
import { PANELS } from "../types/panels";

type HomeCollageProps = {
  title: string;
  url: boolean;
};

const HomeCollage = ({ title, url }: HomeCollageProps) => (
  <Div className="home">
    <Div className="button-menu-container">
      <a data-to="">
        <img
          onClick={() => setActivePanel(PANELS.ARCHIVE)}
          className="button-menu"
          src={ButtonMenu}
        />
      </a>
    </Div>
    <Div className="oval-container">
      <Text className="title">{title}</Text>
    </Div>
    <Div className="home-panel">
      <div className="wrapper-home">
        <Div className="image-container">
          <img
            onClick={() => setActivePanel(PANELS.BORDERS)}
            className="image"
            src={FrameImage}
            alt="Frame"
          />
          <AppearanceProvider value="dark">
            <Text className="image-text">Рамки</Text>
          </AppearanceProvider>
        </Div>
        {/* <Div className="image-container">
          <img
            onClick={() => setActivePanel(PANELS.COLLAGE)}
            className="image"
            src={CollageImage}
            alt="Collage"
          />
          <Text className="image-text">Коллажи</Text>
        </Div> */}
      </div>
    </Div>
  </Div>
);
export default HomeCollage;
