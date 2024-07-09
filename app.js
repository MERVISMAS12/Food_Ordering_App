import React from "react";
import ReactDOM from "react-dom/client";
import image from './public/logo_aroma_white.png';

const Header = () => {
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={image} />
            </div>
            <div className="nav-items">
                <ul>
                    <li>Name</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                    
                </ul>
            </div>
        </div>
    );
}

const fveg = <img src="https://uxwing.com/wp-content/themes/uxwing/download/food-and-drinks/veg-icon.png" style={{width: "20px", padding: "5px 10px"}}/>;
const fnonveg = <img src="https://uxwing.com/wp-content/themes/uxwing/download/food-and-drinks/non-veg-icon.png" style={{width: "20px", padding: "5px 10px"}}/>;


const RestaurantCard = (props) => {
    const {Resdata} = props;
    const { veg, cloudinaryImageId, name, cuisines, costForTwo, avgRating} = Resdata?.info;
    return (
        <div className="res-card">
            <span>
            {veg ? fveg : fnonveg}
                {/* <img src="https://uxwing.com/wp-content/themes/uxwing/download/food-and-drinks/non-veg-icon.png" style={{width: "20px", padding: "5px 10px"}}/> */}
            </span>
            <img className="res-logo" alt="res-logo" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+ cloudinaryImageId}/>
            <h3 className="content">{name}</h3>
            <h5 className="content">{cuisines.join(", ")}</h5>
            <h4 className="content">Pricing : {costForTwo}</h4>
            <h4 className="content">Ratings : {avgRating} ☆</h4>
        </div>
    );
}

