import {ModuleWithProviders, NgModule} from '@angular/core';

import {LoginPageComponent} from '../auth/login-page/login-page.component';
import { AuthRoutingModule } from './auth-routing.module';
import {SharedModule} from '../shared/shared.module';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import { reducer } from './auth.reducer';
import {AuthEffects} from './auth.effects';
import {AuthService} from './auth.service';
import {AuthGuard} from './auth-guard.service';
// TODO: why circular reference between two modules, and the #2 one never get used

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [LoginPageComponent],
})
export class AuthModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: RootAuthModule,
      providers: [AuthService, AuthGuard]
    }
  }
}

@NgModule({
  imports: [
    AuthModule,
    AuthRoutingModule,
    StoreModule.forFeature('auth', reducer),
    EffectsModule.forFeature([AuthEffects])
  ]
})
export class RootAuthModule { }
