export const ProfileMenu = [
  {
    label: 'Profile',
    icon: 'heroicons-outline:user',
    link: '/me',
  },
];

export const topMenu = [
  {
    title: 'Home',
    icon: 'heroicons-outline:home',
    link: '/home',
    show: ['always'],

  },
  {
    title: 'Login',
    icon: 'heroicons-outline:login',
    link: '/app/home',
    ignoreTags: ['clientLoggedIn', 'userLoggedIn'],
    show: ['loggedout'],
    child: [
      {
        childtitle: 'Volunteer Login',
        childlink: '/users/login',
        childicon: 'heroicons-outline:login',
        show: ['loggedout'],
      },
      {
        childtitle: 'Client Login',
        childlink: '/clients/login',
        childicon: 'heroicons-outline:login',
        show: ['loggedout'],
      },
    ],
  },
  {
    title: 'Book Appointment',
    icon: 'heroicons-outline:calendar',
    link: '/appointments/book',
    show: ['client'],
  },
  {
    title: 'New Contract',
    icon: 'heroicons-outline:document-plus',
    link: '/contracts/new',
    show: ['user'],
  },
  {
    title: 'Find Client',
    icon: 'heroicons-outline:document-magnifying-glass',
    link: '/clients',
    show: ['user'],
  },
  {
    title: 'Deposit Accounting',
    icon: 'heroicons-outline:banknotes',
    link: '/accounting/deposits',
    show: ['user'],
  },
  {
    title: 'Appointments',
    icon: 'heroicons-outline:calendar',
    link: '/appointments',
    show: ['user'],
  },
  {
    title: 'User Management',
    icon: 'heroicons-outline:user',
    link: '/admin/users',
    show: ['user'],
  },
  {
    title: 'Appointment Types',
    icon: 'heroicons-outline:calendar',
    link: '/admin/appointment-types',
    show: ['user'],
  },
  {
    title: 'Appointment Settings',
    icon: 'heroicons-outline:adjustments-horizontal',
    link: '/admin/appointment-settings',
    show: ['user'],
  },
  {
    title: 'Submit Deposit Exchange',
    icon: 'heroicons-outline:arrows-right-left',
    link: '/admin/deposit-exchanges',
    show: ['user'],
  },
];
