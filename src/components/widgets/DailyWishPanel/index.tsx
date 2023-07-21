import { Icon56MentionOutline } from '@vkontakte/icons';
import { PanelHeader, Placeholder } from '@vkontakte/vkui';

export const DailyWishPanel = () => {
    return (
        <>
            <PanelHeader>Пожелание дня</PanelHeader>
            <Placeholder stretched icon={<Icon56MentionOutline />}>
                Страница
            </Placeholder>
        </>
    );
};
