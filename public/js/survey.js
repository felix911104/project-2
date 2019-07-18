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
                    
                });
            
            }		
            
        });
    
    });
    
})