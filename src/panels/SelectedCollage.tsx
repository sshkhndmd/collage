import { Panel } from "@vkontakte/vkui";
import { useState } from "react";
import ButtonBack from "../assets/buttonBack.svg";
import Collage1 from "../assets/collage1.svg";
import Collage2 from "../assets/collage2.svg";
import Collage3 from "../assets/collage3.svg";
import Collage4 from "../assets/collage4.svg";
import Collage5 from "../assets/collage5.svg";
import Collage6 from "../assets/collage6.svg";
import Collage7 from "../assets/collage7.svg";
import Collage8 from "../assets/collage8.svg";
import "./style.css";

interface SelectedCollageProps {
  id: string;
  
}

const SelectedCollage = ({ id, setSelectedCollage }: SelectedCollageProps) => {
  const [selectedCollageIndex, setSelectedCollageIndex] = useState(null);
  const collageImages = [
    Collage1,
    Collage2,
    Collage3,
    Collage4,
    Collage5,
    Collage6,
    Collage7,
    Collage8,
  ];
  const handleCollageClick = (index, e) => {
    const selectedCollageData = {
      index: index,
      text: collageTexts[index],
    };
    setSelectedCollageIndex(index);
    setSelectedCollage(selectedCollageData);
    go && go(e);
  };
  return <Panel id={id}></Panel>;
};

export default SelectedCollage;
