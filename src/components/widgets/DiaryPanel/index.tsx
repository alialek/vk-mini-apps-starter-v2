import { Icon56MentionOutline } from '@vkontakte/icons';
import { PanelHeader, Placeholder } from '@vkontakte/vkui';

export const DiaryPanel = () => {
    return (
        <>
            <PanelHeader>Записи</PanelHeader>
            <Placeholder stretched icon={<Icon56MentionOutline />}>
                Страница
            </Placeholder>
        </>
    );
};
