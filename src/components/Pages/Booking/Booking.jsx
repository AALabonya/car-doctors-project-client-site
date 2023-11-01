import { useContext } from "react";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import { useEffect } from "react";
import { useState } from "react";
import BookingRow from "./BookingRow";
// import axios from "axios";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const Booking = () => {
  const { user } = useContext(AuthContext)
  const [booking, setBooking] = useState([])
  const axiosSecure = useAxiosSecure()
  // const url = `https://car-doctors-server-dun.vercel.app/booking?email=${user?.email}`
  const url = `booking?email=${user?.email}`

  useEffect(() => {
    axiosSecure.get(url)
      .then(res => {
        setBooking(res.data)
      })
    // fetch(url)
    // .then(res=>res.json())
    // .then(data=>setBooking(data))

  }, [url, axiosSecure])


  const handleDelete = id => {
    const proceed = confirm("Are you sure you want to delete")
    if (proceed) {
      fetch(`https://car-doctors-server-dun.vercel.app/booking/${id}`, {
        method: "DELETE"
      })
        .then(res => res.json())
        .then(data => {
          console.log(data);
          if (data.deletedCount > 0) {
            alert("deleted successful")
            const remaining = booking.filter(bookings => bookings._id !== id)
            setBooking(remaining)
          }
        })
    }

  }

  const handleBookingUpdate = id => {
    fetch(`https://car-doctors-server-dun.vercel.app/booking/${id}`, {
      method: "PATCH",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify({ status: "confirm" })
    })
      .then(res => res.json())
      .then(data => {
        console.log(data);
        if (data.modifiedCount > 0) {
          alert("successful")
          //update status 

          const remaining = booking.filter(bookings => bookings._id !== id)
          const updateBooking = booking.find(bookings => bookings._id === id)
          updateBooking.status = "confirm"
          const newBooking = [updateBooking, ...remaining]
          setBooking(newBooking)
        }
      })
  }


  return (
    <div>
      <h2 className="text-2xl">Booking:{booking.length}</h2>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>

              </th>
              <th>Image</th>
              <th>Name</th>
              <th>Email</th>
              <th>Service</th>
              <th>Date</th>
              <th>Price</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}

            {
              booking.map(book => <BookingRow
                key={book._id}
                book={book}
                handleDelete={handleDelete}
                handleBookingUpdate={handleBookingUpdate}
              ></BookingRow>)
            }

          </tbody>

        </table>
      </div>
    </div>
  );
};

export default Booking;