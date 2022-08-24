function MobileSuitImg(props){

    //console.log(props.pathProp);
    const msimg = props.pathProp
    return(
        <a href={props.urlProp}>
            <img src={msimg} alt = {props.altProp} className="ms-image" height="540" width="auto"/>
        </a>
    );
}

export default MobileSuitImg;