
import './style.css';


function Roadmap(){
return(

    <div className="three  text-white p-4 rounded ">
        <div className="container ps-4 pt-5 ">
      <h2 className="   text-pink fw-bold mb-4">ROAD MAP</h2>

      <div className=" five d-flex text  rounded mb-2">
        <div ><p className="dot bg-secondary me-3 mt-3"></p></div>
        <div className="buttons"><button >Website launch</button></div>
      </div>

      <div className="d-flex mb-3">
        <span className="dot bg-success me-3 mt-3"></span>
        <div className="buttons"><button className='fw-bold'>Crypto pre-booking starts</button></div>
      </div>

      <div className="d-flex mb-3">
        <span className="dot bg-danger me-3 mt-3"></span>
        <div  className="buttons"><button>Token launch</button></div>
      </div>

      <div className="d-flex mb-3">
        <span className="dot bg-primary me-3 mt-3"></span>
        <div  className="buttons"><button className='fw-bold'>Raising the funds</button></div>
      </div>

      <div className="d-flex mb-3">
        <span className="dot bg-warning me-3 mt-3"></span>
        <div className="buttons ">
          <button>Nauru and Guyana collaboration<br></br>
          <span className='text-secondary'>$18 Billion dollars currency swap</span></button>
        </div>
      </div>

      <div className="d-flex align-items-start">
        <span className="dot bg-info me-3 mt-3 "></span>
        <div className="buttons"><button className='fw-bold'>Claim in the token + B2B start</button></div>
      </div>
    </div>

</div>




        




   
);


}
export default Roadmap;
