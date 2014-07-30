$(function () {
   $('.panel-post > .panel-footer > .input-placeholder, .panel-post > .panel-post-comment > .panel-post-textarea > button[type="reset"]').on('click', function(event) {
        var $panel = $(this).closest('.panel-post');
            $comment = $panel.find('.panel-post-comment');
            
        $comment.find('.btn:first-child').addClass('disabled');
        $comment.find('textarea').val('');
        
        $panel.toggleClass('panel-post-show-comment');
        
        if ($panel.hasClass('panel-post-show-comment')) {
            $comment.find('textarea').focus();
        }
   });
   $('.panel-post-comment > .panel-post-textarea > textarea').on('keyup', function(event) {
        var $comment = $(this).closest('.panel-post-comment');
        
        $comment.find('button[type="submit"]').addClass('disabled');
        if ($(this).val().length >= 1) {
            $comment.find('button[type="submit"]').removeClass('disabled');
        }
   });
});

