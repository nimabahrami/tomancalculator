function pooper(){
    var x = document.getElementById("text_area").value;
    if (x>150000000){
        x=150000000
    }
    var div = document.createElement('div');
    div.id='overlay' 
    div.className = 'new-rect container';
    document.getElementsByTagName('body')[0].appendChild(div);
    var index
    var paragraph
    var text_string = "";
    for(index=0;index<Math.ceil(x/28850);index++){
        text_string="💩";
        paragraph = document.createElement('p');
        document.getElementsByClassName('new-rect')[0].appendChild(paragraph);
        name_add=String(index);
        class_name_para="new-para";
        new_class_name=class_name_para.concat(name_add)
        paragraph.className = new_class_name;
        change_class=document.getElementsByClassName(new_class_name);
        $(change_class).css('position',"absolute")
        $(change_class).css('margin-top',"-50px")
        $(change_class).css('left',String(Math.floor(Math.random() * (window.innerWidth/1.2 + 1) + 0))+"px")
        $(change_class).css('top',String(Math.floor(Math.random() * (window.innerHeight/1.5 - 1 + 1) + 0))+"px")
        $(change_class).css('font-size',"200px")
        $(change_class).css('opacity',"100%")
        $(change_class).css('padding-left',"100")
        paragraph.innerText=text_string;
        
    }
    var div_result = document.createElement('div');
    document.getElementsByTagName('body')[0].appendChild(div_result);
    div_result.className= "result-card"
    $(".result-card").css('left',window.innerWidth/2-window.innerWidth/6)
    $(".result-card").css('top',window.innerHeight/2-window.innerHeight/10)
    $(".result-card").css('width',window.innerWidth/3)
    $(".result-card").css('height',window.innerHeight/5)
    $(".result-card").css('text-align',"center")
    var paragraph_res;
    var result_final=Math.ceil(x/20000)
    paragraph_res = document.createElement('p');
    document.getElementsByClassName('result-card')[0].appendChild(paragraph_res);
    paragraph_res.className="result-text";
    paragraph_res.innerText=result_final+' ta GOH';
    $(".result-text").css('align',"center")
    $(".result-text").css('padding',"30px")
    $(".result-text").css('width','auto')
    $(".result-text").css('display','inline-block');

    }
