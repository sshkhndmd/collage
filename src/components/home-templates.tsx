import { Div, Text } from "@vkontakte/vkui";
import NewYear from "../assets/newYear.svg";
import HappyBirthday from "../assets/happyBirthday.svg";
import March from "../assets/march.svg";
import Halloween from "../assets/halloween.svg";

const templates = [
  {
    title: "Новый год",
    url: NewYear,
  },
  {
    title: "День рождения",
    url: HappyBirthday,
  },
  {
    title: "8 Марта",
    url: March,
  },
  {
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
            <Text className="template-text">{template.title}</Text>
            <img className="template-image" src={template.url} alt="Template 4" />
          </Div>
        );
      })}
    </Div>
  );
};

export default HomeTemplates;
