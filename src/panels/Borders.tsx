import { Div, Panel, Text } from "@vkontakte/vkui";
import { setActivePanel } from "../store/panel";
import { PANELS } from "../types/panels";
import ButtonBack from "../assets/buttonBack.svg";
import Border1 from "../assets/Border1.svg";
import Border2 from "../assets/Border2.svg";
import Border3 from "../assets/Border3.svg";
import Border4 from "../assets/Border4.svg";
import Border5 from "../assets/Border5.svg";
import Border6 from "../assets/Border6.svg";
import Border7 from "../assets/Border7.svg";
import Border8 from "../assets/Border8.svg";
import "./style.css"
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
        <Div className="collage-content" style={{height: 'auto'}}>
          <a>
            <div
              className="collage-img"
              style={{ background: `0 0 / contain url(${Border1}) no-repeat` }}
            ></div>
          </a>
          <a>
            <div
              className="collage-img"
              style={{ background: `0 0 / contain url(${Border2}) no-repeat` }}
            ></div>
          </a>
          <a>
            <div
              className="collage-img"
              style={{ background: `0 0 / contain url(${Border3}) no-repeat` }}
            ></div>
          </a>
          <a>
            <div
              className="collage-img"
              style={{ background: `0 0 / contain url(${Border4}) no-repeat` }}
            ></div>
          </a>
          <a>
            <div
              className="collage-img"
              style={{ background: `0 0 / contain url(${Border5}) no-repeat` }}
            ></div>
          </a>
          <a>
            <div
              className="collage-img"
              style={{ background: `0 0 / contain url(${Border6}) no-repeat` }}
            ></div>
          </a>
          <a>
            <div
              className="collage-img"
              style={{ background: `0 0 / contain url(${Border7}) no-repeat` }}
            ></div>
          </a>
          <a>
            <div
              className="collage-img"
              style={{ background: `0 0 / contain url(${Border8}) no-repeat` }}
            ></div>
          </a>
        </Div>
      </div>
    </Panel>
  );
};

export default Borders;
