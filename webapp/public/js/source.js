(function(){


	initAlteracaoMorada();

	$('.radio-choose-morada').on("click",function() {
		$('.radio-choose-morada').closest(".caixa").removeClass("caixa-selected");
  		$('.radio-choose-morada:checked').closest(".caixa").addClass("caixa-selected");
	});


	function initAlteracaoMorada(){
		$('.radio-choose-morada:checked').closest(".caixa").addClass("caixa-selected");
		$(".successButton").hide();
	}

	$('#validar4c').on("click",validar);

    $(".code4Validated").on("click", function(){
        closeSoundsMorada();
        morada4.play();
    });

    $(".concluir-button").on("click", function(){
        closeSoundsMorada();
        morada9.play();
    });

    $(".go-to-3").on("click", function(){
        closeSoundsMorada();
        morada8.play();
        var id = $("#novaMorada2").find(".map").attr('id');
        var m;

        if(!id){ id = 'map' + (new Date().getTime()); $(this).attr('id', id); }

        m = new GMaps({div: '#' + id,lat: 38.720763,lng: -9.145881});

        m.addMarker({lat: 38.720763,lng: -9.145881});
    });


	function validar(){
        var l = $("#inputCod4").val().length;
        if(l===4){
            closeSoundsMorada();
            morada3.play();
            $('#validar4c').closest(".form-group").addClass("success");
            $(".successButton").show();
            $('#validar4c').hide();
            $(".code4Validated").show();
        }else{
            $('#validar4c').closest(".form-group").removeClass("success");
        }
    }
})();

