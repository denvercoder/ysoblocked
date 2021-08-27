import React from 'react'
import gearIcon from '../images/gear.png'

const DashboardPage = () => {
  return (
    <div>
      <main className="bg-blue-400">
        <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <div>
            <img className="h-4 w-4 ml-4" src={gearIcon} alt="Welcome Graphic" />
          </div>
          <div className="px-4 py-6 sm:px-0">
            <div>
              <p className="text-2xl">Block User @denvercoder?</p>
              <textarea placeholder="Enter Reason"></textarea>
              <button className="border-2 text-white px-4" type="submit">Block</button>
            </div>
            <div>
              <h2 className="text-xl">Most Recent Blocks</h2>
            </div>
            <div className="border-4 border-dashed border-gray-200 rounded-lg p-5">
              <p>@denvercoder</p>
              <p>@someperson</p>
              <p>@someotherperson</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export default DashboardPage
