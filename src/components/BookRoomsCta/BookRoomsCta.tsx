'use client';

import { Dispatch, FC, SetStateAction } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

type Props = {
    price: number;
    discount: number;
    specialNote: string;
    checkInDate: Date | null;
    setCheckInDate: Dispatch<SetStateAction <Date | null>>;
    checkOutDate: Date | null;
    setCheckOutDate: Dispatch<SetStateAction <Date | null>>;
    calcMinCheckoutDate: () => Date | null;
    numChildren: number;
    adults: number;
    setNumChildren: Dispatch<SetStateAction<number>>;
    setAdults: Dispatch<SetStateAction<number>>;
    isBooked: boolean;
    handleBookNowClick: () => void;
}

const BookRoomsCta :FC <Props> = props => {
    const {price, discount, specialNote, checkInDate, setCheckInDate, checkOutDate, setCheckOutDate, calcMinCheckoutDate, adults, setAdults, numChildren, setNumChildren, isBooked, handleBookNowClick} = props;

    const discountPrice = price  - (price / 100) * discount;

    const calcNoOfDays = () => {
        if (!checkInDate || !checkOutDate) { return 0;}

        const timeDifference = checkOutDate.getTime() - checkInDate.getTime();
        const numOfDays = Math.ceil(timeDifference / (24 * 60 * 60 * 1000));

        return numOfDays;
    }
    
  return (
    <div className="px-7 py-6">
        <h3>
            <span className={`${discount ? "text-gray-400" : ''} font-bold text-xl`}>
                $ {price}
            </span>
            {discount ? <span className="font-bold text-xl"> | Discount {discount}% off. Now <span className="text-tertiary-dark">$ {discountPrice}</span> </span> : ''}
        </h3>
        <div className="w-full border-b-2 border-b-secondary my-2"></div>
        <h4 className="my-8">{specialNote}</h4>
        <div className="flex">
            <div className="w-1/2 pr-2">
                <label htmlFor="check-in-date" className="block text-sm font-medium text-gray-900 dark:text-gray-400">Check In Date</label>
                <DatePicker selected={checkInDate} onChange={date => setCheckInDate(date)} dateFormat="MM/dd/yyyy" minDate={calcMinCheckoutDate()} id='check-in-date' className="w-full border text-black border-gray-300 rounded-lg p-2.5 focus:ring-primary focus:border-primary" />
            </div>
            <div className="w-1/2 pl-2">
                <label htmlFor="check-out-date" className="block text-sm font-medium text-gray-900 dark:text-gray-400">Check Out Date</label>
                <DatePicker selected={checkOutDate} onChange={date => setCheckOutDate(date)} dateFormat="MM/dd/yyyy" minDate={new Date()} disabled={!checkInDate} id='check-out-date' className="w-full border text-black border-gray-300 rounded-lg p-2.5 focus:ring-primary focus:border-primary" />
            </div>
        </div>
        <div className="flex mt-4">
            <div className="w-1/2 pr-2">
                <label htmlFor="adults" className="block text-sm font-medium to-gray-900 dark:text-gray-400">Adults</label>
                <input type="number" id="adults" value={adults} onChange={(e) => setAdults(+e.target.value)} min={1} max={5} className="w-full border border-gray-300 rounded-lg p-2.5"></input>
            </div>
            <div className="w-1/2 pl-2">
                <label htmlFor="numChildren" className="block text-sm font-medium to-gray-900 dark:text-gray-400">Children</label>
                <input type="number" id="numChildren" value={numChildren} onChange={(e) => setNumChildren(+e.target.value)} min={1} max={3} className="w-full border border-gray-300 rounded-lg p-2.5"></input>
            </div>
        </div>
        {calcNoOfDays() > 0 ? <p className="mt-3">
            Total Price: $ {calcNoOfDays() * discountPrice}
        </p> : <></>}
        <button disabled={isBooked} onClick={handleBookNowClick} className="btn-primary w-full mt-6 disabled:bg-gray-500 disabled:cursor-not-allowed">
            {isBooked ? 'Booked': 'Book Now'}
        </button>
    </div>
  )
}

export default BookRoomsCta;