function handEdit(){
    $(".form-control").prop('disabled', false);
    $(".disabled").removeClass("disabled")
}


    $('#chatbot-trigger').on('click', function(event){
        closeAudiosAuth();
        if (typeof chat2 !== 'undefined')chat2.play();
        event.preventDefault();
        var $chatbot = $('#chatbot');

        if($chatbot.hasClass('open')){
            $('#chatbot-trigger').find("i").removeClass("fa-times");
            $('#chatbot-trigger').find("i").addClass("chatIcon");
            $('#chatbot-trigger').removeClass("chatOpen");
            $('#chatbot-trigger').addClass("chatClosed");
            $chatbot.stop().fadeOut(function(){
                $(this).removeClass('open');
                $(".message-block").remove();
            });
        } else {
            $('#chatbot-trigger').find("i").addClass("fa-times");
            $('#chatbot-trigger').find("i").removeClass("chatIcon");
            $('#chatbot-trigger').addClass("chatOpen");
            $('#chatbot-trigger').removeClass("chatClosed");
            $chatbot.stop().fadeIn(function(){
                $(this).addClass('open');
                $('#chatbot .message-waiting').stop().fadeIn(); 
                setTimeout(function(){ 
                    printMessage('Olá! Eu sou o Assistente Virtualdo Portal do Cidadão.'); 
                    $('#chatbot .message-waiting').stop().fadeIn();
                    setTimeout(function(){  printMessage('Se precisar de algum ajuda, escreva o que precisa. Para uma ajuda mais eficaz, coloque as questões individualmente.'); },2000);
                },1000);
            });
        }
    });

    function send(event){
        event.preventDefault();
        var wrapper = $('#chatbot .chat-wrapper');
        var val = $('#chatbot-input').val();
        var chat = $('#chatbot .chat');
        var html = '<div class="message-block"><p class="message in"><span>' + $('#chatbot-input').val() + '</span></p></div>';


        if(wrapper.height() > wrapper.parent().height()){
            chat.scrollTop(wrapper.outerHeight()-wrapper.parent().outerHeight() );
        }

        $('#chatbot-input').val('').focus();

        $(html).insertBefore($('#chatbot .chat-wrapper .message-waiting'));
        var element = $(".chat");
        element[0].scrollTop = element[0].scrollHeight;

        sendResponse(val);
    }

    $("#chatbot-input").keypress(function(e) {
        if(e.which == 13) {
            send(e);
        }
    });

    $('#chatbot-send').on('click', function(event){
        send(event);
    });

    function printMessage(mensagem){
        $('#chatbot .message-waiting').stop().hide();

        var html = '<div class="message-block"><p class="message out"><span>' + mensagem + '</span></p></div>';
        $(html).insertBefore($('#chatbot .chat-wrapper .message-waiting'));

    }

    function sendResponse(val){

        var mensagem = '';

        var split = val.toLowerCase().split(' ');

            console.log($.inArray('mudar', split));

            if( ($.inArray('mudar', split) > -1  ||
                $.inArray('alterar', split) > -1||
                $.inArray('mudança', split) > -1||
                $.inArray('mudanca', split) > -1||
                $.inArray('alteração', split) > -1||
                $.inArray('alteracao', split) > -1||
                $.inArray('alteracão', split) > -1||
                $.inArray('alteraçao', split) > -1 ) &&
                $.isArray('morada', split) > -1 ){

                closeAudiosAuth();
                if (typeof chat4 !== 'undefined')chat4.play();

                $('#chatbot .message-waiting').stop().fadeIn(); 
                var element = $(".chat");
                element[0].scrollTop = element[0].scrollHeight;
                setTimeout(function(){ 
                    printMessage('Alterar a morada no cartão de cidadão é um processo rápido e simples, com apenas 3 passos.');
                    var element = $(".chat");
                    element[0].scrollTop = element[0].scrollHeight; 
                    $('#chatbot .message-waiting').stop().fadeIn();
                    var element = $(".chat");
                    element[0].scrollTop = element[0].scrollHeight;
                    setTimeout(function(){  
                        printMessage('Escolha uma das opções:'); 
                        var element = $(".chat");
                        element[0].scrollTop = element[0].scrollHeight;
                        setTimeout(function(){  
                            var html = '<a href="/alteracao-morada.html" class="search-bubble">Alteração da minha morada</a><a href="./alteracao-morada.html" class="search-bubble">Alteração da morada por terceiros</a>';
                            $(html).insertBefore($('#chatbot .chat-wrapper .message-waiting'));
                            var element = $(".chat");
                            element[0].scrollTop = element[0].scrollHeight;
                        },500);
                    },2000);
                },2000);
                

            } else {
                $('#chatbot .message-waiting').stop().fadeIn(); 
                var element = $(".chat");
                element[0].scrollTop = element[0].scrollHeight;
                setTimeout(function(){ 
                    printMessage('Não percebi, pode explicar me por outras palavras?');
                    var element = $(".chat");
                    element[0].scrollTop = element[0].scrollHeight;
                },3000);
            }

    }


init();

