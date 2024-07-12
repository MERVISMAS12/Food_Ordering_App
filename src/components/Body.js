import RestaurantCard from "./RestaurantCard";
import Reslist from "../utils/mockdata";
import { useState } from "react";


const Body = () => {
    const [listRes, setRes] = useState(Reslist);
    return (
        <div className="body">
            <button className="filter-btn" onClick={() => {
                const filterList = listRes.filter(
                    (res) => res.info.avgRating >= 4.6
                )
                setRes(filterList);
            }}>Top Rated Restaurants</button>
            <div className="res-container">
                {listRes.map((item) => (
                    <RestaurantCard key={item.info.id} Resdata = {item}/>
                ))}
            
            </div>
        </div>
    );
}
export default Body;