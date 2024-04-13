import { Button, Div, Panel } from "@vkontakte/vkui";
import ButtonBack from "../assets/buttonBack.svg";
import "./style.css";
import { setActivePanel } from "../store/panel";
import { PANELS } from "../types/panels";
import { useUnit } from "effector-react";
import { $idActiveCollage } from "../store/collage";
import { useState } from "react";
import { collageTemplates } from "../constants/collageTemplates";

interface SelectedCollageProps {
  id: string;
}

const SelectedCollage = ({ id }: SelectedCollageProps) => {
  const idCollage = useUnit($idActiveCollage);
  const [collage, setCollage] = useState(
    collageTemplates.find((el) => el.id === idCollage)
  );
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
          <Button onClick={() => setActivePanel(PANELS.SAVECOLLAGE)}>
            Сохранить
          </Button>
        </Div>
      </Div>
      <Div>

        <img src={collage?.url} />
      </Div>
    </Panel>
  );
};

export default SelectedCollage;
