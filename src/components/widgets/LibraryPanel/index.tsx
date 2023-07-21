import { Icon56MentionOutline } from '@vkontakte/icons';
import { PanelHeader, Placeholder } from '@vkontakte/vkui';

export const LibraryPanel = () => {
    return (
        <>
            <PanelHeader>База знаний</PanelHeader>
            <Placeholder stretched icon={<Icon56MentionOutline />}>Страница</Placeholder>
        </>
    );
};