(function(){

    $("#top-search").keypress(function(e) {
        if(e.which == 13) {
            var search = $("#top-search").val();
            window.location.href = './results.html?search='+search; //relative to domain
        }
    });

    $("#main-search").keypress(function(e) {
        var search = $("#main-search").val();

        if(e.which == 13) {
            window.location.href = './results.html?search='+search; //relative to domain
        }
    });

    $("#main-search").keyup(function(e) {
        
        if (typeof pesq2B !== 'undefined'){
            if(!pesq2B){
                closeAudios();
                if (typeof pesq2 !== 'undefined')pesq2.play();
                pesq2B =true;
            }
        }
        
        
        var search = $("#main-search").val();
        var substring = "gravidez de risco";
        console.log(search);
        if(search.includes(substring)){
            //var audio3 = new Audio('./sounds/Gravação3.m4a');
            //audio3.play();
        }
    });

    $('.input-group input[type="text"]').on('focus', function(){
        $(this).closest('.input-group').addClass('is-focused');
    });

    $('.input-group input[type="text"]').on('blur', function(){
        $(this).closest('.input-group').removeClass('is-focused');
    });

    $('.form-group input[type="text"]').on('focus', function(){
        $(this).closest('.form-group').addClass('is-focused');
    });

    $('.form-group input[type="text"]').on('blur', function(){
        $(this).closest('.form-group').removeClass('is-focused');
    });

    $('#footer .langs-select select.select2').select2().on('select2:open', function(){
        $('body > .select2-container--open').addClass('langs')
    });

    function restartSelect( target ){
        var select = target.find('select.select2.form-control');

        select.each(function(){
            $(this).select2().select2('destroy').next('.select2-container').remove();
        });
        select.select2();
    }

    $('#noticias-slider').owlCarousel({
        loop: false,
        margin: 10,
        nav: true,
        items: 4,
        dots: true,
        slideBy: 4,
        navText: ['<img src="images/left_arrow.png" height="22"/>','<img src="images/right_arrow.png" height="22"/>']
    });

    // alteracao de morada
    (function(){
        var $container = $('#alteracao-morada'),
            $controls = $('#alteracao-morada-controls'),
            $next_btns = $container.find('.btn.next'),
            $back_btns = $container.find('.btn.back'),
            $active_step,
            current_step = 0;

            $back_btns.on('click', function(event){
                event.preventDefault();
                $active_step = $container.find('.step.active');

                $container.height($active_step.height());



                $active_step.fadeOut(function(){
                    var $next, h;
                    $(this).removeClass('active');

                    // atualiza a barra de progresso
                    $controls.removeClass('step'+(current_step-1));
                    $controls.find('.progress-label label').eq(current_step).removeClass('completed');
                    current_step -= 1;
                    $controls.addClass('step'+(current_step-1));

                    console.log(current_step)

                    $next = $container.find('.step').eq(current_step);
                    $next.show();
                    h = $next.height();
                    $next.hide();

                    $("html, body").stop().animate({scrollTop:$('#alteracao-morada-header').offset().top - 30}, 500, 'swing', function() {
                        //alert("Finished animating");
                    });

                    $container.stop().delay(500).animate({height:h}, function(){
                        $next.show();
                        restartSelect($next);
                        $next.hide();

                        console.log($next);

                        $next.fadeIn(function(){
                            $container.css('height','auto');
                            $(this).addClass('active');

                            _transitionCompleted.call(null, current_step-1, $next);

                            return;
                        });
                    });
                });
            });

            $next_btns.on('click', function(event){
                event.preventDefault();
                $active_step = $container.find('.step.active');

                $container.height($active_step.height());



                $active_step.fadeOut(function(){
                    var $next, h;
                    $(this).removeClass('active');

                    // atualiza a barra de progresso
                    $controls.removeClass('step'+(current_step+1));
                    $controls.find('.progress-label label').eq(current_step).addClass('completed');
                    current_step += 1;
                    $controls.addClass('step'+(current_step+1));

                    console.log(current_step)

                    $next = $container.find('.step').eq(current_step);
                    $next.show();
                    h = $next.height();
                    $next.hide();

                    $("html, body").stop().animate({scrollTop:$('#alteracao-morada-header').offset().top - 30}, 500, 'swing', function() {
                        //alert("Finished animating");
                    });

                    $container.stop().delay(500).animate({height:h}, function(){
                        $next.show();
                        restartSelect($next);
                        $next.hide();

                        console.log($next);

                        $next.fadeIn(function(){
                            $container.css('height','auto');
                            $(this).addClass('active');

                            _transitionCompleted.call(null, current_step, $next);

                            return;
                        });
                    });
                });
            });

            function _transitionCompleted( step, section ){
                var maps = [];

                if(section.hasClass('loaded')){ return; }

                section.addClass('loaded');

                //console.log(section.find('.map'))

                section.find('.map').each(function(){
                    var lat = $(this).attr('data-lat'),
                        lng = $(this).attr('data-lng'),
                        id = $(this).attr('id'),
                        m;

                        if(!id){ id = 'map' + (new Date().getTime()); $(this).attr('id', id); }

                        if(!lat){
                            GMaps.geolocate({
                              success: function(position) {
                                    lat = position.coords.latitude;
                                    lng = position.coords.longitude;
                                    m = new GMaps({
                                        div: '#' + id,
                                        lat: lat,
                                        lng: lng
                                    });

                                    m.addMarker({
                                        lat: lat,
                                        lng: lng
                                    })
                              },
                              error: function(error) {
                                //alert('Geolocation failed: '+error.message);
                              },
                              not_supported: function() {
                                //alert("Your browser does not support geolocation");
                              },
                              always: function() {
                                //alert("Done!");
                              }
                            });
                        }else {
                            m = new GMaps({
                                div: '#' + id,
                                lat: lat,
                                lng: lng
                            });

                            m.addMarker({
                                lat: lat,
                                lng: lng
                            })
                        }
                });
            }

            _transitionCompleted(current_step,$container.find('.step.active'));

        return;

    })();


})();


    function pesquisarMorada(){

        $(".form-need-to-write").prop('disabled', false);

        $("#adress").val("Avenida da Liberdade");
        $("#selectFreguesia").val("Rato").trigger('change');
        $("#selectConcelho").val("Lisboa").trigger('change');
        $("#selectDistrito").val("Lisboa").trigger('change');
        var id = $("#novaMorada").find(".map").attr('id');
        var m;

        if(!id){ id = 'map' + (new Date().getTime()); $(this).attr('id', id); }

        m = new GMaps({div: '#' + id,lat: 38.720763,lng: -9.145881});

        m.addMarker({lat: 38.720763,lng: -9.145881});

    }

    function validateComplete(size,origin,next){
        var l = $("#"+origin).val().length;
        if(l >= size){
           $("#"+next).focus();
        }
    }

    function init(){
        $(".code4Validated").hide();
        $(".results").hide();
    }

    function updateSearch(elm){
        var val = $(elm).val().toLowerCase(), l = $(elm).val().length;

        if(l<2){$('.labels-container span.label').css('opacity',1);return;}

        $('.labels-container span.label').each(function(){

            var $this = $(this), txt = $this.text().toLowerCase();

            if(txt.indexOf(val) > -1){
                $this.css('opacity',1);
            } else {
                $this.css('opacity',0.2);
            }
        });

        /*
        if(l > 0){
            $(".myLabel2").show();
            $(".myLabel4").show();
            $(".myLabel8").show();
            $(".results").hide();
            if(l > 2){
                $(".myLabel2").hide();
                $(".results").show();
                if(l > 4){
                    $(".myLabel4").hide();
                    if(l > 8){
                        $(".myLabel8").hide();
                    }
                }
            }
        }
        */
    }

