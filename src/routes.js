import RaffleReveal from './views/RaffleReveal';
import Success from './views/Success';
import Failed from './views/Failed';

const secRoutes = [
  {
    path: '/raffle-reveal', name: 'RaffleReview', component: RaffleReveal
  },
  {
    path: '/success', name: 'Success', component: Success
  },
  {
    path: '/failed', name: 'Failed', component: Failed
  }
];

export {
  secRoutes,
};