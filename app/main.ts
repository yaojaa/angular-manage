
/*main.ts 启动入口文件*/
import {bootstrap}    from '@angular/platform-browser-dynamic';
import { HTTP_PROVIDERS } from '@angular/http';

import {AppComponent} from './app.component';

bootstrap(AppComponent,[HTTP_PROVIDERS]);
