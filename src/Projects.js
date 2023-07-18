import { Box, HStack, Flex,Image ,Text, Heading, Icon} from "@chakra-ui/react"
import p1 from './assets/photo1.jpg'
import p2 from './assets/photo2.jpg'
import p3 from './assets/photo3.jpg'
import p4 from './assets/photo4.jpg'
import {ArrowForwardIcon} from '@chakra-ui/icons'
export function Projects() {
    return (
        <div className="projects">
            <h2>Featured Projects</h2>
            <div className="projects-box">
                <Flex>
                    <HStack spacing="20px" wrap="wrap" >
                        <Box paddingBottom="5px" overflow="hidden" borderRadius="10px" bg="white" w="48%" >
                            <Image
                                src={p1}
                                
                        
                            />
                            <Box padding="5px" as="h1" color="black">
                            React Spacing
                            </Box>
                            <Text color="gray.500" fontSize="13px"  padding="5px">
handy tool belt to create amazing AR Components in React app with redux integration  via middleware

                            </Text>
                            <Text padding="5px"fontSize="12px" as="span"> See more <Icon as={ ArrowForwardIcon} /></Text>

                        </Box>
                        <Box paddingBottom="5px" overflow="hidden" borderRadius="10px" bg="white" w="48%">
                            <Image
                                src={p2}                            
                            />
                        <Box padding="5px" as="h1" color="black">
                            React Infinite Scroll
                            </Box>
                            <Text color="gray.500" fontSize="13px" padding="5px">A scrollable bottom sheet with virtualisation support, native animation at 60 FPS and fully implemented in JS land 
                            </Text>
                            <Text  padding="5px" fontSize="12px" as="span"> See more <Icon as={ ArrowForwardIcon} /></Text>
                            
                        </Box>
                        <Box paddingBottom="5px" overflow="hidden" borderRadius="10px" bg="white" w="48%">
                            <Image
                                src={p3}                            
                            />
                        <Box padding="5px" as="h1" color="black">
                        Photo Gallery
                            </Box>
                            <Text color="gray.500" fontSize="13px" padding="5px"> 
                                A One Stop shop for photographers to share and monetize  their photo, allowing them to have second sorce of income
                            </Text>
                            <Text  padding="5px" fontSize="12px" as="span"> See more <Icon as={ ArrowForwardIcon} /></Text>
                        </Box>
                        <Box paddingBottom="5px" overflow="hidden" borderRadius="10px" bg="white" w="48%">
                            <Image
                                src={p4}                            
                            />
                        <Box padding="5px" as="h1" color="black">
                        Event Planner
                            </Box>
                            <Text color="gray.500" fontSize="13px" padding="5px">A Mobile App for leisure seeker to discover  unique events and activities in their city with a few taps
                            </Text>
                            <Text   padding="5px" fontSize="12px" as="span"> See more <Icon as={ ArrowForwardIcon} /></Text>
                            
                        </Box>
                        

</HStack>
            </Flex>
        </div>
        </div>
    )
}