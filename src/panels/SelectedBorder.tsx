import { useState } from "react";
import { Button, Div, Panel } from "@vkontakte/vkui";
import ButtonBack from "../assets/buttonBack.svg";
import "./style.css";
import { setActivePanel } from "../store/panel";
import { PANELS } from "../types/panels";
import { useUnit } from "effector-react";
import { $idActiveBorder } from "../store/border";
import { borderTemplates } from "../constants/borderTemplates";

interface SelectedBorderProps {
  id: string;
}

const SelectedBorder = ({ id }: SelectedBorderProps) => {
  const idBorder = useUnit($idActiveBorder);
  const border = borderTemplates.find((el) => el.id === idBorder);

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageSelect = async () => {
    try {
      const selectedFile = await new Promise((resolve, reject) => {
        const input = document.createElement("input");
        input.type = "file";
        input.accept = "image/*";
        input.onchange = (event) => {
          const file = (event.target as HTMLInputElement).files[0];
          if (file) {
            resolve(file);
          } else {
            reject(new Error("Файл не выбран"));
          }
        };
        input.click();
      });

      setSelectedImage(URL.createObjectURL(selectedFile));
    } catch (error) {
      console.error("Ошибка при выборе изображения:", error);
    }
  };

  const handleSaveCollage = () => {
    try {
      const canvas = document.createElement("canvas");
      const ctx = canvas.getContext("2d");

      canvas.width = border.width;
      canvas.height = border.height;

      const frameImage = new Image();
      frameImage.src = border.url;

      const selectedImageObj = new Image();
      selectedImageObj.src = selectedImage;

      frameImage.onload = () => {
        ctx.drawImage(frameImage, 0, 0);
        selectedImageObj.onload = () => {
          ctx.drawImage(selectedImageObj, 0, 0, canvas.width, canvas.height);
          const link = document.createElement("a");
          link.download = "collage.png";
          link.href = canvas.toDataURL();
          link.click();
        };
      };
    } catch (error) {
      console.error("Ошибка при сохранении коллажа:", error);
    }
  };

  return (
    <Panel id={id}>
      <Div className="border-main">
        <Div className="collage-header-set">
          <Div className="button-menu-container">
            <a data-to="">
              <img
                onClick={() => setActivePanel(PANELS.BORDERS)}
                className="button-menu"
                src={ButtonBack}
              />
            </a>
          </Div>
          <Div className="button-save">
            <Button onClick={handleSaveCollage}>Сохранить</Button>
          </Div>
        </Div>
        
        <Div>

          <img className="border-image" src={border?.url} onClick={handleImageSelect} />
          {selectedImage && <img src={selectedImage} />}
        </Div>
      </Div>
    </Panel>
  );
};

export default SelectedBorder;
