import { 
    Card,  
    CardHeader,
    CardBody, 
    CardFooter,
    Stack,
    Heading,
    Divider,
    Button,
    Image,
    Text,
    Center
  } from '@chakra-ui/react'

export const Candidate = ({
  option, 
  votos,
  imgCandidate,
  descCandidate
}) => {
    return(
        <Card maxW='md' width='30%'>
          <CardHeader>
            <Text fontSize='xl'>
              <Text as='b'>Votos: </Text>
              {votos}
            </Text>
          </CardHeader>
          <Divider color='#eeeeee'/>
          <CardBody>
            <Stack mt='2' spacing='4'>
              <Center> 
                <Image
                    borderRadius='full'
                    src= {imgCandidate}
                    alt='Green double couch with wooden legs'
                    width='200px'
                    height='200px'
                  />
              </Center>
              <Heading size='md'>
                {`Opción: ${option}`}
              </Heading>
              <Text>
                {descCandidate}
              </Text>
            </Stack>
          </CardBody>
          <CardFooter justify='center'>
            <Button variant='solid' colorScheme='purple'>
              Votar
            </Button>
          </CardFooter>
        </Card>
    )
}