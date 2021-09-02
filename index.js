
//________________________resize variables_______________________________________
let squareWidth;
let showResultBtn= document.querySelector(".result_btn");
let blocks = document.querySelectorAll(".body_cont"); //main blocks
let unitSquare=  document.getElementsByClassName("square")[0];
let cords = document.querySelectorAll(".cords");
let pointsInSquare=false;
let resultClicked= false;
let preventResize= false;
//________________________resize variables_______________________________________

//________________________init function________________________________________
const onInit=()=> {        
    let height =  document.documentElement.clientHeight;
    let width = document.documentElement.clientWidth;     
    if(width>1600){
        
        blocks.forEach(block=>setFontSize(block,2.15));
        cords.forEach(e=>setFontSize(e,1.25));
        addMargin(blocks[1],0);
        addMargin(blocks[2],0);
        setHeight(blocks[1],blocks[0].clientHeight);
        setHeight(blocks[2],blocks[0].clientHeight) ;
    }
    else if (width<=1600 && width>1500){
        blocks.forEach(block=>setFontSize(block,2.15));
        cords.forEach(e=>setFontSize(e,1.25));
        addMargin(blocks[1],0);        
        addMargin(blocks[2],0);
        setHeight(blocks[1],blocks[0].clientHeight);
        setHeight(blocks[2],blocks[0].clientHeight) ;  
    }
    else if(width<=1500 && width>1400){
        blocks.forEach(block=>setFontSize(block,2.15));
        cords.forEach(e=>setFontSize(e,1.25));
        addMargin(blocks[1],0);        
        addMargin(blocks[2],0);
        setHeight(blocks[1],blocks[0].clientHeight);
        setHeight(blocks[2],blocks[0].clientHeight) ;   
    }
    else if(width<=1400 && width>1300){
        blocks.forEach(block=>setFontSize(block,2.05));
        cords.forEach(e=>setFontSize(e,1.25));
        addMargin(blocks[1],0);
        addMargin(blocks[2],0);
        setHeight(blocks[1],blocks[0].clientHeight);
        setHeight(blocks[2],blocks[0].clientHeight);    
    }
    else if(width<=1300 && width>1200){
        blocks.forEach(block=>setFontSize(block,1.95));
        cords.forEach(e=>setFontSize(e,1.15));
        addMargin(blocks[1],0);
        addMargin(blocks[2],0);
        setHeight(blocks[1],blocks[0].clientHeight);
        setHeight(blocks[2],blocks[0].clientHeight);
    }
    else if(width<=1200 && width>1100){
        blocks.forEach(block=>setFontSize(block,1.85));
        cords.forEach(e=>setFontSize(e,1.45));
        addMargin(blocks[2],2);
        addMargin(blocks[1],0);
        setHeight(blocks[1],blocks[0].clientHeight);
        setHeight(blocks[2],blocks[0].clientHeight);
    }
    else if(width<=1100 && width>1000){
        blocks.forEach(block=>setFontSize(block,1.75));
        cords.forEach(e=>setFontSize(e,1.25));
        addMargin(blocks[2],2);
        addMargin(blocks[1],0);
        setHeight(blocks[1],blocks[0].clientHeight);
        setHeight(blocks[2],blocks[0].clientHeight);
    }
    else if(width<=1000 && width>900){
        blocks.forEach(block=>setFontSize(block,1.65));
        cords.forEach(e=>setFontSize(e,1.25));

        if(width>=992){
            addMargin(blocks[2],2);
            setHeight(blocks[1],blocks[0].clientHeight);
            setHeight(blocks[2],blocks[0].clientHeight);
        }
        else{
            addMargin(blocks[1],2);
            addMargin(blocks[2],5);
            setHeight(blocks[1],blocks[0].clientHeight);
            setHeight(blocks[2],blocks[0].clientHeight);
        }
    }
    else if(width<=900 && width>800){
        blocks.forEach(block=>setFontSize(block,1.55));
        cords.forEach(e=>setFontSize(e,1.15));
        addMargin(blocks[1],2);
        addMargin(blocks[2],5);
        setHeight(blocks[1],blocks[0].clientHeight);
        setHeight(blocks[2],blocks[0].clientHeight);


    }
    else if(width<=800 && width>700){
        blocks.forEach(block=>setFontSize(block,1.45));
        cords.forEach(e=>setFontSize(e,1.1));
        addMargin(blocks[1],2);
        addMargin(blocks[2],5);
        setHeight(blocks[1],blocks[0].clientHeight);
        setHeight(blocks[2],blocks[0].clientHeight);


    }
    else if(width<=700 && width>600){
        blocks.forEach(block=>setFontSize(block,1.35));
        cords.forEach(e=>setFontSize(e,1.05));
        addMargin(blocks[1],2);
        addMargin(blocks[2],5);
        setHeight(blocks[1],blocks[0].clientHeight);
        setHeight(blocks[2],blocks[0].clientHeight);


    }
    else if(width<=600 && width>500){
        blocks.forEach(block=>setFontSize(block,1.25));
        cords.forEach(e=>setFontSize(e,1.05));
        addMargin(blocks[1],2);
        addMargin(blocks[2],5);
        setHeight(blocks[1],blocks[0].clientHeight);
        setHeight(blocks[2],blocks[0].clientHeight);


    }
    else if(width<=500 && width>400){
        blocks.forEach(block=>setFontSize(block,1.25));
        cords.forEach(e=>setFontSize(e,1.05));
        addMargin(blocks[1],2);
        addMargin(blocks[2],5);
        setHeight(blocks[1],blocks[0].clientHeight);
        setHeight(blocks[2],blocks[0].clientHeight);


    }
    else if(width<=400 && width>300){
        blocks.forEach(block=>setFontSize(block,1.25));
        cords.forEach(e=>setFontSize(e,1.05));
        addMargin(blocks[1],2);
        addMargin(blocks[2],5);
        setHeight(blocks[1],blocks[0].clientHeight);
        setHeight(blocks[2],blocks[0].clientHeight);


    }
    else if(width<=300 && width>200){
        blocks.forEach(block=>setFontSize(block,1.15));
        cords.forEach(e=>setFontSize(e,1.05));
        addMargin(blocks[1],2);
        addMargin(blocks[2],5);
        setHeight(blocks[1],blocks[0].clientHeight);
        setHeight(blocks[2],blocks[0].clientHeight);


    }
    else {
        addMargin(blocks[1],2);
        addMargin(blocks[2],5);
        setHeight(blocks[1],blocks[0].clientHeight);
        setHeight(blocks[2],blocks[0].clientHeight);
    }


    setSquare(unitSquare,blocks[1],0,0);
    
}
//________________________init function________________________________________

