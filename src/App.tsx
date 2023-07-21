import { useRouteNavigator, useActiveVkuiLocation } from '@vkontakte/vk-mini-apps-router';
import { Root, View, Panel, Epic } from '@vkontakte/vkui';
import { routes } from './router';
import { DefaultEpicTabbar } from '@/components';
import { DiaryPanel, DailyWishPanel, LibraryPanel, OnboardingPanel } from '@/widgets';
import s from './style.module.scss';

function App() {
    const { view: activeView, panel: activePanel, panelsHistory, root: activeRoot } = useActiveVkuiLocation();
    const routeNavigator = useRouteNavigator();

    const handleSwipeBack = () => {
        routeNavigator.back();
    };

    return (
        <Root activeView='main_view' nav='main_root'>
            <View activePanel='app_panel' nav='main_view'>
                <Panel nav='onboarding_panel'>
                    <OnboardingPanel />
                </Panel>
                <Panel className={s.wrapper_panel} nav='app_panel'>
                    <Epic activeStory={activeRoot} tabbar={<DefaultEpicTabbar />}>
                        <Root nav={routes.default_root.id} id={routes.default_root.id} activeView={activeView}>
                            <View
                                nav={routes.default_root.default_view.id}
                                history={panelsHistory}
                                activePanel={activePanel}
                                onSwipeBack={handleSwipeBack}
                            >
                                <Panel nav={routes.default_root.default_view.daily_wish_panel.id}>
                                    <DailyWishPanel />
                                </Panel>
                                <Panel nav={routes.default_root.default_view.diary_panel.id}>
                                    <DiaryPanel />
                                </Panel>
                                <Panel nav={routes.default_root.default_view.library_panel.id}>
                                    <LibraryPanel />
                                </Panel>
                            </View>
                        </Root>
                    </Epic>
                </Panel>
            </View>
        </Root>
    );
}

export default App;
