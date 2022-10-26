import { app } from './components/app/app';

import './main.scss';

const appElement = document.querySelector<HTMLDivElement>('#app')!;
app(appElement);
