import {Avatar, Button, Flex, Paper, Rating, Text, Title} from "@mantine/core";

export default function ReviewCard({avatar,name,review}){
    return(
        <Paper bg='#2c2b3f' h='30%' w='100%'>
            <Flex h='100%' direction='column' m='3%' gap='15%'>
            <Flex  justify='space-between' align='center' w='100%'>
                <Flex gap='5%' align='center' w='40%'  >
                <Avatar color='orange'>{avatar}</Avatar>
                <Text size={'md'} >{name}</Text>
                </Flex>
                <Rating defaultValue={5}/>
            </Flex>
                <Text >{review}</Text>
            <Flex justify='space-between'>
                <Text color={'#74718d'}>Feb 13, 2021</Text>
                <Button color={'#74718d'} variant={"outline"}>Share</Button>
            </Flex>
            </Flex>
        </Paper>
    )
}