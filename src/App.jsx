
import {Center, Flex, Paper, TextInput, Title,Button} from '@mantine/core'
import './App.css'
import ReviewCard from "./ReviewCard.jsx";
import {useEffect, useRef} from "react";

export default function App() {
  const inp=useRef()
  {/* Changing input background color and border color with useRef*/}
  useEffect(()=>{
    inp.current.style.backgroundColor='#262538'
    inp.current.style.borderColor='#2f2d41'
    },)
  {/*Data for tag buttons and  review cards to map them */}
  const btnTitles=['Experience','Quality','Design','Size','Features','Value','Replacement']
  const reviews=[{avatar:"J",name:'Jesse',Review:"Gourgeous design! Even more responsive than the previous version. A pleasure to use"},
                 {avatar:"A",name:'Alice Banks', Review: 'The device has a clean design, and the metal housing feels sturdy in my hand. '}]
return(
  <Center h="100vh" w="100vw" bg='#1d1c2d'>  {/* Main content box */}
    <Paper bg='#211f32' h='90vh' w='25vw' radius='10px' >  {/* Inner box */}
    <Flex  h='100%'  justify='center' align='center' >    {/* Flex box to align items vertically */}
      <Flex h='95%'  w='80%'  direction='column' gap='5%'>
        <Title order={4}>Reviews</Title>
        <Flex direction='column' gap='8%' h='20%' rowGap='5%' >
        <TextInput ref={inp} size='xl' radius='md' placeholder='Search Reviews'></TextInput>
          <Flex wrap='wrap' gap='3%'>
            {btnTitles.map((item)=><Button size={'sm'} color='#1d1c2d'>{item}</Button>)}
          </Flex>
        </Flex>
        {reviews.map((item)=><ReviewCard avatar={item.avatar} name={item.name} review={item.Review}/>)} {/* Mapping the review card with thier static data */}
      </Flex>
      
      </Flex>
      
    </Paper>
    
  </Center>
)
}
