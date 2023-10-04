import {InjectionToken, NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { appRoutes } from './app.routes';
import { NxWelcomeComponent } from './nx-welcome.component';
import {
  DynamicModalsModule,
  FuseAngularFormBuilderModule,
  InstanceRegistryService,
  ListBuilderModule
} from "@next-levels/next-framework";

export const INSTANCE_TOKEN = new InjectionToken<Map<string, any>>(
  'INSTANCE_TOKEN'
);
@NgModule({
  declarations: [AppComponent, NxWelcomeComponent],
  imports: [
    BrowserModule,
    FuseAngularFormBuilderModule.forRoot(''),
    ListBuilderModule.forRoot(),
    DynamicModalsModule,
    RouterModule.forRoot(appRoutes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [{
    provide: INSTANCE_TOKEN,
    useFactory: (registry: InstanceRegistryService) => {
      const instanceMap = new Map<string, any>();

      return instanceMap;
    },
    deps: [InstanceRegistryService],
    multi: true,
  }],
  bootstrap: [AppComponent],
})
export class AppModule {}
