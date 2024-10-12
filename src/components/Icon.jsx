function Icon(props) {
    return (
        <>
            <div className="icon">
                {(props.image) ? (<img src={props.image} />) : <p>{String.fromCharCode(65 + props.icon)}</p>}
            </div>
        </>
    )
}
export default Icon 