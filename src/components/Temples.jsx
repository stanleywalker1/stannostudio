import React from 'react'
import temples from '../assets/temples.png'


const Temples = () => {

  return (
    <div name='temples' className='w-full h-full bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-full'>

             <div className='mt-[80px] sm:text-right text-2xl font-bold font-mono'>
              <p>THE PAST SYNAGOGUES OF NYC</p>
            </div>


                <div className="flex flex-wrap lg:w-1/2 p-3 md:w-full ">

                    <img alt="temples" className="block object-cover object-left-top w-full h-full rounded-lg shadow-md shadow-[#474a4d]"
                        src={temples}/>
                </div>
                
                
              

                <div className='pt-2 text-center'>
                        <a href="https://nyc-lostsynagogues.netlify.app/" target="_blank" rel="noopener noreferrer">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:opacity-40 text-gray-700 font-bold text-lg'>
                                    Live Demo
                                    </button>
                                </a>
                        <a href="https://github.com/stanleywalker1/nyc-synagogue-map" target="_blank" rel="noopener noreferrer">
                            <button className='text-center rounded-lg px-4 py-3 m-2 bg-white hover:opacity-40 text-gray-700 font-bold text-lg'>
                            Github
                            </button>
                        </a>
                            
                        </div>
            
            <div className='p-10 sm:text-left sm:p-15 text-1xl font-mono'>
                <p className='pr-7 pl-7 sm:text-left text-1xl font-mono'>Dec 13, 2022</p>
                <p className='pt-1 pb-5 pr-7 pl-7 sm:text-left text-1xl font-mono'>Background and analysis</p>
                <p className='paragraph-t text-1xl font-mono'>
                The website displays 79 synagogues in New York City that have been repurposed, such as being converted into other religious places of worship, private residences, businesses, restaurants, education, art, and governmental buildings. The synagogues are shown on a map, and visitors can click on each one to reveal more information about its origins and the current occupants (as of 2013). The website's purpose is to document the adaptive reuse of these historical buildings and analyze historical trends, as well as provide a resource for those interested in the Jewish history of New York City. This website was developed as my final project in the course Jews of New York, taught by Professor Sandra Fox at New York University.
                </p>
                <p className='paragraph-t text-1xl font-mono'></p>
                <p className='paragraph-t text-1xl font-mono'>
                  I independently collected the data displayed on the map from Ellen Levitt's book, The Lost Synagogues of Manhattan, during a visit to the Center for Jewish History. This book documents the architectural and cultural history of synagogues in Manhattan, and provides detailed information about each building, including its original purpose and how it has been repurposed (as of 2013). We are grateful to Ellen Levitt for her extensive research and for sharing her knowledge with us. Link to her book can be found here: 
                 </p>
                 <a href="https://www.avotaynu.com/books/LostSynagoguesManhattan.htm" className="font-size: large;
                    color: cornflowerblue;" target="_blank" rel="noopener noreferrer">The Lost Synagogues of Manhattan by Ellen Levitt</a>
                 <p className='paragraph-t text-1xl font-mono'></p>
              <p className='paragraph-t text-1xl font-mono'>
                 In the mid-2000s, writer and researcher Ellen Levitt began investigating abandoned synagogues in New York City that had been turned into other buildings, such as churches, schools and residential homes. Ellen studied records at the New York City Municipal Archives, which contained information on hundreds of synagogues in the city, many of which had closed. Ellen continued to track down and photograph the abandoned buildings, often asking current tenants about their histories. She has since written three volumes on the topic of abandoned synagogues, and has also investigated the phenomenon in other cities. She is passionate about documenting Jewish history, and also interested in architecture and decorative arts. She is a veteran teacher and livelong resident of Brooklyn, New York. 
              </p>
              <p className='paragraph-t text-1xl font-mono'></p>
              <p className='paragraph-t text-1xl font-mono'>
                Ellen’s book illuminates the Jews of New York by providing information about the history and evolution of Jewish communities in the city.  It does this through documenting when and why synagogues were built, and when and why they were closed or repurposed, providing insight into the demographics, migration patterns and other factors that have shaped the Jewish community in New York City over time. In regards to New York Jewry, I find this book to provide insight to the changing composition and size of the Jewish community in the city, the Jewish migration patterns impact on synagogues, and the ways in which Jewish religious and cultural practices have adapted to changing circumstances. I also find the repurposed synagogues to highlight the connections between the Jewish community and other religious and ethnic groups in New York City (with new religious centers making up over 30% of repurposed synagogues), and the ways in which Jewish history and heritage have been both preserved and destroyed, with fancy private residences and even overpriced Lower East Side bars like Cafe Mazcal. 
              </p>
            </div>
        </div>
    </div>
  )
}

export default Temples