/*
$('#input-search-wrapper').waypoint({
    handler: function(direction) {
        if(direction === 'down'){
            $('#header .search').stop().slideDown(200);
            $('#search-container .search-container').css({opacity:0.2});
            $('#search-container .search-bubbles--container').css({opacity:0.2});
        } else {
            $('#header .search').stop().slideUp(200);
            $('#search-container .search-container').css({opacity:1});
            $('#search-container .search-bubbles--container').css({opacity:1});
        }
    },
    offset: (101 + 20)
});*/


$('#search-container .read-more').on('click', function(event){
    event.preventDefault();
    $("html, body").animate({scrollTop: $('body > .wrapper').offset().top - 184 }, 500, 'swing');
});

function closeAudios(){
    if (typeof intro !== 'undefined')intro.pause();
    if (typeof intro2 !== 'undefined')intro2.pause();
    if (typeof intro3 !== 'undefined')intro3.pause();
    if (typeof pesq1 !== 'undefined')pesq1.pause();
    if (typeof autenticar1 !== 'undefined')autenticar1.pause();

    if (typeof chat1 !== 'undefined')chat1.pause();
    if (typeof chat2 !== 'undefined')chat2.pause();
}

function closeAudiosAuth(){
    if (typeof chat1 !== 'undefined')chat1.pause();
    if (typeof chat2 !== 'undefined')chat2.pause();
    if (typeof chat3 !== 'undefined')chat3.pause();
}

