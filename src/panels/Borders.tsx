import { Panel } from "@vkontakte/vkui"
import { setActivePanel } from "../store/panel";
import { PANELS } from "../types/panels";
import ButtonBack from "../assets/buttonBack.svg";

interface BordersProps {
    id: string
  }

const Borders = ({id}:BordersProps) => {
  return (
    <Panel id={id}>
      <img onClick={() => setActivePanel(PANELS.HOME)} style={{width: '40px', height: '40px'}} src={ButtonBack}></img>
        <div>Borders</div>
    </Panel>
  )
}

export default Borders;