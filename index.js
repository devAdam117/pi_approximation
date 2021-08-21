
const  exerciseFunction = ()=> {
    return Math.random();
}


class Point {
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
}

//singleTest
 const approximatePi=(test_num)=> {
    let pointArr = [];
    // shows approxim valu for one test
    for(let i =0 ;i<test_num;i++){
        let point = new Point(exerciseFunction(),exerciseFunction())
        pointArr.push(point)
    }
    let pointsInDaCircle = pointArr.filter(e=>Math.pow(e.x,2)+Math.pow(e.y,2)<1);    
    return 4*pointsInDaCircle.length/pointArr.length; 

    

} 

// for averaging tests
const showPi= (num_of_tests) => {
    
    let memoryOfPiTests= [];
    for(let i =0 ;i<num_of_tests;i++){
        memoryOfPiTests.push(approximatePi(99999))
    }
    console.log(memoryOfPiTests.reduce((a,b)=>a+b,0)/memoryOfPiTests.length);
}
approximatePi(9999999)