($(function(){
    var $container = $('#search-container'),
        $search = $('#main-search'),
        $search_cats = $('#search-bubbles'),
        $level1 = $('#search-bubbles-level-1'),
        $level1_car, $level2_car,
        $level2 = $('#search-bubbles-level-2'),
        filterClassPref = 'search-bubble',
        animating = false;

    if(!$('#header .search-container').hasClass('scroll-disabled')){
        $(window).scroll(function(){

            if($(window).scrollTop() >= 1 ){
                $('#header .search-container').addClass('opened');
            } else {
                $('#header .search-container').removeClass('opened');
            }
        });
    }

    var hint_text = 'Gravidez';
    var hint_text2 = 'Gravidez de risco';

    $search.on('keyup', function(){
        var val = $(this).val(), val1 = val.toLowerCase(), split = val1.split(' '),
            hint = $(this).siblings('.hint');


        $search_cats.find('.search-bubble').removeClass('search-bubble--enabled');
        $search_cats.find('.search-bubble').addClass('search-bubble--disabled');

        if( val !== '' ){
            $container.find('.search-wrapper').addClass('no-padding');
            $container.find('.read-more').fadeOut();
        } else {
            setTimeout(function(){$container.find('.search-wrapper').removeClass('no-padding');}, 250);
            $container.find('.read-more').fadeIn();
            hint.hide();
            $search_cats.find('.search-bubble').removeClass('search-bubble--disabled');
            $search_cats.find('.search-bubble').removeClass('search-bubble--enabled');
            return;
        }

        $('#search-results .search-results--list').fadeOut();
        $('#search-results .search-results--filters').fadeOut();
        $('#header-bubbles').slideUp();

        $search_cats.find('.search-bubble--active').removeClass('search-bubble--active');
        $search_cats.find('.search-bubble--inactive').removeClass('search-bubble--inactive');

        closeLevel1();

        if(hint_text.toLowerCase().indexOf(val.toLowerCase()) === 0){
            showResults("familia",true);
            hint.show();

            var tmp_text = val.split(''), hint_tmp = hint_text.split('');
            for( var i = 0; i < hint_text.length; i++ ){
                if( i < val.length ){
                    tmp_text[i] = val[i];
                } else {
                    tmp_text[i] = hint_tmp[i];
                }
            }
            hint.text(tmp_text.join(''));

            $search_cats.find('.search-bubble').addClass('search-bubble--disabled');
            $search_cats.find('.search-bubble.saude, .search-bubble.eventos-vida, .search-bubble.seg-social-main').removeClass('search-bubble--disabled');
        } else {
            if(hint_text2.toLowerCase().indexOf(val.toLowerCase()) === 0){
                showResults("maternidade",true);
            hint.show();

            var tmp_text = val.split(''), hint_tmp = hint_text2.split('');
            for( var i = 0; i < hint_text2.length; i++ ){
                if( i < val.length ){
                    tmp_text[i] = val[i];
                } else {
                    tmp_text[i] = hint_tmp[i];
                }
            }
            hint.text(tmp_text.join(''));

            $search_cats.find('.search-bubble').addClass('search-bubble--disabled');
            $search_cats.find('.search-bubble.saude, .search-bubble.eventos-vida, .search-bubble.seg-social-main').removeClass('search-bubble--disabled');
        }else{
            hint.hide();
        }
    }

    });

    function openLevel1(c){

        var d = $.Deferred(), newBubbles;

        $level1.show().addClass('open');

        if( c !== '') {
            newBubbles = $level1.find('.bubbles-placeholder .' + c );
        } else {
            newBubbles = [];
        }

        $level1_car = $level1.find('.owl-carousel').owlCarousel('destroy').empty().append(newBubbles.clone());

        if(newBubbles.length > 0){
            $level1_car = $level1.find('.owl-carousel').owlCarousel({
                loop: false,
                margin: 10,
                nav: true,
                items: 1,
                autoWidth: true,
                stagePadding: 200,
                navText: ['<img src="images/left_arrow.png" height="22"/>','<img src="images/right_arrow.png" height="22"/>']
            });
        }


        $level1.hide();

        $level1.find('.owl-carousel').css({opacity:0, visibility:'hidden'});
        $level1.slideDown(300, function(){
            $level1.find('.owl-carousel').css({visibility:'visible'}).animate({opacity:1}, 200, function(){
                d.resolve();
            });
        });

        return d.promise();
    }

    function closeLevel1(){
        var d = $.Deferred();
        $level1.slideUp(function(){
            d.resolve();
        });
        return d.promise();
    }

    function showResults(className, showFilters){
        var d = $.Deferred();
        $('#search-results .search-results--loader').hide();
        $('#search-results').children('.row').show();
        $('#search-results').fadeIn(function(){
            var $this = $(this);
            $('#search-results .search-results--loader').fadeIn(function(){

                $(this).fadeOut(function(){
                    $this.find('.search-result').addClass('hidden');
                    $this.find('.search-result.' + className).removeClass('hidden');
                    $this.find('.search-results--list').fadeIn();


                    if(showFilters){
                        $('#search-results').delay(500).find('.search-results--filters').fadeIn(function(){
                            var $that = $(this);

                            if(!$that.hasClass('has-waypoint')){
                                //$('#search-results-filters').waypoint({
                                $that.waypoint({
                                    handler: function(direction){
                                        //alert('teste')
                                        if(direction === 'down'){
                                            $('#header-filters').show();

                                        } else {
                                            $('#header-filters').hide();

                                        }
                                    },
                                    offset: 239
                                });
                                $that.addClass('has-waypoint');
                            }

                            $this.find('.search-results--list').slideDown();
                        });
                    }

                    d.resolve();
                });
            });
        });

        return d.promise();
    }

    $search_cats.find('.search-bubble').on('click', function(event){
        event.preventDefault();

        if($(this).hasClass(filterClassPref+'--disabled')){ return false;}

        if(animating) { return false };
        animating = true;

        $(this).siblings().addClass(filterClassPref + '--inactive').removeClass(filterClassPref+'--active');
        $(this).removeClass(filterClassPref + '--inactive').addClass(filterClassPref + '--active');

        var className = $(this)[0].className.split(' ');

        className = $.map($(this)[0].className.split(' '), function(value){
                if(value.indexOf(filterClassPref) === -1){
                    return value;
                }
        }).join('');

        $container.find('.search-wrapper').addClass('no-padding');
        $container.find('.read-more').fadeOut();

        $search_cats.find('.search-bubble.search-bubble--active').removeClass('search-bubble--active');
        $level1.find('.search-bubble.search-bubble--active').removeClass('search-bubble--active');
        $search_cats.find(event.target).addClass(filterClassPref + '--active');

        $('#search-results .search-results--list').fadeOut();
        $('#search-results .search-results--filters').fadeOut();
        $('#header-bubbles').slideUp();

        if($level1.hasClass('open')){
            $.when(closeLevel1()).then(function(){
                $.when(openLevel1(className)).then(function(){
                    animating = false;
                    showResults(className);
                });
            });
        } else {
            $.when(openLevel1(className)).then(function(){
                animating = false;
                showResults(className);
            });
        }

        return;
    });

    $(document).on('click', '#search-bubbles-level-1 .search-bubble', function(event){
        event.preventDefault();

        var $level1 = $('#search-bubbles-level-1');

        if(animating) { return false };
        animating = true;

        var className = $(this).attr('href').replace('#','');

        $level1.find('.search-bubble.search-bubble--active').removeClass('search-bubble--active');
        $(event.target).addClass(filterClassPref + '--active');


        $level1_car.trigger('to.owl.carousel', $level1.find('.search-bubble.search-bubble--active').parent().index());

        $('#search-results .search-results--filters').fadeOut();
        $('#search-results .search-results--list').fadeOut(function(){
            showResults(className, true).then(function(){
                $("html, body").animate({scrollTop: $('#search-results').offset().top - 239 + 10 }, 500, 'swing', function(){});
            });

            animating = false;
        });

        $('#search-bubbles-results')
            .empty()
            .show()
            .append($search_cats.find('.search-bubble--active').clone())
            .append($('#search-bubbles-level-1').find('.search-bubble--active').clone())

        $('#search-bubbles-results').find('.search-bubble--active').removeClass('search-bubble--active').addClass('nmb');

        $('#header-filters').find('.wrapper').html($('#search-results-filters').clone().removeAttr('id').show()).removeClass('np');
        $('#header-bubbles').slideDown();
    });
}));
