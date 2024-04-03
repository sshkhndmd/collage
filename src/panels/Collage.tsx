import { Panel } from "@vkontakte/vkui"

interface CollageProps {
    id: string
  }

const Collage = ({id}:CollageProps) => {
  return (
    <Panel id={id}>
         <div>Collage</div>
    </Panel>
  )
}

export default Collage;