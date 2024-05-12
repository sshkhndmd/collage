import { AppearanceProvider, Div, Text } from "@vkontakte/vkui";
import NewYear from "../assets/newYear.png";
import HappyBirthday from "../assets/happyBirthday.png";
import March from "../assets/march.png";
import Halloween from "../assets/halloween.png";
import { setActivePanel } from "../store/panel";
import { setIdActiveBorder } from "../store/border";
import { PANELS } from "../types/panels";

const templates = [
  {
    id: 9,
    title: "Дружба",
    url: NewYear,
  },
  {
    id: 10,
    title: "День рождения",
    url: HappyBirthday,
  },
  {
    id: 11,
    title: "Семья",
    url: March,
  },
  {id: 12,
    title: "Любовь",
    url: Halloween,
  },
];

const HomeTemplates = () => {
  return (
    <Div className="template-container template-container--bottom">
      <Div className="oval-container2">
        <Text className="title2">Шаблоны</Text>
      </Div>
      {templates.map((template, index) => {
        return (
          <Div key={index} className="template">
            <AppearanceProvider value="dark">
              <Text className="template-text">{template.title}</Text>
            </AppearanceProvider>
            <img
              className="template-image"
              src={template.url}
              alt="Template 4"
              onClick={() => {
                setActivePanel(PANELS.SELECTEDBORDER);
                setIdActiveBorder(template.id)
              }}
            />
          </Div>
        );
      })}
    </Div>
  );
};

export default HomeTemplates;
