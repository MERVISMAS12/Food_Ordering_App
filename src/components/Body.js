import RestaurantCard from "./RestaurantCard";
import Reslist from "../utils/mockdata";
const Body = () => {
    return (
        <div className="body">
            <div className="search">search</div>
            <div className="res-container">
                {Reslist.map((item) => (
                    <RestaurantCard key={item.info.id} Resdata = {item}/>
                ))}
            
            </div>
        </div>
    );
}
export default Body;