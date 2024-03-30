import { FC } from 'react';
import {Panel,PanelHeader,Header,Button,Group,Cell,Div,NavIdProps,Text,} from '@vkontakte/vkui';
import { UserInfo } from '@vkontakte/vk-bridge';
import FrameImage from '../assets/frames.svg';
import CollageImage from '../assets/collage.svg';
import NewYear from '../assets/newYear.svg';
import HappyBirthday from '../assets/happyBirthday.svg';
import March from '../assets/march.svg';
import Halloween from '../assets/halloween.svg';
import ButtonMenu from '../assets/buttonMenu.svg';
import './style.css';

export interface HomeProps extends NavIdProps {
  fetchedUser?: UserInfo;
}

export const Home: FC<HomeProps> = ({ id, fetchedUser }) => {
  
  return (
    <Panel id={id}>    
      <Div className="home-container">
     {/* ---------------------верхний блок---------------------------------- */}
        <Div className="home"> 
          <Div className="button-menu-container"> 
            <a data-to=""> 
              <img className="button-menu" src={ButtonMenu} /> 
            </a> 
          </Div> 
          <Div className="oval-container">    
            <Text className="title">Collages</Text>     
          </Div>  
          <Div className="home-panel">    
            <Div className="image-container">  
              <img className="image" src={FrameImage} alt="Frame" />    
              <Text className="image-text">Рамки</Text>  
            </Div>    
            <Div className="image-container">  
              <img className="image" src={CollageImage} alt="Collage" />    
              <Text className="image-text">Коллажи</Text>  
            </Div>    
          </Div>
          <Div className="oval-container2">
            <Text className="title2">Шаблоны</Text> 
          </Div> 
        </Div>
       
      {/* ---------------------нижний блок---------------------------------- */}
      
      <Div className="template-container">
        <Div className="template">
          <Text className="template-text">Новый год</Text>
          <img className="template-image" src={NewYear} alt="Template 1" />
        </Div>
        <Div className="template">
          <Text className="template-text">День Рождения</Text>
          <img className="template-image" src={HappyBirthday} alt="Template 2" />
        </Div>
        <Div className="template">
          <Text className="template-text">8 марта</Text>
          <img className="template-image" src={March} alt="Template 3" />
        </Div>
        <Div className="template">
          <Text className="template-text">Хэллоуин</Text>
          <img className="template-image" src={Halloween} alt="Template 4" />
        </Div>
      </Div>
  </Div>   
</Panel>    
  );
};