//________________________resize functions_____________________________________

const addMargin=(element,num)=>{
    element.style.marginTop=`${num}rem`
}
const setHeight=(element,num)=>{
    element.style.height=`${num}px`;
}
const setFontSize=(element,num)=>{
    element.style.fontSize=`${num}rem`
}

const setSquare= (square,block,px)=> {
    let widthOfContainer= block.clientWidth;
    let heightOfContainer= block.clientHeight
    if(widthOfContainer<=heightOfContainer){    
    square.style.width=`${widthOfContainer-px}px`;
    square.style.height= `${widthOfContainer-px}px`;
    square.style.top = `${(heightOfContainer-widthOfContainer)/2}px` 
    square.style.left=0;   
    squareWidth= square.style.width;
    }
    else {
    square.style.width=`${heightOfContainer-px}px`;
    square.style.height= `${heightOfContainer-px}px`;
    square.style.top = `0`    
    square.style.left= `${(widthOfContainer-heightOfContainer)/2}px`
    squareWidth= square.style.width;

    }
}

onInit();
let numberOfPoints=0;
window.addEventListener("resize",()=>{        
    (numberOfPoints!=0 && preventResize===false) ? movePointsToSquare(numberOfPoints):0;
    onInit();
})

//________________________resize functions_____________________________________

//_________________________dom for logic________________________________________________
        let successPoints = document.querySelectorAll(".successPoint");
        let dangerPoints = document.querySelectorAll(".dangerPoint");
        let successBox = document.querySelector(".num_points_in");
        let dangerBox = document.querySelector(".num_points_out");
        let counterIn=  document.querySelector(".counter_in");
        let counterOut = document.querySelector(".counter_out");
        let finalSum =document.querySelector(".sum_num");
        let startInitBox = document.querySelector(".init_in_points");
        let startOutBox = document.querySelector(".init_out_points");
//________________________dom for logic________________________________________________





//_______________________LOGIC_________________________________________________________

//____________________classes________________________________________________

class Point {
    constructor(x,y){
        this.x=x;
        this.y=y;
    }
}

class PointInScreen{
    constructor(top,left){
        this.top=top;
        this.left=left;
    }
}
//____________________classes________________________________________________



