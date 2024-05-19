import { Routes } from '@angular/router';
import { NotFoundComponent } from './common/not-found/not-found.component';
import { InternalErrorComponent } from './common/internal-error/internal-error.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { SignInComponent } from './authentication/sign-in/sign-in.component';
import { SignUpComponent } from './authentication/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './authentication/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './authentication/reset-password/reset-password.component';
import { LockScreenComponent } from './authentication/lock-screen/lock-screen.component';
import { ConfirmEmailComponent } from './authentication/confirm-email/confirm-email.component';
import { LogoutComponent } from './authentication/logout/logout.component';
import { HomeComponent } from './home/home.component';

export const routes: Routes = [
    {path: '', component: HomeComponent},
    {path: 'internal-error', component: InternalErrorComponent},
    {
        path: 'authentication',
        component: AuthenticationComponent,
        children: [
            {path: '', component: SignInComponent},
            {path: 'sign-up', component: SignUpComponent},
            {path: 'forgot-password', component: ForgotPasswordComponent},
            {path: 'reset-password', component: ResetPasswordComponent},
            {path: 'lock-screen', component: LockScreenComponent},
            {path: 'confirm-email', component: ConfirmEmailComponent},
            {path: 'logout', component: LogoutComponent}
        ]
    },
    // Here add new pages component

    {path: '**', component: NotFoundComponent} // This line will remain down from the whole pages component list
];