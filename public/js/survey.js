var lazyArray =[];

$(function(){
		
    var quizNumber = 1,
                  i = 1,
                   q= 0;
                 
    
    $("#numberQuiz").html(quizNumber);
    
    $("#totalQuiz").html($(".question").length);
    
    $(".question").each(function(){
    
        $(this).attr("id","question"+(i++));
    
    });
    
    
    $(".question span").each(function(){
    
        $(this).click(function(){
            value = $(this).attr("value");
            lazyArray.push(value);
            console.log(value, "what is value");
            q++;
            
            if(q !== $(".question").length){
            
                $(".question").each(function(){
                    
                    $(this).hide();
                    
                });
            
                $("#numberQuiz").html(q+1);
            
                $("#question"+(q+1)).show();
            
            }else{
                
                q = $(".question").length - 1;
                                        
                $("#survey").fadeOut(function(){
                    
                    $("#finish").fadeIn();
                    console.log(lazyArray);
                    $.post("/api/survey_answers", {
                        a1: lazyArray[0],
                        a2: lazyArray[1],
                        a3: lazyArray[2],
                        a4: lazyArray[3],
                        a5: lazyArray[4],
                        a6: lazyArray[5],
                        a7: lazyArray[6],
                        a8: lazyArray[7],
                        a9: lazyArray[8],
                        a10: lazyArray[9],
                    }).then(result => {
                        window.location.replace("/events");
                    })
                });
            
            }		
            
        });
    
    });
    
})