// _____________________button listeners___________________________________
const submitTest= async ()=>{
    onInit();
    let inputVal = document.querySelector("input").value;
    let warningLabel = document.querySelector("label");
    let formula = document.querySelector(".final_showed_formula");
    if(inputVal!=false){
        resetSecondFormula(formula);
        activeResultBtn=true;
        warningLabel.style.transform="translateY(-50px)"
        await wait(0.005);
        warningLabel.style.visibility="hidden";        
        movePointsToSquare(inputVal);        
    }
    else{
        warningLabel.style.visibility="visible";
        await wait(0.1);
        warningLabel.style.transform="translateY(0px)"
    }
}

const showResult= async ()=>{
    if(pointsInSquare){
        resultClicked=true;
        preventResize=true;
        let topScroll=document.documentElement.scrollTop
        scrollToY(document.querySelectorAll(".points")[1].getBoundingClientRect().top+topScroll)
        setResultButton("off")          
        let successPoints = document.querySelectorAll(".successPoint");
        let dangerPoints = document.querySelectorAll(".dangerPoint");        
        let result =await Promise.all([movePointsToResultBox(successPoints,successBox,counterIn,finalSum), movePointsToResultBox(dangerPoints,dangerBox,counterOut,finalSum)]);
        console.log(result)
        if(result[0]===1 && result[1]===1){
            
            finalSum.innerHTML=parseInt(counterOut.innerHTML)+parseInt(counterIn.innerHTML);
            await wait(1.8);
            let sucPoints =document.querySelector(".suc_points");
            let allPoints = document.querySelector(".all_points");
            let formula = document.querySelector(".final_formula");
            showFormula(counterIn.innerHTML,finalSum.innerHTML,formula,sucPoints,allPoints);
            await wait(2.6);
            resetFormula(formula);
            showSecondFormula(document.querySelector(".final_showed_formula")
                ,Math.round(100*(4*parseInt(sucPoints.innerHTML))/parseInt(allPoints.innerHTML))/100)

            resultClicked=false
        }      
    }
    else{        
        console.log("Points are not yet in the square.");
    }
}
// _____________________button listeners___________________________________

//______________________dom functions_____________________________________
const showSecondFormula= async(formula,finalNum)=> {
    formula.style.visibility="visible";
    await wait(0.2);
    formula.style.transform="translateY(0px)";
    document.querySelector(".desCis").innerHTML=finalNum;
}
const resetSecondFormula= async(formula)=> {
    if(formula.style.visibility="visible"){
        formula.style.transform="translateY(40px)";
        await wait(0.005);
        formula.style.visibility="hidden";
        }
}

const showFormula=async (successPoint,allPoints,box,succeessResult,allResult)=>{
    succeessResult.innerHTML=successPoint;
    allResult.innerHTML=allPoints;
    box.style.visibility="visible";
    await wait(0.2);
    box.style.transform="translateY(0px)";

}
const resetFormula = async (box)=>{
    if(box.style.visibility="visible"){
    box.style.transform="translateY(40px)";
    await wait(0.005);
    box.style.visibility="hidden";
    }
    
}
const scrollToY= async (pos)=>{
    return new Promise(res=>{
       res(
            window.scrollTo({
                top: pos,            
                behavior: 'smooth'
            }),
          
            );
    })
}
const setResultButton= (mode)=>{
    if(mode==="on"){
        pointsInSquare=true;
        showResultBtn.style.backgroundColor="white"
        showResultBtn.style.color="pink"
    }
    else {
        pointsInSquare=false;
        showResultBtn.style.backgroundColor="rgba(87, 13, 172, 0.308)"
        showResultBtn.style.color="white"
    }
}

