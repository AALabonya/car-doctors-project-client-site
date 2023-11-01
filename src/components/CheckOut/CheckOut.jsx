import { useContext } from "react";
import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../../AuthProvider/AuthProvider";

const CheckOut = () => {
  const { user } = useContext(AuthContext)
  const checkData = useLoaderData()
  console.log(checkData);
  const { _id,title, price,img } = checkData || {}


  const handleBooking = event => {
    event.preventDefault()
    const form = event.target ;
    const name = form.name.value;
    const data = form.date.value;
    const email = user?.email ;
    const order ={
      customerName:name, 
      data, 
      email,
       img,
      service: title,
      service_id:_id,
      price:price
    }
    console.log(order);
    fetch("https://car-doctors-server-dun.vercel.app/booking", {
      method:"POST",
      headers:{
        "content-type": "application/json"
      },
      body:JSON.stringify(order)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
      if(data.insertedId){
        alert("successful")
      }
    })
  }
  return (
    <div>
      <div className='overflow-x-hidden'>
        <div className="relative mx-auto overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
          <img
            src="https://i.ibb.co/v1FWB0F/5.jpg"
            alt="img-blur-shadow" className="w-[1600px] h-[400px] rounded-md" />
        </div>
        <div>
          <div className="absolute flex-1 transform -translate-y-1/2 top-[35%]">
            <h1 className='font-bold text-white bg-[#FF3811] px-3 py-1 rounded-md lg:text-5xl ml-24'>Check Out</h1>
          </div>
          <div className="absolute transform -translate-y-2/3 top-[58%]  ml-[30%]">
            <svg xmlns="http://www.w3.org/2000/svg" width="296" height="50" viewBox="0 0 296 50" fill="none">
              <path d="M296 49.3H0L27.8 0H268.3L296 49.3Z" fill="#FF3811" />
            </svg>          <ul className="gap-4">
              <Link to="/" className=" absolute top-4 text-xl font-bold text-white ml-20"><li>Home |</li></Link>
              <Link to="/" className=" absolute  top-4 right-12 text-xl font-bold text-white ml-8"><li>CheckOut</li></Link>
            </ul>

          </div>
        </div>
      </div>
      <div>
        <form onSubmit={handleBooking} className="card-body bg-base-200 mt-5">

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-5">
            <div className="form-control ">
              <label className="label">
                <span className="label-text">Name</span>
              </label>
              <input type="text" name="name" defaultValue={user?.displayName} placeholder="Name" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Date</span>
              </label>
              <input type="date" name="date" className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Due Amount</span>
              </label>
              <input type="number" name="number" defaultValue={price} className="input input-bordered" required />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input type="text" defaultValue={user?.email} placeholder="email" className="input input-bordered" required />
            </div>
          </div>
          <div className="form-control mt-6">
            <input className="btn block-btn text-white bg-[#FF3811]" type="submit" value="Order Confirm" />
          </div>
        </form>
      </div>
    </div>

  )
};

export default CheckOut;