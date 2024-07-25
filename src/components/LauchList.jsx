import React, { useState } from 'react'

function LauchList({ upcomingLauches, pastLaunches }) {

  const [isClicked, setClicked] = useState(false)

  return (

    <div id="lauchlist" className='launchlist'>
      <div className='list-container'>
        <div className='upcoming'>
          <h1>Upcoming Launches</h1>
          {/* Upcoming Launches */}
          <div className='container'>
            {
              upcomingLauches.map((val, i) => {
                return (
                  <div className='list'>
                    <div className='img-div'>
                      <img src={val.links.mission_patch
                      } alt="image is not available" />
                    </div>
                    <div className='lauch-deatils'>
                      <h2>{val.mission_name}</h2>
                      <p><i>Rocket Name: </i>{val.rocket.rocket_name} </p>
                      <p><i>Launch site: </i>{val.launch_site.site_name_long}</p>
                      <p><i>Launch Year: </i> {val.launch_year}</p>
                      <p><i>Launch Success: </i>{val.launch_success}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>

        {/* Past Launches */}
        <div className='past-launch' id="past">
          <h1>Past Launches</h1>
          <div className='container'>
            {
              pastLaunches.map((val, i) => {
                return (
                  <div className='past-list' onClick={() => {
                    console.log("Clicked", i)
                  }}>
                    <div className='img-div'>
                      <img src={val.links.mission_patch
                      } alt="image is not available" />
                    </div>
                    <div className='lauch-deatils'>
                      <h2> {val.mission_name}</h2>
                      <p><i>Rocket Name: </i>{val.rocket.rocket_name} </p>
                      <p><i>Launch site: </i>{val.launch_site.site_name_long}</p>
                      <p><i>Launch Year: </i> {val.launch_year}</p>
                      <p><i>Launch Success: </i>{val.launch_success ? "Successfull" : "Failed"}</p>
                    </div>
                  </div>
                )
              })
            }
          </div>
        </div>


      </div>
    </div>
  )
}

export default LauchList