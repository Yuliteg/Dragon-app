import { useGlobalContext } from '../../context';
import { InformationWrapper } from './InformationWrapper';

const Information = () => {

    const {space, images, height, diameter, launchMass, returnMass} = useGlobalContext();

    return (
        <>
  <InformationWrapper>
     <div className="dragon-image">
             <img src={images[0]} alt="dragon-img" />
          </div>
          <div className="dragon-desc">
             <p className="desc-title">Information</p>

              <div className="wrapper">
                <p className="info">name:</p>
                <p className="data">{space.name}</p>
              </div>
              <div className="wrapper">
                <p className="info">height:</p>
                <p className="data">{height.meters}m / <span>{height.feet} ft</span></p>
              </div>
              <div className="wrapper">
                <p className="info">diametr:</p>
                <p className="data">{diameter.meters}m / <span>{diameter.feet} ft</span></p>
              </div>
              <div className="wrapper">
                <p className="info">launch payload mass:</p>
                <p className="data">{launchMass.kg} kg / <span>{launchMass.lb} lb</span></p>
              </div>
              <div className="wrapper">
                <p className="info">return payload mass:</p>
                <p className="data">{returnMass.kg} kg / <span>{returnMass.lb} lb</span></p>
              </div>
              <div className="wrapper">
                <p className="info">wikipedia link:</p>
                <p className="data"><a href={space.wikipedia} target="_blank">wikipedia</a></p>
              </div>
          </div>
  </InformationWrapper>
     </>
    )
    }

  export default Information

