function MobileSuitImg(props){

    //console.log(props.pathProp);
    return(
        <a href={props.urlProp}>
            <img src={props.pathProp} alt = "Nu Gundam" class="ms-image" height="540" width="auto"/>
        </a>
    );
}

export default MobileSuitImg;