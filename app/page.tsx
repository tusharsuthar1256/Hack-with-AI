import Companionscards from '@/components/Companionscards'
import CompanionsList from '@/components/CompanionsList'
import CTA from '@/components/CTA'
import { getAllCompanions, getRecentSessions } from '@/lib/actions/companion.action'
import { getSubjectColor } from '@/lib/utils'
import React from 'react'

const Page = async() => {

  const companions = await getAllCompanions({limit:3});
  const recentSessionCompanions = await getRecentSessions(10);



  return (
    <main >
      <h1 className='text-2xl underline'>Popular Companions</h1>
      <section className='home-section'>

        {companions.map((companion) => (
              <Companionscards
          key={companion.id}
          {...companion}
          color={getSubjectColor(companion.subject)}
        />
        ))}
      
      
       
      </section>

      <section className='home-section'>
        <CompanionsList
        title="Recently completed sessions"
        companions={recentSessionCompanions}
        classNames="w-2/3 max-lg:w-full"
        />
        <CTA/>
      </section>
    </main>
  )
}

export default Page