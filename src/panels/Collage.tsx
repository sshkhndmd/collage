import { Panel } from "@vkontakte/vkui"
import { setActivePanel } from "../store/panel";
import { PANELS } from "../types/panels";
import ButtonBack from "../assets/buttonBack.svg";

interface CollageProps {
    id: string
  }

const Collage = ({id}:CollageProps) => {
  return (
    <Panel id={id}>
      <img onClick={() => setActivePanel(PANELS.HOME)} style={{width: '40px', height: '40px'}} src={ButtonBack}></img>
         <div>Collage</div>
    </Panel>
  )
}

export default Collage;