import { Icon } from '@iconify/react'
import heroImg from '../images/hero.png'
import booksImage from '../images/books.png'
import zavelinSiteImg from '../images/zavelin-site.webp'
import cinemaCatalogueAppImg from '../images/cinema-catalogue-app.webp'
import mikomikAppImg from '../images/mikomik-app.webp'
// import zenzshoesSiteImg from '../images/zenzshoes-site.webp'
import letsBusSiteImg from '../images/lets-bus-site.webp'
import batikTigaDaraSiteImg from '../images/batik-tiga-dara-site.webp'
import styles from './Home.module.css'
import { useEffect, useRef, useState } from 'react'

function App () {
  const topContent = useRef<HTMLDivElement>(null)
  const aboutContent = useRef<HTMLDivElement>(null)
  const experienceContent = useRef<HTMLDivElement>(null)
  const projectsContent = useRef<HTMLDivElement>(null)
  const contactContent = useRef<HTMLDivElement>(null)
  const [windowScrollPosition, setWindowScrollPosition] = useState(0)

  const scrollToContent = (elementRef: any) => {
    if (elementRef.current) {
      const scrollBarHeight = window.innerHeight * (window.innerHeight / document.body.offsetHeight)
      window.scrollTo({
        top: elementRef.current.offsetTop - scrollBarHeight
      })
    }
  }

  const isNavMenuActive = (elementRef: any) => {
    if (elementRef.current) {
      const scrollBarHeight = window.innerHeight * (window.innerHeight / document.body.offsetHeight)
      const offsetTop = elementRef.current.offsetTop - (2.8 * scrollBarHeight)
      const offsetBottom = offsetTop + elementRef.current.offsetHeight
      if (windowScrollPosition >= offsetTop && windowScrollPosition < offsetBottom) {
        return true
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', () => {
      setWindowScrollPosition(window.scrollY)
    })
  }, [])

  return (
    <div className={styles.app}>
      <nav className={styles.navbar}>
        <div className={`${styles.content_container} flex justify-between items-center py-[0.8rem] px-[1.8rem] md:px-[0.5]`}>
          <div className={styles.logo}>
            Vi <span className={styles.circle}></span>
          </div>
          <div className={`${styles.menu} hidden lg:block`}>
            <ul>
              <li>
                <a className={isNavMenuActive(topContent) ? styles.active : ''}
                  onClick={() => scrollToContent(topContent)}>
                  Home
                </a>
              </li>
              <li>
                <a className={isNavMenuActive(aboutContent) || isNavMenuActive(experienceContent) ? styles.active : ''}
                  onClick={() => scrollToContent(aboutContent)}>
                  About
                </a>
              </li>
              <li>
                <a className={isNavMenuActive(projectsContent) ? styles.active : ''}
                  onClick={() => scrollToContent(projectsContent)}>
                  Projects
                </a>
              </li>
              <li>
                <a className={isNavMenuActive(contactContent) ? styles.active : ''}
                  onClick={() => scrollToContent(contactContent)}>
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div className={`${styles.btn_download_container} hidden lg:flex`}>
            <a href="#" className={styles.btn_download}>
              Download CV <span className="text-2xl"><Icon icon="ant-design:cloud-download-outlined"/></span>
            </a>
            <div className={styles.reflection}></div>
          </div>
        </div>
      </nav>

      <div className={styles.content_container}>
        <div ref={topContent} className={`${styles.top_content} grid grid-cols-1 md:grid-cols-2 mx-12 md:mt-9 md:mx-16 lg:mx-44`}>
          <div className="flex justify-center md:justify-start">
            <div className={styles.left_text}>
              <div className={`${styles.circle_blur_1}`}></div>
              <div className={`${styles.circle_blur_2}`}></div>
              <div className="font-semibold mt-12 lg:mt-24 text-[2rem] lg:leading-[3.8rem] lg:text-[2.8rem]">
                <span className={styles.greeting}>Hey, I am</span><br/>
                <span className={styles.dev_name}>Zavier Ferodova</span>
              </div>
              <div className={`${styles.bottom} text-[0.9rem] lg:text-[0.95rem] mt-6`}>
                A boy experienced with software development,
                I love make something that useful for everyone.
              </div>
              <div className={`${styles.btn_more_container} mt-6`}>
                <button className={styles.btn_more} onClick={() => scrollToContent(aboutContent)}>
                  More <Icon icon="fa6-solid:chevron-down"/>
                </button>
                <div className={styles.reflection}></div>
              </div>
            </div>
          </div>
          <div className={`${styles.hero_section} flex justify-center md:justify-end mt-10 lg:mt-0`}>
            <div className="w-[14rem] md:w-[14rem] lg:w-[19rem]">
              <img src={heroImg}/>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.content_container}>
        <div ref={aboutContent} className={`${styles.about_content} mt-32 lg:mt-44 grid grid-cols-1 md:grid-cols-2 mx-8 md:ml-10 xl:ml-28 md:mr-4`}>
          <div>
            <div className={`${styles.heading} text-3xl leading-[2.5rem] font-semibold lg:text-4xl lg:leading-[3rem]`}>
              <span>Stuff</span><br/>
              <span>About Me</span>
            </div>
            <div className={`${styles.short_desc} mt-8 text-[0.9rem] lg:text-[0.95rem] md:w-3/4`}>
              Currently, I am an Informatics college student from Surakarta, Indonesia. I continue my study from Vocational High School with Software Engineering study program to college cause I want reach one of my dreams getting expert on part of Information Technology.
            </div>
          </div>
          <div className={`${styles.books_img_container} flex justify-end md:pt-4`}>
            <img className="w-full" src={booksImage}/>
          </div>
        </div>
      </div>

      <div className={styles.content_container}>
        <div ref={experienceContent} className={`${styles.skills_content} pt-12 lg:pt-24 grid grid-cols-1 md:grid-cols-2 mx-8 md:mx-10 lg:mx-28`}>
          <div>
            <div>
              <div className={styles.head_section}>
                <div className={`${styles.heading} text-3xl leading-[2.5rem] font-semibold lg:text-4xl lg:leading-[3rem]`}>
                  <span>Skills &amp;</span><br/>
                  <span>Experience</span>
                </div>
                <div className={`${styles.short_text} md:w-[60%] mt-4 text-[0.9rem] lg:text-[0.95rem]`}>
                  A specialist on full stack web development, build modern responsive site.
                </div>
              </div>
              <div className={`${styles.skills_section} mt-16`}>
                <div className={`${styles.heading} font-semibold text-[1.8rem]`}>Skills</div>
                <div className={`${styles.skills_set} mt-6 grid grid-cols-2`}>
                  <div className={styles.skill_item}>
                    <div className={`${styles.icon} p-3 text-3xl md:p-4 md:text-4xl`}>
                      <Icon icon="mdi:api"/>
                    </div>
                    <div className={`${styles.text} w-[80%] text-sm md:text-base`}>
                      REST API Development
                    </div>
                  </div>
                  <div className={styles.skill_item}>
                    <div className={`${styles.icon} p-3 text-3xl md:p-4 md:text-4xl`}>
                      <Icon icon="mdi:responsive"/>
                    </div>
                    <div className={`${styles.text} w-[80%] text-sm md:text-base`}>
                      Progressive Web Apps
                    </div>
                  </div>
                  <div className={styles.skill_item}>
                    <div className={`${styles.icon} p-3 text-3xl md:p-4 md:text-4xl`}>
                      <Icon icon="ic:round-android"/>
                    </div>
                    <div className={`${styles.text} w-[80%] text-sm md:text-base`}>
                      Native Android
                    </div>
                  </div>
                  <div className={styles.skill_item}>
                    <div className={`${styles.icon} p-3 text-3xl md:p-4 md:text-4xl`}>
                      <Icon icon="fa6-solid:database"/>
                    </div>
                    <div className={`${styles.text} w-[80%] text-sm md:text-base`}>
                      Database Design
                    </div>
                  </div>
                  <div className={styles.skill_item}>
                    <div className={`${styles.icon} p-3 text-3xl md:p-4 md:text-4xl`}>
                      <Icon icon="fa-brands:ubuntu"/>
                    </div>
                    <div className={`${styles.text} w-[80%] text-sm md:text-base`}>
                      Linux Ubuntu
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className={`${styles.experience_section} mt-8 md:mt-0`}>
            <div className={`${styles.heading} font-semibold text-[1.8rem] mb-8`}>
              Experience
            </div>
            <div className={`${styles.experience_set}`}>
              <div className={`${styles.experience_card} mb-4`}>
                <div className="w-[30%] flex-shrink-0">
                  <div className={`${styles.date} text-xs md:text-sm mt-2`}>Dec 2020 - Jan 2021</div>
                </div>
                <div className="ml-4 w-[70%]">
                  <div className={`${styles.role} text-base md:text-xl font-semibold`}>Menjadi Front End Web Developer Expert</div>
                  <div className={`${styles.company} text-xs md:text-sm mt-2`}>Dicoding Indonesia</div>
                </div>
              </div>
              <div className={`${styles.experience_card} mb-4`}>
                <div className="w-[30%] flex-shrink-0">
                  <div className={`${styles.date} text-xs md:text-sm mt-2`}>Apr 2020 - Sept 2021</div>
                </div>
                <div className="ml-4 w-[70%]">
                  <div className={`${styles.role} text-base md:text-xl font-semibold`}>Belajar Pengembangan Machine Learning</div>
                  <div className={`${styles.company} text-xs md:text-sm mt-2`}>Indosat Ooredoo Digital Camp</div>
                </div>
              </div>
              <div className={`${styles.experience_card} mb-4`}>
                <div className="w-[30%] flex-shrink-0">
                  <div className={`${styles.date} text-xs md:text-sm mt-2`}>Mar 2020 - Jun 2020</div>
                </div>
                <div className="ml-4 w-[70%]">
                  <div className={`${styles.role} text-base md:text-xl font-semibold`}>Membangun Progressive Web Apps</div>
                  <div className={`${styles.company} text-xs md:text-sm mt-2`}>Lintasarta DigiSchool <br/><br/></div>
                </div>
              </div>
              <div className={`${styles.experience_card} mb-4`}>
                <div className="w-[30%] flex-shrink-0">
                  <div className={`${styles.date} text-xs md:text-sm mt-2`}>Oct 2019 - Jan 2020</div>
                </div>
                <div className="ml-4 w-[70%]">
                  <div className={`${styles.role} text-base md:text-xl font-semibold`}>Menjadi Android Developer Expert</div>
                  <div className={`${styles.company} text-xs md:text-sm mt-2`}>Indosat Ooredoo Digital Camp <br/><br/></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles.content_container}>
        <div ref={projectsContent} className={`${styles.projects_content} mt-12 lg:mt-24 mx-8`}>
          <div className="flex flex-col items-center mb-12">
            <div className={`${styles.heading} text-3xl lg:text-4xl font-semibold`}>My Projects</div>
            <div className={`${styles.short_text} mt-4 text-center text-[0.9rem] lg:text-[0.95rem]`}>Three years experience on software development</div>
          </div>
          <div className={styles.projects_set}>
            <div className="flex flex-col md:flex-row gap-6 md:gap-8 mb-6 md:mb-8">
              <div className={styles.project_item}>
                <div className="bg-gray-200 rounded-lg md:rounded-2xl overflow-hidden h-[85%]">
                  <img src={zavelinSiteImg}/>
                </div>
                <div className={`${styles.project_name} text-base md:text-xl font-medium mt-2`}>
                  Zavelin
                </div>
              </div>
              <div className={styles.project_item}>
                <div className="bg-gray-200 rounded-lg md:rounded-2xl overflow-hidden h-[85%]">
                  <img src={letsBusSiteImg}/>
                </div>
                <div className={`${styles.project_name} text-base md:text-xl font-medium mt-2`}>
                  Let&apos;s Bus
                </div>
              </div>
              <div className={styles.project_item}>
                <div className="bg-gray-200 rounded-lg md:rounded-2xl overflow-hidden h-[85%]">
                  <img src={batikTigaDaraSiteImg}/>
                </div>
                <div className={`${styles.project_name} text-base md:text-xl font-medium mt-2`}>
                  Batik Tiga Dara
                </div>
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-6 justify-center md:gap-8">
              <div className={styles.project_item}>
                <div className="bg-gray-200 rounded-lg md:rounded-2xl overflow-hidden h-[85%]">
                  <img src={cinemaCatalogueAppImg}/>
                </div>
                <div className={`${styles.project_name} text-base md:text-xl font-medium mt-2`}>
                  Cinema Catalogue
                </div>
              </div>
              <div className={styles.project_item}>
                <div className="bg-gray-200 rounded-lg md:rounded-2xl overflow-hidden h-[85%]">
                  <img src={mikomikAppImg}/>
                </div>
                <div className={`${styles.project_name} text-base md:text-xl font-medium mt-2`}>
                  Mikomik
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer ref={contactContent} className={`${styles.contact} mt-12 lg:mt-24 p-8 pb-32 md:pb-8`}>
        <div className={styles.content_container}>
          <div className="mb-12">
            <div className={`${styles.heading} text-[1.75rem] md:text-[2rem] font-semibold`}>Contact Information</div>
            <div className={`${styles.short_text} text-sm md:text-lg`}>Have amazing idea or ask something ? Let&apos;s talk.</div>
          </div>
          <div className="px-4 md:px-8">
            <div className="flex items-center gap-4 mb-2">
              <div className="text-2xl">
                <Icon icon="fa6-brands:telegram"/>
              </div>
                <div className="text-base md:text-lg">
                  <a className="line-clamp-1" href="https://t.me/zavierferodova" target="_blank" rel="noopener noreferrer">t.me/zavierferodova</a>
                </div>
            </div>
            <div className="flex items-center gap-4 mb-2">
              <div className="text-2xl">
                <Icon icon="fa6-brands:instagram-square"/>
              </div>
              <div className="text-base md:text-lg">
                <a className="line-clamp-1" href="https://instagram.com/zavierferodova" target="_blank" rel="noopener noreferrer">
                  @zavierferodova
                </a>
              </div>
            </div>
            <div className="flex text-lg items-center gap-4 mb-2">
              <div className="text-2xl">
                <Icon icon="fa-brands:linkedin"/>
              </div>
              <div className="text-base md:text-lg">
                <a className="line-clamp-1" href="https://linkedin.com/in/zavierferodova" target="_blank" rel="noopener noreferrer">linkedin.com/in/zavierferodova</a>
              </div>
            </div>
            <div className={`${styles.divider} mt-6 w-full md:w-[80%]`}></div>
            <div className="mt-2 text-sm md:text-base">&copy; Designed by Zavier Ferodova Al Fitroh 2022</div>
          </div>
        </div>
        <div className={`${styles.circle_img} w-[14rem] h-[14rem] md:w-[18rem] md:h-[18rem] absolute right-0 bottom-0 transform translate-x-[6rem] translate-y-[7rem]`}></div>
      </footer>
    </div>
  )
}

export default App
