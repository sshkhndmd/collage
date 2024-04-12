import { Button, Div, Panel } from "@vkontakte/vkui";
import ButtonBack from "../assets/buttonBack.svg";
import "./style.css";
import { setActivePanel } from "../store/panel";
import { PANELS } from "../types/panels";

interface SelectedCollageProps {
  id: string;
}

const SelectedCollage = ({ id }: SelectedCollageProps) => {
  return (
    <Panel id={id}>
      <Div className="collage-header-set">
        <Div className="button-menu-container">
          <a data-to="">
            <img
              onClick={() => setActivePanel(PANELS.COLLAGE)}
              className="button-menu"
              src={ButtonBack}
            />
          </a>
        </Div>
        <Div className="button-save">
          <Button>Сохранить</Button>
        </Div>
      </Div>
    </Panel>
  );
};

export default SelectedCollage;
