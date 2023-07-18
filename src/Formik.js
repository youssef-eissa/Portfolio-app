import * as Yup from 'yup'
import { useFormik } from 'formik'

const email="/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/"
const valid = Yup.object().shape({
    email: Yup.string().email("Invalid Email Address").required("Required").matches(email)
})

 export function Validition() {
    const formik = useFormik({
        validationSchema:valid
    })
    
}
