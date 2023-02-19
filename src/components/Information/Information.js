import { useGlobalContext } from '../../context';
import { InformationWrapper } from './InformationWrapper';
import { useEffect } from 'react';

const Information = () => {
  const { rocket, loading } = useGlobalContext();

  return (
    <>
      <InformationWrapper>
        {!loading &&
          <>
            <div className="dragon-image">
              <img src={rocket.flickr_images[0]} alt="dragon-img" />
            </div>
            <div className="dragon-desc">
              <p className="desc-title">Information</p>

              <div className="wrapper">
                <p className="info">name:</p>
                <p className="data">{rocket.name}</p>
              </div>
              <div className="wrapper">
                <p className="info">height:</p>
                <p className="data">{rocket.height_w_trunk.meters}m / <span>{rocket.height_w_trunk.feet} ft</span></p>
              </div>
              <div className="wrapper">
                <p className="info">diametr:</p>
                <p className="data">{rocket.diameter.meters}m / <span>{rocket.diameter.feet} ft</span></p>
              </div>
              <div className="wrapper">
                <p className="info">launch payload mass:</p>
                <p className="data">{rocket.launch_payload_mass.kg} kg / <span>{rocket.launch_payload_mass.lb} lb</span></p>
              </div>
              <div className="wrapper">
                <p className="info">return payload mass:</p>
                <p className="data">{rocket.return_payload_mass.kg} kg / <span>{rocket.return_payload_mass.lb} lb</span></p>
              </div>
              <div className="wrapper">
                <p className="info">wikipedia link:</p>
                <p className="data"><a href={rocket.wikipedia} target="_blank">wikipedia</a></p>
              </div>
            </div>
          </>
        }
      </InformationWrapper>
    </>
  )
}

export default Information