const Reslist = [
{
    "info": {
        "id": "391816",
        "name": "Louis Burger",
        "cloudinaryImageId": "19d3d352cc815b9d88b22617b41fa97b",
        "locality": "Trade Centre",
        "areaName": "Santacruz Bandra east",
        "costForTwo": "₹600 for two",
        "cuisines": [
            "Burgers",
            "American",
            "Fast Food"
        ],
        "avgRating": 4.4,
        "parentId": "22485",
        "avgRatingString": "4.4",
        "totalRatingsString": "1K+",
        "promoted": true,
        "adTrackingId": "cid=14854054~p=0~adgrpid=14854054#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=391816~eid=f74d9fc3-3ea3-40ea-a7fc-c5f5fa97d6fa~srvts=1720534753078~collid=45826",
        "sla": {
            "deliveryTime": 36,
            "lastMileTravel": 2.1,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "2.0 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-07-10 05:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "newg.png",
                    "description": "Gourmet"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textBased": {},
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "Gourmet",
                                "imageId": "newg.png"
                            }
                        }
                    ]
                },
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹299",
            "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {},
    "cta": {
        "link": "swiggy://menu?restaurant_id=391816",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
    }
},
{
    "info": {
        "id": "41471",
        "name": "Wow! Momo",
        "cloudinaryImageId": "64fd45fd9f44c1737bc446e470bed666",
        "locality": "Kurla West",
        "areaName": "Kurla West",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "Tibetan",
            "Chinese",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 4.1,
        "parentId": "1776",
        "avgRatingString": "4.1",
        "totalRatingsString": "1K+",
        "sla": {
            "deliveryTime": 66,
            "lastMileTravel": 2.9,
            "serviceability": "SERVICEABLE",
            "slaString": "65-70 mins",
            "lastMileTravelString": "2.9 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-07-09 23:00:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textBased": {},
                "imageBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "ITEMS",
            "subHeader": "AT ₹99"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "4.2",
                "ratingCount": "500+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {},
    "cta": {
        "link": "swiggy://menu?restaurant_id=41471",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
    }
},
{
    "info": {
        "id": "32399",
        "name": "McDonald's",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/1/4a8bc67d-8fe4-44db-be5d-1477086cc52b_32399.JPG",
        "locality": "Kalina Artista",
        "areaName": "Santacruz East",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Burgers",
            "Beverages",
            "Cafe",
            "Desserts"
        ],
        "avgRating": 4.5,
        "parentId": "630",
        "avgRatingString": "4.5",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 2.3,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "2.2 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-07-10 02:45:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Rxawards/_CATEGORY-Burger.png",
                    "description": "Delivery!"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Burger.png"
                            }
                        }
                    ]
                },
                "textExtendedBadges": {},
                "textBased": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {},
    "cta": {
        "link": "swiggy://menu?restaurant_id=32399",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
    }
},
{
    "info": {
        "id": "535962",
        "name": "SLYCE PIZZA",
        "cloudinaryImageId": "4c899e0501bef7e4c6acd1fa7cc2c82b",
        "locality": "Trade Center Building",
        "areaName": "Bandra Kurla Complex",
        "costForTwo": "₹600 for two",
        "cuisines": [
            "Pizzas",
            "Italian",
            "Fast Food"
        ],
        "avgRating": 4.3,
        "parentId": "321813",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "promoted": true,
        "adTrackingId": "cid=14854104~p=1~adgrpid=14854104#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=535962~eid=3ca82129-7f8a-4ecf-83d1-da83671d7093~srvts=1720534753078~collid=45826",
        "sla": {
            "deliveryTime": 37,
            "lastMileTravel": 2.1,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "2.0 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-07-10 05:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "newg.png",
                    "description": "Gourmet"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textExtendedBadges": {},
                "textBased": {},
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "imageId": "newg.png",
                                "description": "Gourmet"
                            }
                        }
                    ]
                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {},
    "cta": {
        "link": "swiggy://menu?restaurant_id=535962",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
    }
},
{
    "info": {
        "id": "78036",
        "name": "Burger King",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/11/4ee8bc77-ca9f-41bd-a0f3-511c70902b91_78036.JPG",
        "locality": "Central Plaza, Kalina",
        "areaName": "Santacruz East",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "Burgers",
            "American"
        ],
        "avgRating": 4.3,
        "parentId": "166",
        "avgRatingString": "4.3",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 29,
            "lastMileTravel": 2.3,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "2.2 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-07-10 05:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Rxawards/_CATEGORY-Burger.png",
                    "description": "Delivery!"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textExtendedBadges": {},
                "textBased": {},
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "imageId": "Rxawards/_CATEGORY-Burger.png",
                                "description": "Delivery!"
                            }
                        }
                    ]
                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {},
    "cta": {
        "link": "swiggy://menu?restaurant_id=78036",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
    }
},
{
    "info": {
        "id": "8655",
        "name": "Subway",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/4/36c15da5-700d-46e0-95dd-1414acb77a96_8655.JPG",
        "locality": "Pheonix Market City",
        "areaName": "Saki Naka",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "Salads",
            "Snacks",
            "Desserts",
            "Beverages"
        ],
        "avgRating": 4.3,
        "parentId": "2",
        "avgRatingString": "4.3",
        "totalRatingsString": "5K+",
        "sla": {
            "deliveryTime": 66,
            "lastMileTravel": 2.8,
            "serviceability": "SERVICEABLE",
            "slaString": "65-70 mins",
            "lastMileTravelString": "2.7 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-07-09 23:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
                    "description": "Delivery!"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "imageId": "Rxawards/_CATEGORY-Sandwiches.png",
                                "description": "Delivery!"
                            }
                        }
                    ]
                },
                "textExtendedBadges": {},
                "textBased": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {},
    "cta": {
        "link": "swiggy://menu?restaurant_id=8655",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
    }
},
{
    "info": {
        "id": "376244",
        "name": "Good Flippin' Burgers",
        "cloudinaryImageId": "c3ba5f77ce2ce09b1aa34d7af539bd64",
        "locality": "Bandra Kurla Complex",
        "areaName": "Scruz Bandra East",
        "costForTwo": "₹600 for two",
        "cuisines": [
            "Burgers",
            "American",
            "Fast Food",
            "Beverages"
        ],
        "avgRating": 4.6,
        "parentId": "11748",
        "avgRatingString": "4.6",
        "totalRatingsString": "1K+",
        "promoted": true,
        "adTrackingId": "cid=15172514~p=2~adgrpid=15172514#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=376244~eid=afb520ec-7b6d-45d3-b9f6-932a53ddbf03~srvts=1720534753078~collid=45826",
        "sla": {
            "deliveryTime": 38,
            "lastMileTravel": 2.8,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "2.7 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-07-10 03:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Rxawards/_CATEGORY-Burger.png",
                    "description": "Delivery!"
                },
                {
                    "imageId": "newg.png",
                    "description": "Gourmet"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textBased": {},
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "imageId": "Rxawards/_CATEGORY-Burger.png",
                                "description": "Delivery!"
                            }
                        },
                        {
                            "attributes": {
                                "imageId": "newg.png",
                                "description": "Gourmet"
                            }
                        }
                    ]
                },
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "20% OFF",
            "subHeader": "UPTO ₹50"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "4.7",
                "ratingCount": "1K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {},
    "cta": {
        "link": "swiggy://menu?restaurant_id=376244",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
    }
},
{
    "info": {
        "id": "24463",
        "name": "Domino's Pizza",
        "cloudinaryImageId": "d0450ce1a6ba19ea60cd724471ed54a8",
        "locality": "Kurla East",
        "areaName": "Kurla West",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Pizzas",
            "Italian",
            "Pastas",
            "Desserts"
        ],
        "avgRating": 3.7,
        "parentId": "2456",
        "avgRatingString": "3.7",
        "totalRatingsString": "10K+",
        "sla": {
            "deliveryTime": 25,
            "lastMileTravel": 1.2,
            "serviceability": "SERVICEABLE",
            "slaString": "20-25 mins",
            "lastMileTravelString": "1.2 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-07-10 02:55:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Rxawards/_CATEGORY-Pizza.png",
                    "description": "Delivery!"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textBased": {},
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "description": "Delivery!",
                                "imageId": "Rxawards/_CATEGORY-Pizza.png"
                            }
                        }
                    ]
                },
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹150 OFF",
            "subHeader": "ABOVE ₹299",
            "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "3.8",
                "ratingCount": "1K+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {},
    "cta": {
        "link": "swiggy://menu?restaurant_id=24463",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
    }
},
{
    "info": {
        "id": "355806",
        "name": "Baba Falooda (Kurla)",
        "cloudinaryImageId": "ys88tnnklqgfhzsftmqq",
        "locality": "Powai",
        "areaName": "Kurla",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Ice Cream",
            "Beverages",
            "Desserts"
        ],
        "avgRating": 4.5,
        "veg": true,
        "parentId": "38827",
        "avgRatingString": "4.5",
        "totalRatingsString": "5K+",
        "sla": {
            "deliveryTime": 34,
            "lastMileTravel": 1.3,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "1.2 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-07-09 23:59:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textExtendedBadges": {},
                "textBased": {},
                "imageBased": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "FREE ITEM"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {},
    "cta": {
        "link": "swiggy://menu?restaurant_id=355806",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
    }
},
{
    "info": {
        "id": "74549",
        "name": "Sahara Restaurant",
        "cloudinaryImageId": "geedkuyt9lobwntf2k3o",
        "locality": "Chembur",
        "areaName": "Chembur",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "Indian",
            "Chinese",
            "Tandoor",
            "Mughlai",
            "Biryani",
            "Desserts"
        ],
        "avgRating": 4.2,
        "parentId": "12130",
        "avgRatingString": "4.2",
        "totalRatingsString": "10K+",
        "promoted": true,
        "adTrackingId": "cid=15146328~p=3~adgrpid=15146328#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=74549~eid=94f1d1bb-5b2f-4697-bc44-3488e5b32f75~srvts=1720534753078~collid=45826",
        "sla": {
            "deliveryTime": 32,
            "lastMileTravel": 4.5,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "4.5 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-07-09 23:55:00",
            "opened": true
        },
        "badges": {
            "textExtendedBadges": [
                {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "options available",
                    "fontColor": "#7E808C"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textBased": {},
                "imageBased": {},
                "textExtendedBadges": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "fontColor": "#7E808C",
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "description": "",
                                "shortDescription": "options available"
                            }
                        }
                    ]
                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "3.7",
                "ratingCount": "500+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {},
    "cta": {
        "link": "swiggy://menu?restaurant_id=74549",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
    }
},
{
    "info": {
        "id": "351111",
        "name": "Grameen Kulfi",
        "cloudinaryImageId": "xyjb1hrqmwyatasvv8ri",
        "locality": "Mahmad Ummer Chawl",
        "areaName": "Siddharath Nagar",
        "costForTwo": "₹120 for two",
        "cuisines": [
            "Ice Cream",
            "Desserts"
        ],
        "avgRating": 4.8,
        "veg": true,
        "parentId": "12175",
        "avgRatingString": "4.8",
        "totalRatingsString": "500+",
        "sla": {
            "deliveryTime": 28,
            "lastMileTravel": 4.2,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "4.1 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-07-10 00:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textBased": {},
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                "description": "pureveg"
                            }
                        }
                    ]
                },
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {},
    "cta": {
        "link": "swiggy://menu?restaurant_id=351111",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
    }
},
{
    "info": {
        "id": "723632",
        "name": "Mithiyaj",
        "cloudinaryImageId": "515ff474640edf1efe636456b6b02c8e",
        "locality": "Kurla West",
        "areaName": "Kurla West",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "Bakery",
            "Desserts"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "286825",
        "avgRatingString": "4.6",
        "totalRatingsString": "1K+",
        "sla": {
            "deliveryTime": 32,
            "lastMileTravel": 1.1,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "1.1 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-07-09 23:59:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textExtendedBadges": {},
                "textBased": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "4.5",
                "ratingCount": "50+"
            },
            "source": "GOOGLE",
            "sourceIconImageId": "v1704440323/google_ratings/rating_google_tag"
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {},
    "cta": {
        "link": "swiggy://menu?restaurant_id=723632",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
    }
},
{
    "info": {
        "id": "755395",
        "name": "Ice Cream Works",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/4/10/6c2a3527-c195-4235-b728-e5a5a9fd3582_755395.jpg",
        "locality": "Dr C G Road",
        "areaName": "Chembur",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "Ice Cream",
            "Desserts",
            "Beverages",
            "Sweets",
            "Waffle"
        ],
        "avgRating": 4.5,
        "veg": true,
        "parentId": "491",
        "avgRatingString": "4.5",
        "totalRatingsString": "50+",
        "promoted": true,
        "adTrackingId": "cid=15147865~p=4~adgrpid=15147865#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=755395~eid=da0380e1-4e69-4760-b3ea-b750f51dfa25~srvts=1720534753078~collid=45826",
        "sla": {
            "deliveryTime": 38,
            "lastMileTravel": 6.6,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "6.5 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-07-10 00:30:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textBased": {},
                "imageBased": {},
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "40% OFF",
            "subHeader": "UPTO ₹80"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {},
    "cta": {
        "link": "swiggy://menu?restaurant_id=755395",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
    }
},
{
    "info": {
        "id": "372200",
        "name": "New Lajawaab Seekh Corner",
        "cloudinaryImageId": "wtjwh915fnytypbywvcs",
        "locality": "Kurla",
        "areaName": "Bhd Kurla Weight Bridge",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Indian"
        ],
        "avgRating": 4.3,
        "parentId": "147071",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "sla": {
            "deliveryTime": 28,
            "lastMileTravel": 1.1,
            "serviceability": "SERVICEABLE",
            "slaString": "25-30 mins",
            "lastMileTravelString": "1.1 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-07-09 23:59:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "aggregatedDiscountInfoV2": {},
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textBased": {},
                "imageBased": {},
                "textExtendedBadges": {}
            }
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {},
    "cta": {
        "link": "swiggy://menu?restaurant_id=372200",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
    }
},
{
    "info": {
        "id": "323707",
        "name": "Baskin Robbins - Ice Cream Desserts",
        "cloudinaryImageId": "85ccae4e3576f9330af102c46ca85395",
        "locality": "KURLA",
        "areaName": "Saki Naka",
        "costForTwo": "₹250 for two",
        "cuisines": [
            "Desserts",
            "Ice Cream"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "5588",
        "avgRatingString": "4.3",
        "totalRatingsString": "50+",
        "sla": {
            "deliveryTime": 65,
            "lastMileTravel": 2.8,
            "serviceability": "SERVICEABLE",
            "slaString": "60-65 mins",
            "lastMileTravelString": "2.7 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-07-09 23:59:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
                    "description": "Delivery!"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textBased": {},
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
                                "description": "Delivery!"
                            }
                        }
                    ]
                },
                "textExtendedBadges": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {},
    "cta": {
        "link": "swiggy://menu?restaurant_id=323707",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
    }
},
{
    "info": {
        "id": "391195",
        "name": "Everything Rice",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/8/a7b8d129-1c29-458b-8b7d-bb7fab0bb0f9_391195 SS.jpg",
        "locality": "Kalina",
        "areaName": "Scruz Bandra East",
        "costForTwo": "₹350 for two",
        "cuisines": [
            "North Indian",
            "Biryani",
            "Punjabi",
            "Maharashtrian",
            "Mughlai",
            "Thalis",
            "Indian"
        ],
        "avgRating": 4.3,
        "parentId": "245314",
        "avgRatingString": "4.3",
        "totalRatingsString": "1K+",
        "promoted": true,
        "adTrackingId": "cid=14813502~p=6~adgrpid=14813502#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=391195~eid=b20ca5c7-8df9-4c23-95a8-697145ef44cf~srvts=1720534753078~collid=45826",
        "sla": {
            "deliveryTime": 39,
            "lastMileTravel": 3.6,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "3.5 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-07-10 01:00:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textExtendedBadges": {},
                "textBased": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "₹125 OFF",
            "subHeader": "ABOVE ₹249",
            "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {},
    "cta": {
        "link": "swiggy://menu?restaurant_id=391195",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
    }
},
{
    "info": {
        "id": "236162",
        "name": "Theobroma",
        "cloudinaryImageId": "63dd75492c47fcec191132b8eb299ea5",
        "locality": "Lal Bahadur Shastri Rd",
        "areaName": "Kurla",
        "costForTwo": "₹400 for two",
        "cuisines": [
            "Bakery",
            "Desserts"
        ],
        "avgRating": 4.5,
        "parentId": "1040",
        "avgRatingString": "4.5",
        "totalRatingsString": "1K+",
        "sla": {
            "deliveryTime": 65,
            "lastMileTravel": 2.8,
            "serviceability": "SERVICEABLE",
            "slaString": "60-65 mins",
            "lastMileTravelString": "2.7 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-07-09 23:59:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Rxawards/_CATEGORY-Desserts.png",
                    "description": "Delivery!"
                }
            ],
            "textExtendedBadges": [
                {
                    "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                    "shortDescription": "Perfect cake delivery",
                    "fontColor": "#7E808C"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textBased": {},
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "imageId": "Rxawards/_CATEGORY-Desserts.png",
                                "description": "Delivery!"
                            }
                        }
                    ]
                },
                "textExtendedBadges": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "fontColor": "#7E808C",
                                "iconId": "v1705582451/Ratnesh_Badges/Perfect_cake.png",
                                "description": "",
                                "shortDescription": "Perfect cake delivery"
                            }
                        }
                    ]
                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "15% OFF",
            "discountTag": "FLAT DEAL"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {},
    "cta": {
        "link": "swiggy://menu?restaurant_id=236162",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
    }
},
{
    "info": {
        "id": "81626",
        "name": "NIC Ice Creams",
        "cloudinaryImageId": "18d8b8fb6bac8063a6fa886e20148110",
        "locality": "Mahmad Ummer Chawl",
        "areaName": "Siddharath Nagar",
        "costForTwo": "₹120 for two",
        "cuisines": [
            "Ice Cream",
            "Desserts"
        ],
        "avgRating": 4.6,
        "veg": true,
        "parentId": "6249",
        "avgRatingString": "4.6",
        "totalRatingsString": "5K+",
        "sla": {
            "deliveryTime": 35,
            "lastMileTravel": 4.2,
            "serviceability": "SERVICEABLE",
            "slaString": "30-35 mins",
            "lastMileTravelString": "4.1 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-07-09 23:59:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
                    "description": "Delivery!"
                },
                {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                }
            ],
            "textExtendedBadges": [
                {
                    "iconId": "guiltfree/GF_Logo_android_3x",
                    "shortDescription": "brand",
                    "fontColor": "#7E808C"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "textExtendedBadges": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "iconId": "guiltfree/GF_Logo_android_3x",
                                "description": "",
                                "shortDescription": "brand",
                                "fontColor": "#7E808C"
                            }
                        }
                    ]
                },
                "textBased": {},
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "imageId": "Rxawards/_CATEGORY-Ice-creams.png",
                                "description": "Delivery!"
                            }
                        },
                        {
                            "attributes": {
                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                "description": "pureveg"
                            }
                        }
                    ]
                }
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {},
    "cta": {
        "link": "swiggy://menu?restaurant_id=81626",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
    }
},
{
    "info": {
        "id": "885886",
        "name": "Nakhlow",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/5/17/0dcb3efe-505a-4439-93a0-a031a3a7d6da_885886.sss.jpg",
        "locality": "Kolivery Village",
        "areaName": "Scruz Bandra East",
        "costForTwo": "₹300 for two",
        "cuisines": [
            "Biryani",
            "Punjabi"
        ],
        "parentId": "519017",
        "avgRatingString": "NEW",
        "promoted": true,
        "adTrackingId": "cid=15067363~p=7~adgrpid=15067363#ag1~mp=SWIGGY_IN~bl=FOOD~aet=RESTAURANT~aeid=885886~eid=cbdcd929-db41-4d0c-9d72-8c1dc2557203~srvts=1720534753078~collid=45826",
        "sla": {
            "deliveryTime": 38,
            "lastMileTravel": 2.1,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "2.0 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-07-09 23:00:00",
            "opened": true
        },
        "badges": {},
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {},
                "textExtendedBadges": {},
                "textBased": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "60% OFF",
            "subHeader": "UPTO ₹120"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {},
    "cta": {
        "link": "swiggy://menu?restaurant_id=885886",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
    }
},
{
    "info": {
        "id": "825847",
        "name": "Kwality Walls Frozen Dessert and Ice Cream Shop",
        "cloudinaryImageId": "RX_THUMBNAIL/IMAGES/VENDOR/2024/6/20/666f0ad8-4ca7-459e-8d73-6a05484971a0_825847.JPG",
        "locality": "Kurla",
        "areaName": "Kurla",
        "costForTwo": "₹200 for two",
        "cuisines": [
            "Ice Cream",
            "Desserts",
            "Ice Cream Cakes"
        ],
        "avgRating": 4.3,
        "veg": true,
        "parentId": "582",
        "avgRatingString": "4.3",
        "totalRatingsString": "20+",
        "sla": {
            "deliveryTime": 38,
            "lastMileTravel": 1,
            "serviceability": "SERVICEABLE",
            "slaString": "35-40 mins",
            "lastMileTravelString": "1.0 km",
            "iconType": "ICON_TYPE_EMPTY"
        },
        "availability": {
            "nextCloseTime": "2024-07-09 22:00:00",
            "opened": true
        },
        "badges": {
            "imageBadges": [
                {
                    "imageId": "v1695133679/badges/Pure_Veg111.png",
                    "description": "pureveg"
                }
            ]
        },
        "isOpen": true,
        "type": "F",
        "badgesV2": {
            "entityBadges": {
                "imageBased": {
                    "badgeObject": [
                        {
                            "attributes": {
                                "imageId": "v1695133679/badges/Pure_Veg111.png",
                                "description": "pureveg"
                            }
                        }
                    ]
                },
                "textExtendedBadges": {},
                "textBased": {}
            }
        },
        "aggregatedDiscountInfoV3": {
            "header": "50% OFF",
            "subHeader": "UPTO ₹100"
        },
        "differentiatedUi": {
            "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
            "differentiatedUiMediaDetails": {
                "lottie": {},
                "video": {}
            }
        },
        "reviewsSummary": {},
        "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
        "isNewlyOnboarded": true,
        "restaurantOfferPresentationInfo": {},
        "externalRatings": {
            "aggregatedRating": {
                "rating": "--"
            }
        },
        "ratingsDisplayPreference": "RATINGS_DISPLAY_PREFERENCE_SHOW_SWIGGY"
    },
    "analytics": {},
    "cta": {
        "link": "swiggy://menu?restaurant_id=825847",
        "text": "RESTAURANT_MENU",
        "type": "DEEPLINK"
    }
},
]

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

const Applayout = () => {
    return (
        <div className="app">
            <Header />
            <Body/>
        </div>
    );
}

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Applayout />);