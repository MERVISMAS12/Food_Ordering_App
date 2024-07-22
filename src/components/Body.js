import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";


const Body = () => {
    const [listRes, setRes] = useState([]);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () =>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.486463086305346&lng=78.3657343313098&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


    return listRes.length == 0 ?  (<Shimmer />) : (
        <div className="body">
            <button className="filter-btn" onClick={() => {
                const filterList = listRes.filter(
                    (res) => res.info.avgRating >= 4.5
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