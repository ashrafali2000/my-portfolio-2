import React,{useState,useRef} from 'react'
import { motion } from 'framer-motion'
import emailjs from "@emailjs/browser"
import {slideIn} from "../utils/motion"
import {styles} from "../styles"
import {SectionWrapper} from "../hoc/index"
import {EarthCanvas} from "./canvas"
const Contact = () => {
  const formRef = useRef()
  const [form,setForm] = useState({name:"",email:"",message:""})
  const [loading,setLoading] = useState(false)
  const handleChange=(e)=>{
    const {name,value} = e.target
    setForm({...form,[name]:value})
  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    setLoading(true)
    emailjs.send("service_v6j7me5","template_6a110g6",{from_name:form.name,to_name:"AzaanUllah Khan",from_email:form.email,to_email:"azaanullahkhan291@gmail.com",message:form.message},'9xywnRdzC9lZ12-l8'
    ).then(()=>{
      setLoading(false)
      alert("Thanks for Submit")
      setForm({name:"",email:"",message:""})
    },(error)=>{
      alert("something went wrong")
    })
  }
  return (
    <div className='xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden'>
      <motion.div variants={slideIn("left","tween",0.2,1)} className='flex-[0.75] bg-black-100 p-8 rounded-2xl'>
        <p className={`${styles.sectionSubText}`}>Get In Touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>
        <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col gap-8'>
          <label className='flex flex-col'>
            <span className='mb-4 text-white font-medium'>Your Name</span>
            <input type="text" name='name' value={form.name} onChange={handleChange} placeholder='Whats your name' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'/>
          </label>
          <label className='flex flex-col'>
            <span className='mb-4 text-white font-medium'>Your Email</span>
            <input type="email" name='email' value={form.email} onChange={handleChange} placeholder='Whats your Email' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'/>
          </label>
          <label className='flex flex-col'>
            <span className='mb-4 text-white font-medium'>Your Message</span>
            <textarea rows={7} name='message' value={form.message} onChange={handleChange} placeholder='What do you what to say' className='bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outline-none border-none font-medium'/>
          </label>
          <button type='submit' className='bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary rounded-xl'>{loading?"Sending...":"Send"}</button>
        </form>
      </motion.div>
      <motion.div variants={slideIn("right","tweet",0.2,1)} className='xl:flex-1 xl:h-auto md:h-[550px] h-[350px]'>
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact,"contact")