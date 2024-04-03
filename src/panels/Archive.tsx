import { Panel } from "@vkontakte/vkui"
import { setActivePanel } from "../store/panel";
import { PANELS } from "../types/panels";
import ButtonBack from "../assets/buttonBack.svg";

interface ArchiveProps {
    id: string
  }


const Archive = ({id}:ArchiveProps) => {
    return (
      <Panel id={id}>
          <img onClick={() => setActivePanel(PANELS.HOME)} style={{width: '40px', height: '40px'}} src={ButtonBack}></img>
          <div>Archive</div>
          
      </Panel>
    )
  }

export default Archive