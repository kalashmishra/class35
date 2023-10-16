gsap.set(".a",{opacity:0})
gsap.set(".c",{opacity:0})
gsap.set(".d",{opacity:0})

gsap.to(".a",{
    scrollTrigger:{
         trigger:"#home",
         start:"top -10%",
     //  markers:true,
         end:"bottom 25%",
         
         scrub:"1"
     },
     y:-80,
     fontSize:"75px",
     opacity:1,
     
  ease:"power1.out"
 
 })
 
  gsap.to(".c",{
    scrollTrigger:{
         trigger:"#home",
         start:"top -10%",
     //  markers:true,
         end:"bottom 25%",
         
         scrub:"1"
     },
     y:-80,
     fontSize:"75px",
     opacity:1,
     
  ease:"power1.out"
 
 })

 
 gsap.to(".b",{
    scrollTrigger:{
         trigger:"#home",
         start:"top -10%",
     //  markers:true,
         end:"bottom 25%",
         
         scrub:"1"
     },
     x:-160,
     
     
     
  ease:"power1.out"
 
 })
 gsap.to(".d",{
    scrollTrigger:{
         trigger:"#home",
         start:"top -10%",
     //  markers:true,
         end:"bottom 25%",
         
         scrub:"1"
     },
     x:230,
     
     opacity:1,
   
     
  ease:"power1.out"
 
 })
 gsap.to(".e",{
    scrollTrigger:{
         trigger:"#home",
         start:"top top",
         
         end:"bottom 40% ",
         scrub:"1"
     },
    
     opacity:0,

  ease:"power1.out"
 
 })

 gsap.to(".h",{
    scrollTrigger:{
         trigger:"#third",
         start:"top 60%",
        // markers:true,
 
         end:"center 70% ",
         scrub:"1"
     },
    
    rotate:0,
y:-130,
  ease:"power1.out"
 
 })
 gsap.to(".i",{
    scrollTrigger:{
         trigger:"#third",
         start:"top 30%",
        // markers:true,
 
         end:"center 70% ",
         scrub:"1"
     },
    

y:-130,
x:200,
  ease:"power1.out"
 
 })
 gsap.set(".j",{opacity:0,y:20,})
 gsap.to(".j",{
    scrollTrigger:{
        trigger:"#fourth",
        start:"top 70%",
  //  markers:true,

        end:"bottom 100% ",
        scrub:"1"
    },
  
    opacity:1,
    y:0,
    stagger:1,
    ease:"power1.out"
    
    
})

 
 