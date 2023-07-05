import { useGlobalContext } from '../../context';
import { InformationWrapper } from './InformationWrapper';

const Information = () => {
  const { rocket, loading } = useGlobalContext();

  return (
    <>
      {!loading && (
        <InformationWrapper>
          <div className="dragon-image">
            <img src={rocket.flickr_images[0]} alt="dragon-img" />
          </div>
          <div className="dragon-desc">
            <p className="desc-title">Information</p>

            <table className="rocket-table">
              <tbody>
                <tr>
                  <td>name:</td>
                  <td>{rocket.name}</td>
                </tr>
                <tr>
                  <td>height:</td>
                  <td>
                    {rocket.height_w_trunk.meters}m /{' '}
                    <span>{rocket.height_w_trunk.feet} ft</span>
                  </td>
                </tr>
                <tr>
                  <td>diameter:</td>
                  <td>
                    {rocket.diameter.meters}m /{' '}
                    <span>{rocket.diameter.feet} ft</span>
                  </td>
                </tr>
                <tr>
                  <td>launch payload mass:</td>
                  <td>
                    {rocket.launch_payload_mass.kg} kg /{' '}
                    <span>{rocket.launch_payload_mass.lb} lb</span>
                  </td>
                </tr>
                <tr>
                  <td>return payload mass:</td>
                  <td>
                    {rocket.return_payload_mass.kg} kg /{' '}
                    <span>{rocket.return_payload_mass.lb} lb</span>
                  </td>
                </tr>
                <tr>
                  <td>wikipedia link:</td>
                  <td>
                    <a href={rocket.wikipedia} target="_blank" rel="noreferrer">
                      Wikipedia
                    </a>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </InformationWrapper>
      )}
    </>
  )
}

export default Information

