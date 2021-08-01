import '../styles/Peeker.scss';

import Table from './Table'
import Credits from './Credits';

// TODO: credits and hook up with bet 

function Peeker() {

  return (
    <div className="wrapper">
      <div className="odds"></div>
      <Table />
      <div className="pay"></div>
      <Credits />
      <div className="outcome"></div>
      <div className="hints"></div>
    </div>
  );
}

export default Peeker;