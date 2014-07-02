$(function () {
    $('.tweet-compose').on('click', function () {
        $('.tweet-compose').css({ 'height': '4.5em', 'transition-property': 'all', 'transition-duration': '.5s' });
    });

    $('#tweet-submit').on('click', function () {
        var tweet = $('textarea.tweet-compose').val();
        var name = $('#name').text();
        var getUsername = function() {
            return ' @' + name.split(' ').join('');
        };
        var username = getUsername();
        
        $('#stream').prepend($('<div class="tweet"><div class="content"><img class="avatar" src="img/alagoon.jpg"><strong class="fullname">' + name + '</strong><span class="username">' + username + '</span><p class="tweet-text">'  + tweet + '</p><div class="tweet-actions"> <div class="tweet-actions"><ul><li><span class="icon action-reply"></span> Reply</li><li><span class="icon action-retweet"></span> Retweet</li><li><span class="icon action-favorite"></span> Favorite</li><li><span class="icon action-more"></span> More</li></ul></div> </div>'));
    });

    $('.tweet').mouseenter(function() {
        $(this).find('.tweet-actions').show();
    }).mouseleave(function() {
        $(this).find('.tweet-actions').hide();
    });

});

function compose(e, val) {
    var counter = document.getElementById('char-count');

    counter.innerHTML = (e.type == 'keyup') + 139 - val.length;

    if (counter.innerHTML > 0) {
        $('#tweet-controls').show('');
    }

    if (counter.innerHTML <= 10) {
        $('#char-count').css('color', 'red');
    } else {
        $('#char-count').css('color', '#999');
    }

    if (counter.innerHTML < 0) {
        $('#tweet-submit').attr('disabled', 'disabled');
    } else {
        $('#tweet-submit').removeAttr('disabled');
    }
}