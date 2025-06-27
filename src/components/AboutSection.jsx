// src/components/AboutSection.jsx
import React from "react";
import {BriefcaseBusiness,User, Code} from "lucide-react"

// import { techStack } from "../lib/techStack";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* === Personal Intro === */}
          <div className="space-y-6">
          <h3 className="text-2xl font-semibold">
A passionate Web Developer & AI/ML enthusiast 
              </h3>

<p className="text-muted-foreground">

I rapidly adapt to new technologies and apply them to real-world challenges. 
Every line of code I write is focused on building products that make life easier


</p>


<div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
<a href="#contact" className="cosmic-button">

Want to know more about me ?

</a>
<a href="#contact" className="cosmic-button">

Download CV 

</a>



</div>




            {/* <p>
           I addapt newtechnologies and learn apply those technologies 
              Every line of code I write has one goal — to make life easier.
            </p> */}
            {/* <p className="text-muted-fo" >
                  A passionate Web Developer & AI/ML enthusiast 
                  </p> */}
              {/* <span className="opacity: 0.8;">(If logos appear dark, hover over them to reveal the technology.)</span> */}

          
          
          
          
          </div>

<div className="grid grid-cols-1 gap-6">

{/* FOR CODE PORTION */}

<div className="gradient-border p-6 card-hover">
<div className="flex items-start gap-4">
    <div className="p-3 rounded-full bg-primary/10">
    <Code className="h-6 w-6 text-primary"/>
    
    </div>
<div className="text-left">
<h4 className="font-semibold text-lg">Web Development </h4>
<p className="text-muted-foreground">
    Creating responsive websites and web applications with modern frameworks
</p>


</div>



</div>
</div>

{/* //FOR USER PORTION */}

<div className="gradient-border p-6 card-hover">

<div className="flex items-start gap-4">
    <div className="p-3 rounded-full bg-primary/10">
    <User className="h-6 w-6 text-primary"/>
    
    </div>
<div className="text-left">
<h4 className="font-semibold text-lg">Web Development </h4>
<p className="text-muted-foreground">
    Creating responsive websites and web applications with modern frameworks
</p>


</div>



</div>


</div>

{/* //For BREIFCASE PORTION  */}



<div className="gradient-border p-6 card-hover">

<div className="flex items-start gap-4">
    <div className="p-3 rounded-full bg-primary/10">
    <BriefcaseBusiness className="h-6 w-6 text-primary"/>
    
    </div>


    <div className="text-left">
<h4 className="font-semibold text-lg">Web Development </h4>
<p className="text-muted-foreground">
    Creating responsive websites and web applications with modern frameworks
</p>


</div>
</div>

</div>




</div>





          {/* === Tech Stack Grid === */}
          {/* <div>
            <h3 className="text-xl font-semibold mb-4 text-center md:text-left">Tech Stack</h3>
            <div className="flex flex-wrap justify-center md:justify-start gap-6">
              {techStack.map((tech) => (
                <div
                  key={tech.name}
                  className="group w-16 h-16 flex items-center justify-center hover:animate-bounce transition-transform duration-300"
                  title={tech.name}
                >
                  <img
                    src={tech.logo}
                    alt={tech.name}
                    className="w-10 h-10 object-contain"
                  />
                </div>
              ))}
            </div> */}
       
       
       
       
       
       
       
       
       
       
        </div>
      </div>
    </section>
  );
};
