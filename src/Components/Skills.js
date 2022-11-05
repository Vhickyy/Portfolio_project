import React from 'react'

const Skills = () => {
    const skills = [
    {
      id:1,
      name: "Templates",
      desc: "100%"
    },
    {
      id:2,
      name: "Social Media Covers",
      desc: "100%"
    },
    {
      id:3,
      name: "Publication Designs",
      desc: "100%"
    },
    {
      id:4,
      name: "E-book Covers",
      desc: "100%"
    },
    {
      id:5,
      name: "Brand Identity Designs",
      desc: "90%"
    },
    {
      id:6,
      name: "Flyers and Posters",
      desc: "100%"
    },
    {
      id:7,
      name: "Social Media Posts",
      desc: "100%"
    },
    {
      id:8,
      name: "Business Cards",
      desc: "100%"
    },
    {
      id:9,
      name: "Labels",
      desc: "100%"
    },
    {
      id:10,
      name: "Video Editting",
      desc: "80%"
    },
    {
      id:11,
      name: "Youtube Thumbnails",
      desc: "100%"
    },
  ]
  return (
     <div className='mt-20  text-darktext'>
          <h3 className='font-bold'>Skills</h3>
          <div className='sm:flex sm:flex-wrap sm:justify-between'>
            {skills.map(s=>(
           <div key={s.id} className='sm:w-[48%] mt-4'>
               <div className='flex justify-between '>
                 <p>{s.name}</p>
                 <p className='pt-[0.3rem]'>{s.desc}</p>
              </div>
              <div className='w-full bg-gray-500 h-4 rounded-full'>
               <div style={{width:`${s.desc}`}} className='bg-mainYellow h-4 rounded-full '></div>
              </div>
             </div>)
            )}
        </div>  
    </div>
  )
}

export default Skills