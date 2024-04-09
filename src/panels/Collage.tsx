import { Panel, Div, Text } from "@vkontakte/vkui";
import { setActivePanel } from "../store/panel";
import { PANELS } from "../types/panels";
import ButtonBack from "../assets/buttonBack.svg";
import Collage1 from "../assets/collage1.svg";
import Collage2 from "../assets/collage2.svg";
import Collage3 from "../assets/collage3.svg";
import Collage4 from "../assets/collage4.svg";
import Collage5 from "../assets/collage5.svg";
import Collage6 from "../assets/collage6.svg";
import Collage7 from "../assets/collage7.svg";
import Collage8 from "../assets/collage8.svg";
import "./style.css";

interface CollageProps {
  id: string;
}

const Collage = ({ id }: CollageProps) => {
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
            <Text className="title">Коллаж</Text>
          </Div>
        </Div>
        <Div className="collage-content" style={{height: 'auto'}}>
          <a>
            <div
              className="collage-img"
              style={{ background: `0 0 / contain url(${Collage1}) no-repeat` }}
            ></div>
          </a>
          <a>
            <div
              className="collage-img"
              style={{ background: `0 0 / contain url(${Collage2}) no-repeat` }}
            ></div>
          </a>
          <a>
            <div
              className="collage-img"
              style={{ background: `0 0 / contain url(${Collage3}) no-repeat` }}
            ></div>
          </a>
          <a>
            <div
              className="collage-img"
              style={{ background: `0 0 / contain url(${Collage4}) no-repeat` }}
            ></div>
          </a>
          <a>
            <div
              className="collage-img"
              style={{ background: `0 0 / contain url(${Collage5}) no-repeat` }}
            ></div>
          </a>
          <a>
            <div
              className="collage-img"
              style={{ background: `0 0 / contain url(${Collage6}) no-repeat` }}
            ></div>
          </a>
          <a>
            <div
              className="collage-img"
              style={{ background: `0 0 / contain url(${Collage7}) no-repeat` }}
            ></div>
          </a>
          <a>
            <div
              className="collage-img"
              style={{ background: `0 0 / contain url(${Collage8}) no-repeat` }}
            ></div>
          </a>
        </Div>
      </div>
    </Panel>
  );
};

export default Collage;
