export default{
    setrem(){
       var windoww=document.documentElement.clientWidth||document.body.body.clientWidth;
        var uiw=375;
        document.documentElement.style.fontSize=(windoww/uiw)*100+'px'
    }
}
