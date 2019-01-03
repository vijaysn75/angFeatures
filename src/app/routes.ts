import {Routes} from '@angular/router';
import { EventsComponent } from './events/events.component';
import { EventsListComponent } from './events-list/events-list.component';

export const appRoutes:Routes = [
    {path:'Events', component: EventsListComponent},
    {path:'Link2', component: EventsComponent}
];