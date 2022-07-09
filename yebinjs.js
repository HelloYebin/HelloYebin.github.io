//first_content_tag_line 텍스트 변경
var A = "Fall 7 Times, stand up 8";
var B = "No sweat, no sweet";
var C = "Grind Hard, Shine Hard";
var D = "It Ain't Over 'Til It's Over";

//태그 라인 텍스트 변경
function change(){

    var text=document.getElementById('first_content_tag_line');
    if (text.innerText== A){
        text.innerText = B;
    }else if(text.innerText==B){
        text.innerText = C;
    }else if(text.innerText==C){
        text.innerText = D;
    }else if(text.innerText==D){
        text.innerText = A;
    };
};

//mouse enter event
const circleEvent = document.querySelectorAll('.circle');
const audio = new Audio('audio/hover_audio.MP3');


for(var i=0; i<circleEvent.length; i++){
        circleEvent[i].addEventListener('mouseenter', (mouseHover)=>{
            audio.play();
            audio.currentTime=0;
        });
    }

//click event
$(document).ready(function(){
    
    //클릭 이벤트
    $("#circle_1").click(function(){
        $(this).css("background-color","coral");
        $(".circle").not(this).css("background-color","white");
        $(".introduce").html("안녕하세요. 최선을 다하는 신입 프론트엔드 개발자 오예빈입니다.");
    });

    $("#circle_2").click(function(){
        $(this).css("background-color","coral");
        $(".circle").not(this).css("background-color","white");
        $(".introduce").html("일상에서 볼 수 있는 웹 페이지의 디자인과 동적인 기능들을 구현하고 싶어 시작하게 되었습니다.");
    });

    $("#circle_3").click(function(){
        $(this).css("background-color","coral");
        $(".circle").not(this).css("background-color","white");
        $(".introduce").html("핵심 인재로 성장하기 위해 자기계발로 이론적 지식을 쌓고 <br>실무에서 다양한 사람들과 협력을 하고 일을 수행하여 경험적 지식을 쌓겠습니다. ");
    });

    $("#circle_4").click(function(){
        $(this).css("background-color","coral");
        $(".circle").not(this).css("background-color","white");
        $(".introduce").html("현실에 안주 하지 않고 글로벌 인재로 나아가기 위해 <br>영어와 외국어등 언어적인 측면에서도 욕심을 가져, <br>사용자 니즈 파악 및 비즈니스를 하는 데에 완벽한 정도의 어학 실력을 갖추도록 하겠습니다.");
    });

    $("#circle_5").click(function(){
        $(this).css("background-color","coral");
        $(".circle").not(this).css("background-color","white");
        $(".introduce").html("프로젝트는 혼자서 수행할 수 있는 작업이 아닙니다. <br>팀원들과의 화합과 소통이 우선시 되어 프로젝트에 잘 스며들도록 노력하겠습니다. <br>그리하여 개발자와 사용자 모두가 만족하는 홈페이지를 만드는 것을 <br>이정표로 삼아 만들어 나가겠습니다. ");
    });

    //up버튼 클릭시 스크롤 이벤트
    $('.up').click(function(){
        var moveNav = $('.navbar').offset()
        $('html,body').animate({scrollTop:moveNav.top},500);
    });

    //클릭시 스크롤 이벤트
    $('.move_second_content').click(function(){
        $('html,body').animate({scrollTop:$(".second_content").offset().top},400);
    });

    $('.move_third_content').click(function(){
        $('html,body').animate({scrollTop:$(".third_content").offset().top},400);
    });

    $('.move_fourth_content').click(function(){
        $('html,body').animate({scrollTop:$(".fourth_content").offset().top},400);
    });

    //회전 이벤트
    $(".small_thumb").click(function(){

        var imgSrc = $(this).attr('src');

        $('.big_thumb').attr('src',imgSrc);
    });
    
    $("#ailen_icon").click(function(){
       var angle=($('#ailen_icon').data('angle')+360)||360;
       $('#ailen_icon').css({'transform': 'rotate(' + angle + 'deg)'});
        $('#ailen_icon').data('angle', angle);
    }); 
});

$(function(){
//자동 스크롤 이벤트 
    var skills = $('.skills');
    var skillsOST = skills.offset().top -700;
    var executed = false;

    $(window).scroll(function(){
        var currentSCT = $(this).scrollTop();
        if(currentSCT >= skillsOST){
            if(executed == false){
                skills.each(function(){
                    var item = $(this);
                    var title = item.find('img');
                    var targetNum = title.attr('data-num');
                    var circle = item.find('circle');

                    $({rate:0}).animate({rate:targetNum},
                        {
                            duration:1500,
                            // progress: rate가 바뀌는 동안 보여줄것
                            progress:function(){
                                var now = this.rate;
                                var amount = 630- (630*now/100);
                                circle.css({strokeDashoffset:amount});
                        }
                    });
                }); //chart each
                executed = true;
            }
        };
    });
});