/* istanbul ignore file */

import {
  Context,
  useUserFactory,
  UseUserFactoryParams
} from '@vue-storefront/core';
import { User } from '@vue-storefront/boilerplate-api';

// @todo useUser

const params: UseUserFactoryParams<User, any, any> = {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  load: async (context: Context) => {
    console.log('Mocked: loadUser');
    return null;
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  logOut: async (context: Context) => {
    console.log('Mocked: logOut');
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  updateUser: async (context: Context, { currentUser, updatedUserData }) => {
    console.log('Mocked: updateUser');

    return {
      ...currentUser,
      ...updatedUserData
    };
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  register: async (context: Context, { email, password, firstName, lastName }) => {
    console.log('Mocked: register');

    return {
      firstName,
      lastName,
      email
    };
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  logIn: async (context: Context, { username, password }) => {
    console.log('Mocked: logIn');

    return {
      firstName: 'First',
      lastName: 'Last',
      email: username
    };
  },

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  changePassword: async (context: Context, { currentUser, currentPassword, newPassword }) => {
    console.log('Mocked: changePassword');
    return currentUser;
  }
};

export default useUserFactory<User, any, any>(params);
