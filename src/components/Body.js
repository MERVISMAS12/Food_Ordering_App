import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { useState, useEffect } from "react";


const Body = () => {
    const [listRes, setRes] = useState([]);
    const [SearchText, setSearchText] = useState("");
    const [filteredList, setfilteredList] = useState([]);

    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async () =>{
        /*https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.486463086305346&lng=78.3657343313098&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING*/
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=17.486463086305346&lng=78.3657343313098&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setRes(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredList(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }


    return listRes.length == 0 ?  (<Shimmer />) : (
        <div className="body">
            <div className="filter">
                <input className="srch-bar" type="text" value={SearchText} onChange={(e) => {
                    setSearchText(e.target.value);
                }}/>
                <button className="srch-btn" onClick={()=>{
                    const filterList =  listRes.filter(
                        (res) => res.info.name.toLowerCase().includes(SearchText.toLowerCase()));
                    setfilteredList(filterList);
                }}>Search</button>
                <button className="filter-btn" onClick={() => {
                    const filterList = listRes.filter(
                        (res) => res.info.avgRating >= 4.5
                    )
                    setfilteredList(filterList);
                }}>Top Rated Restaurants</button>
            </div>

            <div className="res-container">
                {filteredList.map((item) => (
                    <RestaurantCard key={item.info.id} Resdata = {item}/>
                ))}
            
            </div>
        </div>
    );
}
export default Body;