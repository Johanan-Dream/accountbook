class Pop{
    constructor(container, x, y, width, height, color){
        this.container=container;
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;
        this.color=color;

        this.div=document.createElement("div");
        this.div.style.left=this.x+"px";
        this.div.style.top=this.y+"px";
        this.div.style.width=this.width+"px";
        this.div.style.height=this.height+"px";
        this.div.style.position="absolute";
        this.div.style.background= this.color;
        this.div.style.border="1px #dcdcdc solid";
        this.div.style.boxSizing= "border-box";
        this.div.style.borderRadius=10+"px";
        this.div.style.filter="drop-shadow(0 0 15px rgba(0, 0, 0, .1))";
        this.div.style.display="none";
        this.container.appendChild(this.div);

        this.createControl();            
    }

    createControl(){
        let divArray=new Array(5);
        divArray[0]=document.createElement("div");
        divArray[1]=document.createElement("div");
        divArray[2]=document.createElement("div");
        divArray[3]=document.createElement("div");
        divArray[4]=document.createElement("div");

        for(let i=0;i<divArray.length;i++){
            divArray[i].style.width=100+"%";
            divArray[i].style.height=100+"px";
            divArray[i].style.background= "rgb(160, 195, 145)";
            divArray[i].style.boxSizing= "border-box";
        }

        this.selectArray=new Array(3);
        this.selectArray[0]=document.createElement("select");
        this.selectArray[1]=document.createElement("select");
        this.selectArray[2]=document.createElement("select");

        this.selectArray[1].addEventListener("change", ()=>{
            getSubList();
        });

        for(let i=0;i<this.selectArray.length;i++){
            this.selectArray[i].style.marginLeft=105+"px";
            this.selectArray[i].style.background="white";
            this.selectArray[i].style.border="2px #dcdcdc solid";
            this.selectArray[i].style.boxSizing= "border-box";
            this.selectArray[i].style.borderRadius=20+"px";
            this.selectArray[i].style.fontSize=20+"px";
            this.selectArray[i].style.paddingLeft=15+"px";
        }
            this.selectArray[0].style.marginTop=30+"px";
            
        let optionArray= new Array(4)
        optionArray[0]=document.createElement("option");
        optionArray[1]=document.createElement("option");
        optionArray[2]=document.createElement("option");
        optionArray[3]=document.createElement("option");

        optionArray[0].innerText=optionName[0];
        optionArray[1].innerText=optionName[1];
        optionArray[2].innerText=optionName[2];
        optionArray[3].innerText=optionName[3];

        optionArray[0].value=-1;
        optionArray[1].value=0;
        optionArray[2].value=1;
        optionArray[3].value=2;

        for(let i=0;i<optionArray.length;i++){
            optionArray[i].style.background="white";
            optionArray[i].style.fontSize=20+"px";
        }
        
        this.priceInput=document.createElement("input");
        this.priceInput.style.width=300+"px";
        this.priceInput.style.height=40+"px";
        this.priceInput.style.marginLeft=37+"px";
        this.priceInput.style.marginTop=15+"px";
        this.priceInput.style.border="2px #dcdcdc solid";
        this.priceInput.style.borderRadius=10+"px";
        this.priceInput.style.fontSize=30+"px";
        this.priceInput.style.paddingLeft=20+"px";
        this.priceInput.style.fontWeight="border";
        this.priceInput.placeholder="금액을 입력해주세요";

        this.textarea=document.createElement("textarea");
        this.textarea.style.width=300+"px";
        this.textarea.style.height=80+"px";
        this.textarea.style.marginLeft=37+"px";
        this.textarea.style.border="2px #dcdcdc solid";
        this.textarea.style.fontSize=30+"px";
        this.textarea.style.paddingLeft=20+"px";
        this.textarea.style.fontWeight="border";
        this.textarea.placeholder="메모를 입력해주세요";
        this.textarea.style.borderRadius=10+"px";

        let btArray=new Array(2);
        let btTitle=["등록", "취소"];
        for(let i=0;i<btArray.length;i++){
            btArray[i]=document.createElement("button");
            btArray[i].style.width=100+"px";
            btArray[i].style.height=50+"px";
            btArray[i].style.fontSize=30+"px";
            btArray[i].style.marginLeft=65+"px";
            btArray[i].style.marginTop=15+"px";
            btArray[i].style.borderRadius=10+"px";
            btArray[i].style.border="2px #dcdcdc solid";
            btArray[i].innerText=btTitle[i];
        }

        for(let i=0;i<this.selectArray.length;i++){
            this.selectArray[i].style.width=200+"px";
            this.selectArray[i].style.height=40+"px";
        }
        
        divArray[0].appendChild(this.selectArray[0]);
        this.div.appendChild(divArray[0]);

        divArray[1].appendChild(this.selectArray[1]);
        divArray[1].appendChild(this.selectArray[2]);
        this.div.appendChild(divArray[1]);

        this.selectArray[1].appendChild(optionArray[0]);
        this.selectArray[1].appendChild(optionArray[1]);
        this.selectArray[1].appendChild(optionArray[2]);
        this.selectArray[1].appendChild(optionArray[3]);

        divArray[2].appendChild(this.priceInput);
        this.div.appendChild(divArray[2]);

        divArray[3].appendChild(this.textarea);
        this.div.appendChild(divArray[3]);

        divArray[4].appendChild(btArray[0]);
        divArray[4].appendChild(btArray[1]);
        this.div.appendChild(divArray[4]);

        btArray[0].addEventListener("click", ()=>{
            this.regist();

            let len=this.selectArray[0].options.length;
        console.log(len);
        for(let i=0;i<len;i++){
            console.log(i);
            this.selectArray[0].remove(0); 
        }
        });

        btArray[1].addEventListener("click", ()=>{
            let len=this.selectArray[0].options.length;
            for(let i=0;i<len;i++){
                console.log(i);
                this.selectArray[0].remove(0); 
            }
            showHidePop(!flag, pop.div)
        });
    }
    regist(){
        let len=this.selectArray[0].options.length;
        console.log(len);
        for(let i=0;i<len;i++){
            console.log(i);
            this.selectArray[0].remove(0); 
        }
        
        let moneyInfo=[
            this.selectArray[0].value,
            this.selectArray[1].value,
            this.selectArray[2].value,
            this.priceInput.value,
            this.textarea.value
        ];

        moneyInfoArray.push(moneyInfo);
        showHidePop(false, pop.div);

        let str =optionName[(parseInt(this.selectArray[1].value)+1)]+"\t"+
        this.selectArray[2].value+"\t"+this.priceInput.value+this.textarea.value;

        currentCell.msgDiv.innerText=str;

        this.selectArray[1].value="-1";
        this.selectArray[2].value="0";
        this.priceInput.value="";
        this.textarea.value = "";
    };

}


