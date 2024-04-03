import { Panel } from "@vkontakte/vkui"

interface ArchiveProps {
    id: string
  }


const Archive = ({id}:ArchiveProps) => {
    return (
      <Panel id={id}>
          <div>Archive</div>
      </Panel>
    )
  }

export default Archive