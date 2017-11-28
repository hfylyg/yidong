/*
* @Author: Administrator
* @Date:   2017-11-10 00:07:53
* @Last Modified by:   Administrator
* @Last Modified time: 2017-11-22 19:42:59
*/

window.onload=function(){

	//选项卡
	let menu=document.getElementsByClassName("menuli");
	let xuan=document.getElementsByClassName("xuan");
	console.log(menu,xuan);
	for(let i=0;i<menu.length;i++){
		menu[i].onmouseover=function(){
			xuan[i].style.display="block";
			xuan[0].style.display="none";
		}
		menu[i].onmouseout=function(){
			xuan[i].style.display="none";
		}

	}

    //二维码
    let hr=document.querySelector(".hr-right-1");
    let ewm=document.querySelector(".ewmbox");
    hr.onmouseenter=function(){
        ewm.style.display="block";
    }
     hr.onmouseleave=function(){
        ewm.style.display="none";
    }

	//轮播图
	let dom=document.querySelector(".banner-zhong");
    let picli=document.querySelectorAll(".banner-pic li");
    let width=parseInt(getComputedStyle(picli[0],null).width);
    let btns=document.querySelectorAll(".lunbo li");
    let right=document.querySelector(".bz-right");
    let left=document.querySelector(".bz-left");
    console.log(width,picli.length,left,right);
    let now=0;
    let next=0;
    let flag=true;
    console.log(width)
    let t=setInterval(move,2000);
    function move(){

      next=now+1;
       if(next>=picli.length){
       		next=0;
       }
       
       
       
       picli[next].style.left="740px";
       animate(picli[now],{left:-740},2000);
       animate(picli[next],{left:0},2000);

        now=next;
    }
   
   function move(){
   	next=now+1;
   	if(next==picli.length){
   		next=0;
   	}
   	picli[next].style.left="740px";
   	animate(picli[now],{left:-740},2000);
   	animate(picli[next],{left:0},2000);
   	btns[now].classList.remove("hot");
    btns[next].classList.add("hot");
   	now=next;
   }


    dom.onmouseenter=function () {
        clearInterval(t);
    }
    dom.onmouseleave=function () {
        t=setInterval(move,2000);
    }

    function move1() {

        next=now-1;
        if(next<0){
            next=picli.length-1;
        }
        picli[next].style.left=-width+"px";
        animate(picli[now],{left:width},2000);
        animate(picli[next],{left:0},2000,fn);
        btns[now].classList.remove("hot");
        btns[next].classList.add("hot");

        now=next;
    }
    right.onclick=function () {
       if(flag){
           flag=false;
           move();
       }

    }
    left.onclick=function () {
       if(flag){
           flag=false;
           move1();
        }

    }
    btns.forEach(function(val,index){
        val.onclick=function () {
            if(flag){
                flag=false;
                if(index>now){
                    picli[index].style.left=width+"px";
                    animate(picli[now],{left:-width},2000,fn);
                    animate(picli[index],{left:0},2000);
                    btns[now].classList.remove("hot");
                    btns[index].classList.add("hot");
                    now=index;


                }
                else if(index<now){
                    picli[index].style.left=-width+"px";
                    animate(picli[now],{left:width},2000,fn);
                    animate(picli[index],{left:0},2000);
                    btns[now].classList.remove("hot");
                    btns[index].classList.add("hot");
                    now=index;

                }
                else{
                    fn();
                    return;

                }
            }

        }
    })
        function fn() {
            flag=true;
        }







	//平移滚动
	/*let gd=document.getElementById("gundong");
	let gundong=gd.getElementsByTagName("ul");
	let gdlist=gundong[0].getElementsByClassName("gundong1");
	let gdcount=parseInt(gundong[0].childElementCount);
	let gneikuan=document.getElementsByClassName("gneikuan")[0];
	console.log(gdcount);
	gundong[0].style.width=`${295*gdcount}px`;
	
	
	let btnR=document.getElementsByClassName("jiantou1")[0];
	let btnL=document.getElementsByClassName("jiantou")[0];
	console.log(btnR,btnL);
	let num=0;
	btnR.onclick=function(){
		fnr();
	}
	
	function fnr(){
		num++
		if(num==gdlist.length-3){
			num=0;
		// gneikuan.style.transition="none";
			return;
		}
		gundong[0].style.transform=`translateX(${-295*num}px)`;

	}
	function fnl(){
		num--
		if(num==-1){
			num=gdlist.length-3;
			return;
		}
		gundong[0].style.transform=`translateX(${-295*num}px)`;
	}
	let time=setInterval(fnr, 2000);

	gd.onmouseover=function(){
		clearInterval(time);
	}
	gd.onmouseout=function(){
		time=setInterval(fnr, 2000);
	}
	btnR.onclick=function(){
		fnr();
	}
	btnL.onclick=function(){
		fnl();
	}
*/

	//节点轮播

	let gdom=document.querySelector("#gundong");
    let box=document.querySelector(".gneikuan");
    let gright=document.querySelector(".jiantou1");
    let gleft=document.querySelector(".jiantou");
    let gflag=true;
    function gmove() {
        animate(box,{left:-248},1000,gfn)
    }

    function gfn() {
        box.style.left=0;
        let first=box.firstElementChild;
        box.appendChild(first);
        gflag=true;
    }

    function gmove1(){
        gfn1();
        animate(box,{left:0},1000,function () {
            gflag=true;
        })

    }
    function gfn1() {
        box.style.left="-248px";
        let last=box.lastElementChild;
        let first=box.firstElementChild;
        box.insertBefore(last,first);

    }
    
    let gtime=setInterval(gmove, 2000);
    gdom.onmouseover=function(){
    	clearInterval(gtime);
    }
     gdom.onmouseout=function(){
    	
    	gtime=setInterval(gmove, 2000);
    }


    gright.onclick=function () {
        if(!gflag){
            return;
        }
        gflag=false;
        gmove1();
    }
    gleft.onclick=function () {
        if(!gflag){
            return;
        }
        gflag=false;
        gmove();
    }








	//公告
	let gonggao=document.getElementById("gonggao");
	let gg=document.getElementsByClassName("gg-zhong1");
	let ggj=document.getElementsByClassName("fangxiang")[0];
	let ggL=ggj.getElementsByTagName("button")[0];
	let ggR=ggj.getElementsByTagName("button")[1];

	let a=0;
	let ggtime=setInterval(ggfn, 2000);
	function ggfn(){
		a++;
		if(a==gg.length-1){
			a=0;
		}
		for(let i=0;i<gg.length;i++){
			gg[i].style.display="none";
		}
		gg[a].style.display="block";
		gg[a+1].style.display="block";
		
	}
	function ggfn1(){
		a--;
		if(a==0){
			a=gg.length-1;
		}
		for(let i=0;i<gg.length;i++){
			gg[i].style.display="none";
		}
		gg[a].style.display="block";
		gg[a-1].style.display="block";
		
	}
	ggL.onclick=function(){
		ggfn();
	}
	ggR.onclick=function(){
		ggfn();
	}
	gonggao.onmouseover=function(){
		clearInterval(ggtime);
	}
	gonggao.onmouseout=function(){
		ggtime=setInterval(ggfn, 2000);
	}

}