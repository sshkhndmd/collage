import { Div, Panel, Text } from "@vkontakte/vkui";
import { setActivePanel } from "../store/panel";
import { PANELS } from "../types/panels";
import ButtonBack from "../assets/buttonBack.svg";
import "./style.css";

interface BordersProps {
  id: string;
}

const Borders = ({ id }: BordersProps) => {
  return (
    <Panel id={id}>
      <Div className="collage-header">
        <Div className="button-menu-container">
          <a data-to="">
            <img
              onClick={() => setActivePanel(PANELS.HOME)}
              style={{ width: "20px", height: "28px" }}
              src={ButtonBack}
            ></img>
          </a>
        </Div>
        <Div className="oval-container">
          <Text className="title">Рамки</Text>
        </Div>
      </Div>
      <Div className="collage-content"></Div>
    </Panel>
  );
};

export default Borders;