const movePointsToSquare= async (num)=>{
    if(!resultClicked){
    preventResize=false;
    setResultButton("off");
    onInit();
    resetStats(); 
    let squareCord =unitSquare.getBoundingClientRect();
    let scrollTop= document.documentElement.scrollTop;
    scrollToY(squareCord.top+scrollTop);             
    let sortedPoints = initPoints(num,startInitBox,startOutBox);   
    sortedPointsInSquare=sortedPoints;     
    let finishCordDangerPointArr=[];
    let finishCordSuccessPointArr=[];
    sortedPoints.dangerPoints.forEach(e=>{        
        finishCordDangerPointArr.push(new PointInScreen(squareCord.top+(squareCord.bottom-squareCord.top)*e.y,squareCord.left+(squareCord.right-squareCord.left)*e.x));
    })
    sortedPoints.successPoints.forEach(e=>{        
        finishCordSuccessPointArr.push(new PointInScreen(squareCord.top+(squareCord.bottom-squareCord.top)*e.y,squareCord.left+(squareCord.right-squareCord.left)*e.x));
    })
    let successPoints = document.querySelectorAll(".successPoint");
    let dangerPoints = document.querySelectorAll(".dangerPoint");
    let topScroll=document.documentElement.scrollTop;
    for(let i=0;i<successPoints.length;i++){
        
        if(num<20){
            await wait(0.05);
        }
        else {
        await wait(1.5/num);
        }
        
        moveTo(successPoints[i],finishCordSuccessPointArr[i].left,finishCordSuccessPointArr[i].top+topScroll,0.15,"visible");        
    }
    
    let i =0;
    dangerPoints.forEach(el=>{
        moveTo(el,finishCordDangerPointArr[i].left,finishCordDangerPointArr[i].top+topScroll,0.15,"visible");
        i++;
    })
    
    cordsSuccessInSquare=finishCordSuccessPointArr;
    cordsDangerInSquare=finishCordDangerPointArr;
    setResultButton("on");
    
}
     
}


const movePointsToResultBox= async (points,box,counter)=> {
    
    let boxCords =box.getBoundingClientRect();  
    
    points.forEach(e=>{
        e.style.transition="0.5s ease-in";
    })  
    let scrollTop=document.documentElement.scrollTop;
    for(let i=0;i<points.length;i++){
        await moveToAsync(points[i],boxCords.left+10,scrollTop+boxCords.top+10,0.005,"hidden");
        await wait(0.01);    
        counter.innerHTML=parseInt(counter.innerHTML)+1;

    }
    points.forEach(e=>{
        e.style.transition="1s ease-in";
    })  
    
    return new Promise((res,rej)=>{
         res(1);
         rej(0);
    })
    


}

const moveToAsync= async (element,x,y,s,visibility) => {    
    
    return new Promise(res=>res(
        element.style.left=`${x}px`,
        element.style.top=`${y}px`,                
        element.style.visibility=visibility ,
           
    ));
         
    
      
}

const initPoints=(num,successParent,dangerParent)=>{
    numberOfPoints=num; //for resizing purpose
    let existingSuccessPoints =document.querySelectorAll(".successPoint");
    existingSuccessPoints.forEach(e=>{
        document.body.removeChild(e);
    })
    let existingDangerPoints =document.querySelectorAll(".dangerPoint")
    existingDangerPoints.forEach(e=>{
        document.body.removeChild(e);  
    })
    
    let pointArr = createPosOfPoints(num)
    let sortedPoints = sortPoints(pointArr); 
    sortedPoints.successPoints.forEach(e=>{
        let successPoint= document.createElement("div");
        successPoint.className+="successPoint";        
        document.body.appendChild(successPoint);
        placePointsInInitBox(successPoint,startInitBox);             
    }) 
    sortedPoints.dangerPoints.forEach(e=>{
        let dangerPoint= document.createElement("div");
        dangerPoint.className+="dangerPoint";
        document.body.appendChild(dangerPoint);
        placePointsInInitBox(dangerPoint,startOutBox);
    })      
    
    
    return sortedPoints;
}

const placePointsInInitBox=(point,box)=>{
    let cord = box.getBoundingClientRect();
    let topScroll=document.documentElement.scrollTop;
    point.style.left=`${cord.left+15}px`;
    point.style.top=`${cord.top+15+topScroll}px`;
}

const moveTo= async (element,x,y,s,visibility)=>{    
    
    element.style.left=`${x}px`;
    element.style.top=`${y}px`;   
    await wait(s);
    element.style.visibility=visibility; 

  
}

const resetStats=()=>{
    counterIn.innerHTML= 0;
    counterOut.innerHTML= 0;
    finalSum.innerHTML= 0;        
}
//______________________dom functions_____________________________________


//_____________________non-dom functions__________________________________
const wait =s=> new Promise(res=> setTimeout(res,s*1000));


const createPosOfPoints=(num)=>{
    let pointArr= []
    for(let i =0 ;i<num;i++){
        let point = new Point(Math.random(),Math.random());
        pointArr.push(point);
    }
    return pointArr;
}

const sortPoints=(pointsArr)=>{
    let points ={
        successPoints:[],
        dangerPoints:[]
    }    
    pointsArr.forEach(e=>{
        if((Math.pow(e.x,2)+Math.pow(e.y,2))<1){
            points.successPoints.push(e);
        }
        else {
            points.dangerPoints.push(e);
        }        
    })
    return points;

}
//_____________________non-dom functions__________________________________