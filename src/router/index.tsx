import { RoutesConfig, createHashRouter, createPanel, createRoot, createView } from '@vkontakte/vk-mini-apps-router';
import { DEFAULT_ROOT, DEFAULT_VIEW, PATH, PANEL } from '../utils/constants/router';

export const routes = RoutesConfig.create([
    createRoot(DEFAULT_ROOT, [
        createView(DEFAULT_VIEW, [
            createPanel(PANEL.DAILY_WISH, PATH.DAILY_WISH),
            createPanel(PANEL.DIARY, PATH.DIARY),
            createPanel(PANEL.LIBRARY, PATH.LIBRARY),
        ]),
    ]),
]);

const router = createHashRouter(routes.getRoutes());

export { router };
