import { FC } from 'react';
import {
  Panel,
  Div,
  NavIdProps,
  Text,
  Image
} from '@vkontakte/vkui';
import { UserInfo } from '@vkontakte/vk-bridge';
import FrameImage from '../assets/frames.svg';
import CollageImage from '../assets/collage.svg';
import NewYear from '../assets/newYear.svg';
import HappyBirthday from '../assets/happyBirthday.svg';
import March from '../assets/march.svg';
import Halloween from '../assets/halloween.svg';
import './style.css';

export interface HomeProps extends NavIdProps {
  fetchedUser?: UserInfo;
}

 const Home: FC<HomeProps> = ({ id, fetchedUser }) => {
  

  return (
    <Panel id={id}>    
  <Div className="home-container">
     {/* ---------------------верхний блок---------------------------------- */}
    <Div className="home">
        <Div className="oval-container">   
          <Text className="title">Collages</Text>    
        </Div> 
        <Div className="home-panel">   
          <Div className="image-container"> 
            <Image className="image" src={FrameImage} alt="Frame" style={{width: '150px', height:'150px'}}/>   
            <Text className="image-text">Рамки</Text> 
          </Div>   
          <Div className="image-container"> 
            <Image className="image" src={CollageImage} alt="Collage" style={{width: '150px', height:'150px'}}/>   
            <Text className="image-text">Коллажи</Text> 
          </Div>   
        </Div>
    </Div>
    {/* ---------------------средний блок---------------------------------- */}
    <Div>
      <Text className="title2">Шаблоны</Text> 
    </Div>   
      {/* ---------------------нижний блок---------------------------------- */}
    <Div className="template-container">
      <Div className="template">
        <Text className="template-text">Новый год</Text>
        <Image className="template-image" src={NewYear} alt="Template 1" style={{width: '350px', height: '320px'}}/>
        
      </Div>
      <Div className="template">
        <Text className="template-text">День Рождения</Text>
        <Image className="template-image" src={HappyBirthday} alt="Template 2" style={{width: '350px', height: '320px'}}/>
        
      </Div>
      <Div className="template">
        <Text className="template-text">8 марта</Text>
        <Image className="template-image" src={March} alt="Template 3" style={{width: '350px', height: '320px'}}/>
        
      </Div>
      <Div className="template">
        <Text className="template-text">Хэллоуин</Text>
        <Image className="template-image" src={Halloween} alt="Template 4" style={{width: '350px', height: '320px'}}/>
        
      </Div>
    </Div>
  </Div>   
</Panel>    
  );
};

export default Home