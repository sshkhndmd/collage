import { View, SplitCol, SplitLayout, AdaptivityProvider } from '@vkontakte/vkui';
import Home from './panels/Home';
import Collage from './panels/Collage';
import Borders from './panels/Borders';
import { useUnit } from 'effector-react';
import { $activePanel } from './store/panel';
import { PANELS } from './types/panels';
import Archive from './panels/Archive';

export const App = () => {
  // const [fetchedUser] = useState<UserInfo | undefined>();
  const activePanel: PANELS = useUnit($activePanel)

  return (
    <AdaptivityProvider>
      <SplitLayout>
        <SplitCol>
          <View activePanel={activePanel}>
            <Home id="home" />
            <Collage id="collage"/>
            <Borders id="borders"/>
            <Archive id="archive"/>
          </View>
        </SplitCol>
      </SplitLayout>
    </AdaptivityProvider>
  );
};
