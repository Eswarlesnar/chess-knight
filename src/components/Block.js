const Block = ({item , blockcolor , handleBlockClick}) => {

    const getBorderRadius =() => {
        if(item.row ===1 && item.col === 1){
           return "spanTopLeft"
        }else if(item.row ===1 && item.col === 8){
            return "spanTopRight"
        }else if(item.row ===8 && item.col === 1){
            return "spanBottomLeft"
        }else if(item.row ===8 && item.col ===8){
            return "spanBottomRight"
        }else{
            return ""
        }
    }
    return <span id ={JSON.stringify(item)} className={`${blockcolor} ${getBorderRadius()}`} onClick = {(e) => handleBlockClick(e , item) }></span>
}
export default Block