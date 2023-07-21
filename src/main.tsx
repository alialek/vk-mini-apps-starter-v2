import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import bridge from '@vkontakte/vk-bridge';
import { AdaptivityProvider, AppRoot, ConfigProvider } from '@vkontakte/vkui';
import { RouterProvider } from '@vkontakte/vk-mini-apps-router';
import { router } from './router/index.tsx';
import '@vkontakte/vkui/dist/vkui.css';

bridge.send('VKWebAppInit');

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <ConfigProvider>
            <AdaptivityProvider>
                <AppRoot>
                    <RouterProvider router={router}>
                        <App />
                    </RouterProvider>
                </AppRoot>
            </AdaptivityProvider>
        </ConfigProvider>
    </React.StrictMode>
);
