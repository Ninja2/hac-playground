import { enableProdMode } from '@angular/core';
import { platformBrowser } from '@angular/platform-browser';

import { AppModuleNgFactory } from './aot/app/app.module.ngfactory';
import { environment } from './environments/environment';

enableProdMode();

platformBrowser().bootstrapModuleFactory(AppModuleNgFactory);
