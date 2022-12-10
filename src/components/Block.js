const Block = ({item , blockcolor , handleBlockClick}) => {
    let colObj  = {"1" : "a" , "2" :"b" , "3" : "c" , "4" : "d" , "5" : "e" , "6" :"f" ,"7" :"g" , "8" : "h"}
    let rowObj = {"1" : "8" , "2" :"7" , "3" : "6" , "4" : "5" , "5" : "4" , "6" :"3" ,"7" :"2" , "8" : "1"}

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

    const getColumnIden =() =>{
        if(item.col === 1){
            return rowObj[item.row]
        }
        return ""
    }

    const getRowIden = () =>{
        if(item.row === 8) {
            return colObj[item.col]
        }
        return ""
    }
    return <span 
    id ={JSON.stringify(item)} 
    className={`${blockcolor} ${getBorderRadius()}`} 
    onClick = {(e) => handleBlockClick(e , item) }
    style ={{position : "relative"}}>
         <span style = {{position :"absolute" , top : "5px" , left :"8px" , color : "grey" , fontWeight :"400"}}>{getColumnIden()}</span>
         <span style = {{position :"absolute" , bottom : "5px" , right :"8px" , color : "grey" , fontWeight :"400"}}>{getRowIden()}</span>
    </span>
}
export default Block