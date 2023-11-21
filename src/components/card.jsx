function Card(_id, _imgURL) {
    const id = _id;
    let imgURL = _imgURL;
    let checked = false;

    function Check() {
        if (checked) {
            return checked;
        } else {
            checked = true;
            return false;
        }
    }

    function Visual() {
        return (
            <div className="img-container">
                <img src={imgURL}></img>
            </div>
        );
    }

    return { id, Visual, Check };
}


export default Card;