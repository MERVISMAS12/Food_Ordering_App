const Shimcard = (<div className="res-card">
    <div className="shim-photo"></div>
    <div className="shim-line"></div>
    <div className="shim-line"></div>
    <div className="shim-line"></div>
    <div className="shim-box"></div>
</div>);

const Shimmer = () =>{
    return <div className="res-container">
        {Shimcard}
        {Shimcard}
        {Shimcard}
        {Shimcard}
    </div>
}

export default Shimmer;