import { Button, Div, Panel } from "@vkontakte/vkui";
import { setActivePanel } from "../store/panel";
import { PANELS } from "../types/panels";
import ButtonBack from "../assets/buttonBack.svg";
import HomeIcon from "../assets/homeIcon.svg";
import "./style.css";

interface SaveCollageProps {
    id: string;
  }
  
  const SaveCollage = ({ id }: SaveCollageProps) => {
    return (
      <Panel id={id}>
        <Div className="collage-header-set">
          <Div className="button-menu-container">
            <a data-to="">
              <img
                onClick={() => setActivePanel(PANELS.SELECTEDCOLLAGE)}
                className="button-menu"
                src={ButtonBack}
              />
            </a>
          </Div>
          <Div className="button-save">
            <Button>Сохранить и поделиться</Button>
          </Div>
          <Div>
            <a data-to="">
                <img
                onClick={() => setActivePanel(PANELS.HOME)}
                className="button-menu"
                src={HomeIcon}></img>
            </a>
          </Div>
        </Div>
      </Panel>
    );
  };
  
  export default SaveCollage;