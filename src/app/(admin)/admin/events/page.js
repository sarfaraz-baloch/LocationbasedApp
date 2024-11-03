import EventsTable from '@/components/Events/Events'
import React from 'react'

function page() {
  return (
    <div className="flex justify-center items-center h-screen ">
      {/* <h1>Events</h1> */}
      <EventsTable/>
    </div>
  )
}

export default page
