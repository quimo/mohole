jQuery(document).ready(function(){
    console.log('DOM caricato...');
    console.log(jQuery(window).width());

    jQuery('.flip-card .seminario__intro, .flip-card .seminario__contenuto').on('click', function(){
        
        /*
        jQuery(this).parent().parent().css({
            'transform': 'rotateY(180deg)',
        });
        */
        
        jQuery(this).parent().parent().toggleClass('flip-card--rotate');
    });

});

/* attendo che la pagina sia caricata */
jQuery(window).on("load", function() {
    console.log('Pagina caricata!');
});