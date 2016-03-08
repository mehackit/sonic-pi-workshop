$('.video').click(function(){this.paused?this.play():this.pause();});

$(function(){
    $('.video').on('mouseenter', function(){
        if( this.paused) this.play();
    }).on('mouseleave', function(){
        if( !this.paused) this.pause();
    });
});