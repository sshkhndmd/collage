import { AppearanceProvider, Div, Text } from "@vkontakte/vkui";
import NewYear from "../assets/newYear.svg";
import HappyBirthday from "../assets/happyBirthday.svg";
import March from "../assets/march.svg";
import Halloween from "../assets/halloween.svg";
import { setActivePanel } from "../store/panel";
import { setIdActiveBorder } from "../store/border";
import { PANELS } from "../types/panels";

const templates = [
  {
    id: 9,
    title: "Новый год",
    url: NewYear,
  },
  {
    id: 10,
    title: "День рождения",
    url: HappyBirthday,
  },
  {
    id: 11,
    title: "8 Марта",
    url: March,
  },
  {id: 12,
    title: "Хэллоуин",
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
