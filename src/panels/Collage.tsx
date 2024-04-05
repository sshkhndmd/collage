import { Panel, Div, Text } from "@vkontakte/vkui"
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
    id: string
  }

const Collage = ({id}:CollageProps) => {
  return (
    <Panel id={id}>
      <Div className="collage-header"> 
        <Div className="button-menu-container">
          <a data-to="">
            <img onClick={() => setActivePanel(PANELS.HOME)} style={{height: '28px', width: '20px'}} src={ButtonBack}></img>
          </a>
        </Div>
        <Div className="oval-container">
              <Text className="title">Коллаж</Text>
        </Div>
      </Div>
      <Div className="collage-content">
        <a>
          <img className="collage-img" src={Collage1}></img>
        </a>
        <a>
          <img className="collage-img" src={Collage2}></img>
        </a>
        <a>
          <img className="collage-img" src={Collage3}></img>
        </a>
        <a>
          <img className="collage-img" src={Collage4}></img>
        </a>
        <a>
          <img className="collage-img" src={Collage5}></img>
        </a>
        <a>
          <img className="collage-img" src={Collage6}></img>
        </a>
        <a>
          <img className="collage-img" src={Collage7}></img>
        </a>
        <a>
          <img className="collage-img" src={Collage8}></img>
        </a>
      </Div>
    </Panel>
  )
}

export default Collage;