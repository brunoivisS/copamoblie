
import { Text,Center, Icon } from "native-base";
import Logo from '../assets/logo.svg';
import { Button } from "../components/button";
import { Fontisto} from '@expo/vector-icons'
import {useAuth}   from '../hooks/userAuth';

export function Signin(){
   const {signIn, user} = useAuth();

    return (
        <Center flex={1} bgColor="gray.900" p={7}>
            <Logo width={212} height={40}/>
            <Button mt={12} leftIcon={<Icon as={Fontisto} name="google" color="white" size="md" />}
            title="Entrar com o Google"
            type="SECONDARY" 
            onPress={signIn}
            />

            <Text color="white" textAlign="center" mt={4}>
                Não utilizamos nenhuma informação além do seu {'\n'} e-mail para criação de sua conta.
            </Text>

        {/* <Text color="blue.300" fontSize="47" fontFamily="">
                SignIn  
          </Text> */}
      </Center>
)
}

   