import { UseApiPrivate } from '../../services/apiPrivate';
import { AuthPayload } from '../types';
import { signIn, SignInOptions } from "next-auth/react";


export const AuthService = {
  register: (authPayload: AuthPayload) => UseApiPrivate().post('/register', authPayload),
  login: (authPayload: SignInOptions) => signIn('credentials', authPayload)
}