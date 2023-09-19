import { useAccount } from '../../hooks';

export const LogOutScreen = () => {
  const { logOut } = useAccount()
  logOut()
}
