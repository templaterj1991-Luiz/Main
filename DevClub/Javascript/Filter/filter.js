const List = [20,14,23,3,6,100,2345,200,350,20000]

const newList = List.filter(number =>{
    if (number > 100) {
        return true;
    } else {
        return false;
    }
}) 

console.log(newList)