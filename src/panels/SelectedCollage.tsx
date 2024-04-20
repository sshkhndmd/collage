import { Button, Div, Panel } from "@vkontakte/vkui";
import ButtonBack from "../assets/buttonBack.svg";
import "./style.css";
import { setActivePanel } from "../store/panel";
import { PANELS } from "../types/panels";
import { useUnit } from "effector-react";
import { $idActiveCollage } from "../store/collage";
import { collageTemplates } from '../constants/collageTemplates';

interface SelectedCollageProps {
  id: string;
}


const SelectedCollage = ({ id }: SelectedCollageProps) => {
  const idCollage = useUnit($idActiveCollage);
  const collage = collageTemplates.find((el) => el.id === idCollage);

  const addBlocks = () => {
    const arr = [];
    if (collage)
      for (let i = 0; i < collage?.count; i++) {
        const el = (
          <div key={i} style={{ border: "1px solid black" }}>
          
            {i + 1}
          </div>
        );
        arr.push(el);
      }
    return arr;
  };
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
      <Div style={{display: 'grid', gap: 5, ...collage?.code.reduce((acc, cur) => ({...acc, ...cur}), {})}}>
        {/* <img src={collage?.url} /> */}
        {addBlocks()}
      </Div>
    </Panel>
  );
};

export default SelectedCollage;
