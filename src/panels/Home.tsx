import { FC } from 'react';
import {
  Panel,
  PanelHeader,
  Header,
  Button,
  Group,
  Cell,
  Div,
  Avatar,
  NavIdProps,
  Text,
  Image
} from '@vkontakte/vkui';
import { UserInfo } from '@vkontakte/vk-bridge';
import FrameImage from '../assets/frames.svg';
import CollageImage from '../assets/collage.svg';
import './style.css';

export interface HomeProps extends NavIdProps {
  fetchedUser?: UserInfo;
}

export const Home: FC<HomeProps> = ({ id, fetchedUser }) => {
  

  return (
    <Panel id={id}>   
      <Div className="home-container">  
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
    </Panel>     
  );
};
