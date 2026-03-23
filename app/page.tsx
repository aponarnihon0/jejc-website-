import { Hero } from "@/components/sections/hero"
import { Guide } from "@/components/sections/guide"
import { Goal } from "@/components/sections/goal"
import { Chairman } from "@/components/sections/chairman"
import { Gallery } from "@/components/sections/gallery"
import { Services } from "@/components/sections/services"
import { Process } from "@/components/sections/process"
import { Courses } from "@/components/sections/courses"
import { FAQ } from "@/components/sections/faq"
import { Contact } from "@/components/sections/contact"

export default function Home() {
  return (
    <>
      <Hero />
      <Guide />
      <Goal />
      <Chairman />
      <Gallery />
      <Services />
      <Process />
      <Courses />
      <FAQ />
      <Contact />
    </>
  )
}
