import { Icon28ArticleOutline, Icon28BookSpreadOutline, Icon28LikeOutline } from '@vkontakte/icons';
import { useActiveVkuiLocation, useRouteNavigator } from '@vkontakte/vk-mini-apps-router';
import { TabbarItemProps, Tabbar, TabbarItem } from '@vkontakte/vkui';
import { PANEL, PATH } from '@/constants';

export const DefaultEpicTabbar = () => {
    const { panel: activePanel } = useActiveVkuiLocation();

    const routeNavigator = useRouteNavigator();

    const onPageChange: TabbarItemProps['onClick'] = (e) => {
        routeNavigator.replace(e.currentTarget.dataset.story);
    };

    return (
        <Tabbar>
            <TabbarItem
                onClick={onPageChange}
                selected={activePanel === PANEL.DAILY_WISH}
                data-story={PATH.DAILY_WISH}
                text='Пожелание дня'
            >
                <Icon28LikeOutline />
            </TabbarItem>
            <TabbarItem
                onClick={onPageChange}
                selected={activePanel === PANEL.DIARY}
                data-story={PATH.DIARY}
                text='Дневник'
            >
                <Icon28ArticleOutline />
            </TabbarItem>
            <TabbarItem
                onClick={onPageChange}
                selected={activePanel === PANEL.LIBRARY}
                data-story={PATH.LIBRARY}
                text='Библиотека знаний'
            >
                <Icon28BookSpreadOutline />
            </TabbarItem>
        </Tabbar>
    );
};
