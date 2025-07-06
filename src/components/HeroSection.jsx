
import { ArrowDown } from "lucide-react"
export const HeroSection = () =>{
    return <section id="hero"
    className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
<div className="container max-w-4xl mx-auto text-center z-10">
<div className="space-y-6">
<h1 className="text-4xl md:text-4xl font-bold tracking-tight">
  <span className="opacity-30 animate-fade-in">Hi, I am</span>
  <span className="text-primary ml-3 typewriter"> Shubhayu Barua...</span>
</h1>


<p className="text-lg md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-4"> 
     I'm a CS major student , building useful things with code is my passion.
     I love turning ideas into AI-powered tools that make daily life easier.

</p>
<div className=" pt-4 opacity-0 animate-fade-in-delay-4">
<a href="#projects" className="cosmic-button">
View My Work

</a>
</div>

</div>


</div>

<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce ">
<span className="animate-fade-in-delay-4">scroll

</span>
 <ArrowDown className=" animate-fade-in-delay-4 h-5 w-5 text-primary" />   {/*//ArrowDown is a component of lucide react */}



</div>


    </section>
}