import React from 'react'

const Experience = () => {
      const work = [
    {
      id:1,
      position: "Cover Template Designer",
      duration: "2020-2021",
      company:"SVA Creative | United Kingdom",
      employer: "Silvia Istrate"
    },
    {
      id:2,
      position: "Graphic Designer",
      duration: "2020-2021",
      company:"LAPO Microfinance Bank | Nigeria",
      employer: "Abiola Olayande (Mrs)"
    },
    {
      id:3,
      position: "Creative Designer",
      duration: "2020-Present",
      company:"The Posh Organization | USA",
      employer: "Tyra Johnson-Brown"
    },
    {
      id:4,
      position: "Template Designer",
      duration: "2020-2021",
      company:"Newcustomers365 | USA",
      employer: "John & Sephanie McAllister"
    },
    {
      id:5,
      position: "Creative Designer",
      duration: "2020",
      company:"Your Digital Business Asset | USA",
      employer: "Markita Samuel / Lisa Alexander"
    },
    {
      id:6,
      position: "Youtube Thumbnail Designer",
      duration: "2021",
      company:"PresAfrica | Australia",
      employer: "Lorraine Dzeka"
    },
    {
      id:7,
      position: "Graphic Designer & Business Assistant",
      duration: "2021",
      company:"Womanpreneur | Australia",
      employer: "Lorraine Dzeka"
    },
    {
      id:8,
      position: "Graphic Designer & Business Assistant",
      duration: "2021",
      company:"Lemonaid Designs | Canada",
      employer: "Jeanette Kramer"
    },
    {
      id:9,
      position: "Graphic Designer & Business Assistant",
      duration: "2021",
      company:"P31 Studios/Art of Beauty | USA",
      employer: "Jeanette Kramer"
    },
  ]
  return (
    <div className='mt-20  text-darktext'>
          <h3 className='font-bold'>Experience</h3>
          <div className='sm:flex sm:flex-wrap sm:justify-between'>
            {work.map(w=>(
              <div key={w.id} className='mt-10 relative pl-8 before:block  before:w-[1px] before:h-full before:absolute before:bg-mainYellow before:inset-1 before:left-[.45rem] sm:w-[48%]  '>
                <div className='w-4 h-4 rounded-full border-2 border-mainYellow absolute top-0 left-0 bg-mainYellow hover:bg-black'></div>
                <p className='italic text-gray-400 font-thin'>{w.duration}</p>
                <p>{w.position}</p>
                <p>{w.company}</p>
              </div>
            ))}
        </div>
    </div> 
  )
}

export default Experience