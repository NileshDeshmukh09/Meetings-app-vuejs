import Router from 'vue-router';
import CalenderPage from '../components/CalenderPage';
import MeetingsPage from '../components/MeetingsPage';
import FilterPage from '../components/FilterPage';
import TeamsPage from '../components/TeamsPage';
import AddMeet from '../components/AddMeet';
import SignupForm from '@/components/SignupForm';
import LoginForm from '@/components/LoginForm';

const router = new Router({
    mode: 'history',
    routes: [
        {
           name: 'SignupForm',
           path: '/',
           component: SignupForm
       },
        {
           name: 'LoginForm',
           path: '/login',
           component: LoginForm
       },
         {
            name: 'Calender',
            path: '/calender',
            component: CalenderPage
        },
        {
            name: 'MeetingsPage',
            path: '/meetings',
            component: MeetingsPage,
            children : [
                {
                    name: 'FilterPage',
                    path: '/',
                    component: FilterPage
                },
                {
                    name: 'AddMeet',
                    path: 'add',
                    component: AddMeet
                },
            ]
        },
        {
            name: 'TeamsPage',
            path: '/teams',
            component: TeamsPage
        },
    ]
});

export default router;