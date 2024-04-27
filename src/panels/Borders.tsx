import { Div, Panel, Text } from "@vkontakte/vkui";
import { setActivePanel } from "../store/panel";
import { PANELS } from "../types/panels";
import ButtonBack from "../assets/buttonBack.svg";
import "./style.css";
import { borderTemplates } from "../constants/borderTemplates";
import { setIdActiveBorder } from "../store/border";
interface BordersProps {
  id: string
}
const Borders = ({ id }: BordersProps) => {
  return (
    <Panel id={id}>
      <div style={{ height: "100vh", backgroundColor: "#C2D6E4" }}>
        <Div className="collage-header" style={{backgroundColor: 'white'}}>
          <Div className="button-menu-container">
            <a data-to="">
              <img
                onClick={() => setActivePanel(PANELS.HOME)}
                style={{ height: "28px", width: "20px" }}
                src={ButtonBack}
              ></img>
            </a>
          </Div>
          <Div className="oval-container">
            <Text className="title">Рамки</Text>
          </Div>
        </Div>
        <Div className="collage-content" style={{ height: "auto" }}>
          {borderTemplates.map((template) => {
            return (
              <a
                key={template.id}
                onClick={() => {
                  setActivePanel(PANELS.SELECTEDBORDER);
                  setIdActiveBorder(template.id)
                }}
              >
                <div
                  className="collage-img"
                  style={{
                    background: `0 0 / contain url(${template.url}) no-repeat`,
                  }}
                ></div>
              </a>
            );
          })}
        </Div>
      </div>
    </Panel>
  );
};

export default Borders;
