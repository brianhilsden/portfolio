import React from 'react'
import CodePlayground from './playgroundClient';


export const metadata = {
    title: "Brian Omondi - Code Playground",
    description: "An interactive code playground to experiment with HTML, CSS, and JavaScript, showcasing my skills in full-stack development.",
    keywords: "code playground, interactive coding, HTML, CSS, JavaScript, full-stack development, web applications, React, Flask, PostgreSQL",
    author: "Brian Omondi",
    url: "https://yourwebsite.com/code-playground", 
  };


const page = () => {
  return (
    <div className='pt-2'>
      <CodePlayground/>
      
    </div>
  )
}

export default page
