
const Moves = ({moves}) =>{
    let colObj  = {"1" : "a" , "2" :"b" , "3" : "c" , "4" : "d" , "5" : "e" , "6" :"f" ,"7" :"g" , "8" : "h"}
    let rowObj = {"1" : "8" , "2" :"7" , "3" : "6" , "4" : "5" , "5" : "4" , "6" :"3" ,"7" :"2" , "8" : "1"}
    let arr = moves.map(item => {
        return colObj[item.col] + rowObj[item.row]
    })
    return <div className="display-moves">{
        arr.map(item => {
            return <span key ={item} className="moves-span">{item}</span>
        })}</div>
}

export default Moves