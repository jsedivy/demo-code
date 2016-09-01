$(document).ready(function () {
    //width for skill indicator
    var maxWidth = 200;

    $('.skill-level').each(function () {
        animateSkill($(this));
    });

    function animateSkill(skillLevelContainer) {
        var level = parseInt(skillLevelContainer.attr('data-value'));
        var w = maxWidth * level / 100;
        skillLevelContainer.animate({ width: w }, {
            duration: 2000,
            step: function (currentWidth) {
                var percent = parseInt(currentWidth / maxWidth * 100);
                if (isNaN(percent))
                    percent = 0;
               // $(this).parent().find('.skill-percent').html(percent + '%');
            }
        });
    }
    
    var bars = $('.bars')
    
});