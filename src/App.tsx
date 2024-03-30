import { useState } from 'react';
import { UserInfo } from '@vkontakte/vk-bridge';
import { View, SplitCol, SplitLayout, AdaptivityProvider } from '@vkontakte/vkui';
import { useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';

/*import { Persik, Home } from './panels';*/
import { DEFAULT_VIEW_PANELS } from './routes';
import Home from './panels/Home';

export const App = () => {
  const { panel: activePanel = DEFAULT_VIEW_PANELS.HOME } = useActiveVkuiLocation();
  const [fetchedUser] = useState<UserInfo | undefined>();
  // const [popout, setPopout] = useState<ReactNode | null>(<ScreenSpinner size="large" />);

  // useEffect(() => {
  //   async function fetchData() {
  //     const user = await bridge.send('VKWebAppGetUserInfo');
  //     setUser(user);
  //     setPopout(null);
  //   }
  //   fetchData();
  // }, []);

  return (
    <AdaptivityProvider>
      <SplitLayout>
        <SplitCol>
          <View activePanel={activePanel}>
            <Home id="home" fetchedUser={fetchedUser} />
            {/* <Persik id="persik" /> */}
          </View>
        </SplitCol>
      </SplitLayout>
    </AdaptivityProvider>
  );
};
