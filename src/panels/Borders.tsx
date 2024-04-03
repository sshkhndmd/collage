import { Panel } from "@vkontakte/vkui"

interface BordersProps {
    id: string
  }

const Borders = ({id}:BordersProps) => {
  return (
    <Panel id={id}>
        <div>Borders</div>
    </Panel>
  )
}

export default Borders;