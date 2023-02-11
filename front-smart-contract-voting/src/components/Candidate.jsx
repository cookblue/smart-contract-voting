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
    Center,
    ListItem,
    OrderedList,
    Box
  } from '@chakra-ui/react'

export const Candidate = ({
  option, 
  imgCandidate,
  descCandidate,
}) => {
    return(
        <Card maxW='md' width='30%'>
          <CardHeader>
            <Heading size='md'>
                {`Opción: ${option}`}
            </Heading>
          </CardHeader>
          <Divider color='#eeeeee'/>
          <CardBody>
            <Stack mt='2' spacing='4'>
            <Center> 
              <Image
                    src= {imgCandidate}
                    alt='Green double couch with wooden legs'
                    width='100px'
                    height='100px'
              />    
            </Center>
            <Box textAlign='initial'>
              Comprende:
                <OrderedList>
                  { 
                    descCandidate.map((e,index) =>{
                      return <ListItem key={index}>{e}</ListItem>
                    })
                  }
                </OrderedList>
            </Box>
            </Stack>
          </CardBody>
        </Card>
    )
}