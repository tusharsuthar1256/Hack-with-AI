import Companionscards from '@/components/Companionscards'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { Button } from '@/components/ui/button'
import { recentSessions } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <main >
      <h1 className='text-2xl underline'>Popular Companions</h1>
      <section className='home-section'>
        <Companionscards
          id='123'
          name="Neura the Brainy Explorer"
          topic="Neuroscience"
          subject="Science"
          duration={45}
          color="#ffda6e"
        />
        <Companionscards
          id='456'
          name="Linguo the Language Learner"
          topic="Linguistics"
          subject="Language Arts"
          duration={30}
          color="#6eafff"
        />
        <Companionscards
          id='789'
          name="Mathilda the Math Mentor"
          topic="Mathematics"
          subject="Math"
          duration={60}
          color="#ff6e6e"
        />
       
      </section>

      <section className='home-section'>
        <CompanionsList
        title="Recently completed sessions"
        companions={recentSessions}
        classNames="w-2/3 max-lg:w-full"
        />
        <CTA/>
      </section>
    </main>
  )
}

export default Page