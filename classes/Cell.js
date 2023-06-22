class Cell{
    constructor(container, x, y, width, height, num, msg, borderRadius){
        this.container=container;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.num=num;
        this.msg=msg;
        this.borderRadius=borderRadius+"px";

        this.box=document.createElement("div");
        this.numDiv=document.createElement("div");
        this.msgDiv=document.createElement("div");

        this.box.style.position="absolute"
        this.box.style.left=this.x+"px";
        this.box.style.top=this.y+"px";
        this.box.style.width=this.width+"px";
        this.box.style.height=this.height+"px";
        this.box.style.border="1px solid #dcdcdc";
        this.box.style.background="white";
        this.box.style.boxSizing="border-box";

        this.numDiv.style.width=100+"%";
        this.numDiv.style.height=30+"px";
        this.numDiv.style.background="white";
        this.numDiv.style.fontSize=25+"px";
        this.numDiv.style.fontWeight="bold";
        //일요일 빨간색표시
        if(num%7==1){
        this.numDiv.style.color="rgb(221, 34, 57)";
        }
        //토요일 파란색표시
        if(num%7==0){
        this.numDiv.style.color="rgb(43, 34, 221)";
        }
        this.msgDiv.style.width=100+"%";
        this.msgDiv.style.height=70+"px";
        this.msgDiv.style.background="white";
        this.msgDiv.style.fontSize=25+"px";

        //데이터 타입
        this.numDiv.innerText=this.num;//날짜대입
        this.msgDiv.innerText=this.msg;//메세지대입

       // 부착
       this.box.appendChild(this.numDiv);
       this.box.appendChild(this.msgDiv);
       this.container.appendChild(this.box);

       //이벤트 연결
       this.msgDiv.addEventListener("mousedown", ()=>{
           flag=!flag;
           showHidePop(flag, pop.div)    

           //alert(pop+"저 올라왓어요");
           currentCell= this;
           //console.log("유저가 선택한 셀은 ", currentCell);

        let str = current_yy+"년 "+(current_mm+1)+"월 "+this.num+"일";
        //클릭한 대상의 value
        let option = document.createElement('option');
        option.text = str;
        option.value = 0;
        pop.selectArray[0].add(option); 

       });
       
    }
    tick(){
        this.x+=this.velX;
        this.y+=this.velY;
    }
    render(){
        this.left=x+"px";
        this.top=y+"px";
    }
}