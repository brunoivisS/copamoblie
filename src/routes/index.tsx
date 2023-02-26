import { NavigationContainer } from '@react-navigation/native';
import {useAuth} from '../hooks/userAuth'

import { AppRoutes } from './app.routes';
import {Signin} from '../screens/signin'
import { Box } from 'native-base';
export function Rountes() {

    const {user } = useAuth();

    return (
        <Box flex={1} bg="gray.900">
        <NavigationContainer>
           {user.name ? <AppRoutes/> :<Signin/> }
        </NavigationContainer>
        </Box>
    )
}
