import { Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { UserProfileComponent } from '../../user-profile/user-profile.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { ChangePasswordComponent } from 'app/auth/change-password/change-password.component';


export const AdminLayoutRoutes: Routes = [
    { path: '', component: DashboardComponent },
    { path: 'change-password', component: ChangePasswordComponent },
    { path: 'edit-profile', component: EditProfileComponent },
    { path: 'user-profile',   component: UserProfileComponent },
];
