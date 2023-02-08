import './App.css'
import { 
  Box,
  Heading,
  Stack,
  Divider,
  Center
} from '@chakra-ui/react'
import { Candidate } from './components/Candidate';

function App() {
  const imgCandidate1 = 'https://commissio2.imgix.net/attachments/d25bb635-d9dd-4718-9bc9-0ba32e23846c/CHESTER_the_carnival_host.png?ixlib=rails-2.1.4&h=1000&fit=fillmax&s=9acc1a4217aeb3e96a3f5bb3a32088e2';
  const imgCandidate2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvx6gZTFtH_ZcmdVyETPV1CB9-0riBmm4Yfw&usqp=CAU';
  const descCandidate1 = 'Texto o url de la propuesta 1';
  const descCandidate2 = 'Texto o url de la propuesta 2';
  return (
    <div className="App">
      <Box>
        <Box alignItems='center' margin='10px'>
          <Heading fontFamily='Montserrat' letterSpacing='0.5px'>
            Sistema de Votaciones
          </Heading>
          <Center p={5}>
            <Divider borderColor='blue' />
          </Center>
        </Box>
        <Stack justify='center' direction={['column', 'row']} spacing='50px'>
          <Candidate option={1} votos={30} imgCandidate={imgCandidate1} descCandidate={descCandidate1}/>
          <Candidate option={2} votos={40} imgCandidate={imgCandidate2} descCandidate={descCandidate2}/>
        </Stack>
      </Box>
    </div>
  )
}

export default App
