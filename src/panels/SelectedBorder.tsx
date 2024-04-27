import { Button, Div, Panel } from "@vkontakte/vkui";
import ButtonBack from "../assets/buttonBack.svg";
import "./style.css";
import { setActivePanel } from "../store/panel";
import { PANELS } from "../types/panels";
import { useUnit } from "effector-react";
import { $idActiveBorder } from "../store/border";
import { borderTemplates } from '../constants/borderTemplates';

interface SelectedBorderProps {
  id: string;
}


const SelectedBorder = ({ id }: SelectedBorderProps) => {
  const idBorder = useUnit($idActiveBorder);
  const border = borderTemplates.find((el) => el.id === idBorder);

  return (
    <Panel id={id}>
      <Div className="collage-header-set">
        <Div className="button-menu-container">
          <a data-to="">
            <img
              onClick={() => setActivePanel(PANELS.BORDERS)}
              className="button-menu"
              src={ButtonBack}
            />
          </a>
        </Div>
        <Div className="button-save">
          <Button onClick={() => setActivePanel(PANELS.SAVECOLLAGE)}>
            Сохранить
          </Button>
        </Div>
      </Div>
      <Div style={{display: 'grid', gap: 5, ...border?.code.reduce((acc, cur) => ({...acc, ...cur}), {})}}>
        <img src={border?.url} />
        
      </Div>
    </Panel>
  );
};

export default SelectedBorder;