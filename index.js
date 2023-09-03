// Code your solution in this file!
const returnFirstTwoDrivers= function(array){
    const newArray=[...array.slice(0,2)]
    return newArray
}

const returnLastTwoDrivers= function(array){
    const newArray2=[...array.slice(-2)]
    return newArray2
}

const selectingDrivers= [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier= function(num){
    return function(fare){
        return fare * num}
}

const fareDoubler= createFareMultiplier(2)

const fareTripler= createFareMultiplier(3)

const selectDifferentDrivers= function(arrayOfDrivers, cb){
    return cb(arrayOfDrivers)

}