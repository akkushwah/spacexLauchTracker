import React from 'react';

function LaunchList({ upcomingLaunches, pastLaunches }) {
  return (
    <div id="launchlist" className='launchlist'>
      <div className='list-container'>
        <div className='upcoming'>
          <h1>Upcoming Launches</h1>
          <div className='container'>
            {upcomingLaunches.map((val, i) => (
              <div key={i} className='list'>
                <div className='img-div'>
                  <img src={val.links.mission_patch} alt="Mission patch" />
                </div>
                <div className='launch-details'>
                  <h2>{val.mission_name}</h2>
                  <p><i>Rocket Name: </i>{val.rocket.rocket_name}</p>
                  <p><i>Launch site: </i>{val.launch_site.site_name_long}</p>
                  <p><i>Launch Year: </i>{val.launch_year}</p>
                  <p><i>Launch Success: </i>{val.launch_success ? "Successful" : "Failed"}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className='past-launch' id="past">
          <h1>Past Launches</h1>
          <div className='container'>
            {pastLaunches.map((val, i) => (
              <div key={i} className='past-list'>
                <div className='img-div'>
                  <img src={val.links.mission_patch} alt="Mission patch" />
                </div>
                <div className='launch-details'>
                  <h2>{val.mission_name}</h2>
                  <p><i>Rocket Name: </i>{val.rocket.rocket_name}</p>
                  <p><i>Launch site: </i>{val.launch_site.site_name_long}</p>
                  <p><i>Launch Year: </i>{val.launch_year}</p>
                  <p><i>Launch Success: </i>{val.launch_success ? "Successful" : "Failed"}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LaunchList;
