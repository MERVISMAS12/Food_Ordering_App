import { NON_VEG_URL, VEG_URL, CDN_URL } from "../utils/constant";
const fveg = <img src={VEG_URL} style={{width: "20px", padding: "10px 10px"}}/>;
const fnonveg = <img src={NON_VEG_URL} style={{width: "20px", padding: "10px 10px"}}/>;

const RestaurantCard = (props) => {
    const {Resdata} = props;
    const { veg, cloudinaryImageId, name, cuisines, costForTwo, avgRating} = Resdata?.info;
    return (
        <div className="res-card">
            <span>
            {veg ? fveg : fnonveg}
            </span>
            <img className="res-logo" alt="res-logo" src={CDN_URL+cloudinaryImageId}/>
            <h3 className="content">{name}</h3>
            <h5 className="content">{cuisines.join(", ")}</h5>
            <h4 className="content">Pricing : {costForTwo}</h4>
            <h4 className="content">Ratings : {avgRating} ☆</h4>
        </div>
    );
}

export default RestaurantCard;