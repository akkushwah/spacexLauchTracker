import React, { useState } from 'react';

function LaunchList({ upcomingLaunches, pastLaunches }) {
  const [selectedLaunch, setSelectedLaunch] = useState(null);
  const [dialogOpen, setDialogOpen] = useState(false);

  const handleOpenDialog = (launch) => {
    setSelectedLaunch(launch);
    setDialogOpen(true);
  };

  const handleCloseDialog = () => {
    setSelectedLaunch(null);
    setDialogOpen(false);
  };

  return (
    <div id="launchlist" className="launchlist">
      <div className="list-container">
        <div className="upcoming">
          <h1>Upcoming Launches</h1>
          <div className="container">
            {upcomingLaunches.map((val, i) => (
              <div
                key={i}
                className="list"
                onClick={() => handleOpenDialog(val)}
              >
                <div className="img-div">
                  <img src={val.links.mission_patch} alt="Mission patch" />
                </div>
                <div className="launch-details">
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

        <div className="past-launch" id="past">
          <h1>Past Launches</h1>
          <div className="container">
            {pastLaunches.map((val, i) => (
              <div
                key={i}
                className="past-list"
                onClick={() => handleOpenDialog(val)}
              >
                <div className="img-div">
                  <img src={val.links.mission_patch} alt="Mission patch" />
                </div>
                <div className="launch-details">
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


      {dialogOpen && selectedLaunch && (
        <div className="modal-overlay">
          <div className="modal-content">
            <button className="modal-close" onClick={handleCloseDialog}>&times;</button>
            <div className="modal-header">
              <img
                src={selectedLaunch.links.mission_patch}
                alt="Mission Patch"
                className="modal-img"
              />
            </div>
            <div className="modal-body">
              <h2>{selectedLaunch.mission_name}</h2>
              <p><i>Rocket Name:</i> {selectedLaunch.rocket.rocket_name}</p>
              <p><i>Launch Site:</i> {selectedLaunch.launch_site.site_name_long}</p>
              <p><i>Launch Year:</i> {selectedLaunch.launch_year}</p>
              <p><i>Launch Success:</i> {selectedLaunch.launch_success ? "Successful" : "Failed"}</p>
              {selectedLaunch.links.video_link && (
                <div className="modal-video">
                  <iframe
                    src={`https://www.youtube.com/embed/${selectedLaunch.links.video_link.split('v=')[1]}`}
                    title="Launch Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    mute
                  // allowFullScreen
                  ></iframe>
                </div>
              )}
              <p><strong>Details:</strong> {selectedLaunch.details ? selectedLaunch.details : 'No additional details available'}</p>
              <p><strong>Articles:</strong> <a href={selectedLaunch.links.article_link}></a>article_link</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default LaunchList;
