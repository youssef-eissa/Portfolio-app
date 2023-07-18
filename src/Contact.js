import { useEffect, useReducer, useRef, useState } from "react"
import emailJS from '@emailjs/browser'
import { Validition } from "./Formik"

import {
Alert,
AlertIcon,
AlertTitle,
    AlertDescription,
    Spinner
} from '@chakra-ui/react'
import { type } from "@testing-library/user-event/dist/type"



export function Contact() {
    const [name, setName] = useState({
        value: "",
        isTouched:false
    })
    function reducer(state,action) {
    switch (action.type) {
        case "SPINNER": return { onn: state.onn = "inline-block",on:state.on,failAlert:state.failAlert,outline:state.outline,Nrequire:state.Nrequire ,marequire:state.marequire,merequire:state.merequire}
        case "NOSPINNER": return { onn: state.onn = "none",on:state.on,failAlert:state.failAlert,outline:state.outline,Nrequire:state.Nrequire ,marequire:state.marequire,merequire:state.merequire}
        case "FAIL": return { failAlert: state.failAlert="flex",onn:state.onn,outline:state.outline,on:state.on,Nrequire:state.Nrequire ,marequire:state.marequire,merequire:state.merequire}
        case "NOFAIL": return { failAlert: state.failAlert = "none",onn:state.onn,outline:state.outline,on:state.on,Nrequire:state.Nrequire,marequire:state.marequire ,merequire:state.merequire}
        case"OUTLINE":return{ outline: state.outline= "on",onn:state.onn,on:state.on,failAlert:state.failAlert,Nrequire:state.Nrequire,marequire:state.marequire ,merequire:state.merequire}
        case "NOOUTLINE": return { outline: state.outline = "",onn:state.onn,on:state.on,failAlert:state.failAlert,Nrequire:state.Nrequire,marequire:state.marequire,merequire:state.merequire }
        case"DONE":return{on:state.on="flex",onn:state.onn,failAlert:state.failAlert,Nrequire:state.Nrequire,marequire:state.marequire,merequire:state.merequire}
        case "NODONE": return { on: state.on = "none", onn: state.onn, failAlert: state.failAlert,Nrequire:state.Nrequire ,marequire:state.marequire,merequire:state.merequire}
        case "NAMEREQUIRE": return { Nrequire: state.Nrequire = "Require", onn: state.onn, failAlert: state.failAlert, on: state.on, outline: state.outline,marequire:state.marequire,merequire:state.merequire }
        case "MAILREQUIRE": return { marequire: state.marequire = "Require", onn: state.onn, failAlert: state.failAlert, outline: state.outline, on: state.on, Nrequire: state.Nrequire,merequire:state.merequire }
        case "MESSAGEREQUIRE" : return{merequire:state.merequire="Require",onn:state.onn,failAlert:state.failAlert,outline:state.outline,on:state.on,Nrequire:state.Nrequire,marequire:state.marequire}
        default:return state
    }
    }

    const [state, dispatch] = useReducer(reducer, {
        onn: "none",
        on: "none",
        alertDone: "",
        outline: "",
        failAlert: "none",
        Nrequire:"",
        marequire:"",
        merequire:"",
    })
    const nameRef = useRef(null)

    const [mail, setMail] = useState({
        value: "",
        isTouched:false
    })
    const [enquiry, setEnquiry] = useState("freelance")
    const [message, setMessage] = useState({
        value: "",
        isTouched:false
    })
    const form = useRef(null)
    function handleSubmit(e) {
    e.preventDefault()

        if (name.value && mail.value && message.value.length>=25 ) {
            sendEmail()
            dispatch({ type: "NOFAIL" })
        } else {
            dispatch({type:"NAMEREQUIRE"})
            dispatch({ type: "FAIL" })
            dispatch({type:"NODONE"})
            dispatch({ type: "OUTLINE" })
            dispatch({ type: "NOSPINNER" })
            dispatch({ type: "MAILREQUIRE" })
            dispatch({type:"MESSAGEREQUIRE"})
}
    }
    const [alertName,setAlertname]=useState("")

async function sendEmail() {
    try {
    emailJS.sendForm("service_ut343hb", "template_pgv9f7g", form.current, "p3XbgXn--SsI5f_1k")
            .then(() => {
                setAlertname(name.value)
                dispatch({type:"DONE"})
                dispatch({ type: "NOFAIL" })
                dispatch({ type: "NOSPINNER" })
                setMail({...mail,value:"",isTouched:false})
        setEnquiry("enquiry")
        setMessage({...message,value:"",isTouched:false})
        setName({ ...name, value: "", isTouched: false })
            setRequire("")
            }).catch(dispatch({type:"SPINNER"}))
    } catch (error) {
            dispatch({ type: "FAIL" })

    }
    }


    function SetAllert() {
    return (
    <Alert
status='success'
variant='subtle'
flexDirection='column'
alignItems='center'
justifyContent='center'
                textAlign='center'
                marginTop="-100px"
            height='200px'
            display={state.on}
        
>
<AlertIcon boxSize='40px' mr={0} />
<AlertTitle mt={4} mb={1} fontSize='lg'>
    All Good!
</AlertTitle>
<AlertDescription maxWidth='sm'>
    Thanks for your submission {alertName} , we will get back to you shortly!  </AlertDescription>
</Alert>
    )
    }
    function AlerttFail() {
            
        return (
            <Alert

  status='error'
  variant='subtle'
  flexDirection='column'
  alignItems='center'
  justifyContent='center'
                textAlign='center'
                marginTop="-100px"
                height='200px'
display={state.failAlert}

>
  <AlertIcon boxSize='40px' mr={0} />
  <AlertTitle mt={4} mb={1} fontSize='lg'>
    Oppss!
  </AlertTitle>
  <AlertDescription maxWidth='sm'>
Something Went Wrong  </AlertDescription>
</Alert>
        )
        }
    function NameAlertt() {
        return (
            <p className="namealert">Required</p>
        )
    }
    function MailAlertt() {
        return (
            <p className="mailalert">Invalid email address</p>
        )
    }
    function MessageAlertt() {
        return (
            <p className="mailalert">Required</p>
        )
    }
    function MessageAlertt1() {
        
        return (
            <p className="mailalert">Must be at least 25 characters</p>
            
        )
    }
    const [require,setRequire]=useState("")
    return (
        <div className="contact">
            <h1>Contact Me</h1>
            <form ref={form} onSubmit={handleSubmit} className="form">
                {(<SetAllert />)}
                {(<AlerttFail/>)}
                <div>
                        <label>Name</label>
                    <input
                        className={name.value.length===0?state.outline:""}
                        name="name"
                        value={name.value}
                        ref={nameRef}
                        type="text"
                        onChange={e => {
                            setName({ ...name, value: e.target.value })
                        
                        }}
                        onBlur={() => {
                            setName({ ...name, isTouched: true })
                        
                        }}
style={( name.isTouched && name.value.length===0?{borderColor:"red"}:{borderColor:"white"})}
                    />
                    
                    {name.isTouched && name.value.length === 0 ? (<NameAlertt />) : ""}
                    {name.value.length  === 0 && !name.isTouched ? <p className="mailalert">{ state.Nrequire}</p>:""}
                    
                </div>
                <div>
                    <label>Email Address</label>
                    <input
                        className={mail.value.length===0?state.outline:""}
                        name="email"
                        type="email"
                        value={mail.value}
                        onChange={e => {
                            setMail({...mail,value:e.target.value})
                        }}
                        onBlur={() => {
                            setMail({ ...mail, isTouched: true })
                        
                        }}
                        style={(mail.isTouched && mail.value.length === 0 ? { borderColor: "red" } : { borderColor: "white" })}
                    />
                    {mail.isTouched && mail.value.length === 0 ? (<MailAlertt />) : ""}
                    {mail.value.length === 0 && !mail.isTouched ? <p className="mailalert">{ state.marequire}</p>:""}
                </div>
                <div>
                    <label>Type Of enquiry</label>
                    <select name={enquiry} onChange={e => {
                        setEnquiry(e.target.value)
                        console.log(enquiry)
                    }} value={enquiry}>
                        <option  value="freelance">Freelance Project Proposal</option>
                        <option value="hire">Hiring</option>
                    </select>
                    
                </div>
                <textarea
                className={message.value.length===0?state.outline:""}
                    placeholder="Please tell me Your needs..."
                    name="message"
                    value={message.value}
                    onChange={e => {
                    setMessage({...message,value:e.target.value})
                    }}
                    onBlur={() => {
                        setMessage({...message,isTouched:true})
                    }}
                    onFocus={() => {
                        setMessage({...message,isTouched:true})
                    }}
style={(message.isTouched&&message.value.length<=25?{borderColor:"red"}:{borderColor:"white"})}
                ></textarea>
                {message.value.length === 0  && !message.isTouched ? <p className="mailalert">{ state.merequire}</p>:""}
                {message.isTouched && message.value.length <= 25 ? (<MessageAlertt1 />) : ""}
                <button  >Submit { <Spinner display={state.onn}/>}</button>
                
            </form>
            
    </div>
    )
}