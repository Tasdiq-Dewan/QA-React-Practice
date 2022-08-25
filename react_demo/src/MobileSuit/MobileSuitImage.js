function MobileSuitImg(props){

    //console.log(props.pathProp);
    let msimg = require(`../images/${props.pathProp}`);
    console.log(msimg);
    return(
        <a href={props.urlProp} target="_blank"  rel="noopener noreferrer">
            <img src={msimg} alt = {props.altProp} className="ms-image" height="540" width="auto"/>
        </a>
    );
}

export default MobileSuitImg;