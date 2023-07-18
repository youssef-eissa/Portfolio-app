import { Box, Flex, HStack, Spacer, Icon, Breadcrumb, BreadcrumbItem, BreadcrumbLink, position } from "@chakra-ui/react"
import { EmailIcon, AtSignIcon } from '@chakra-ui/icons'
import { Projects } from "./Projects"
import { Contact } from "./Contact"
import { Link, Route, Routes } from "react-router-dom"
import { BsLinkedin , BsFacebook,BsInstagram,BsGithub,BsYoutube } from "react-icons/bs";
import ScrollIntoView from 'react-scroll-into-view'
import { useState, useEffect } from "react"



export function Header() {
    const [on,setOn]=useState("")
   useEffect(() => {
            function handlePosition() {
                if (window.scrollY > 945) {
                    setOn("on")
                    
                } else {
                    setOn("")
                }
            }

            window.addEventListener("scroll",handlePosition)
            return () => {
        window.removeEventListener("scroll",handlePosition)
    }
})
    return (
        <div className={`header ${on}`}>
            <Flex>
                <HStack margin="20px" spacing="500px">
                    <Flex>
                        <HStack spacing="10px">
                            <Breadcrumb separator="">
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="https://www.linkedin.com/in/youssef-eissa-875aa227b">
                                        <Icon color="white" as={ BsLinkedin} />
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="https://www.facebook.com/Youssef3issa">
                                        <Icon color="white" as={ BsFacebook} />
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="https://github.com/youssef3issa">
                                        <Icon color="white" as={ BsGithub} />
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="https://www.instagram.com/youssef3issa/">
                                        <Icon color="white" as={ BsInstagram} />
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                                <BreadcrumbItem>
                                    <BreadcrumbLink href="https://www.youtube.com/">
                                        <Icon color="white" as={ BsYoutube} />
                                    </BreadcrumbLink>
                                </BreadcrumbItem>
                            </Breadcrumb>
                    
                        </HStack>
                    </Flex>
                    <Spacer />
                    <Flex>
                        <HStack spacing="10px">
                            <Breadcrumb separator="">
                                <BreadcrumbItem cursor="pointer" color="white">
                                    <ScrollIntoView selector=".landing">Home</ScrollIntoView>
                                </BreadcrumbItem>
                                    <BreadcrumbItem cursor="pointer" color="white" >
                                            <ScrollIntoView  selector=".projects">Projects</ScrollIntoView>    

                                </BreadcrumbItem>
                                <BreadcrumbItem cursor="pointer" color="white">
                                    <ScrollIntoView selector=".contact">Contact Me</ScrollIntoView>
                                </BreadcrumbItem>
                            
                            </Breadcrumb>


                        </HStack>
                </Flex>

                </HStack>
            </Flex>

        </div>
        
        
    )
}
