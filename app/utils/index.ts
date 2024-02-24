import { TUser } from '@/app/types/App';

export function isCredentialMatched(credential: TUser, user: TUser): boolean {
    return credential.username === user.username && credential.password === user.password;
}