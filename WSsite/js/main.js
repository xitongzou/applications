(function() {
    $('.panel-collapse').on('show.bs.collapse', function (e) {
        var target = e.target;
        var $panelHeading = $(target).prev();
        $panelHeading.find('img').attr('src','img/arrow-expanded.png');
        $panelHeading.find('.accordionState').html('Expanded');
    });
    $('.panel-collapse').on('hide.bs.collapse', function (e) {
        var target = e.target;
        var $panelHeading = $(target).prev();
        $panelHeading.find('img').attr('src','img/arrow-collapsed.png');
        $panelHeading.find('.accordionState').html('Collapsed');
    });
    $('#add-to-cart-modal').on('show.bs.modal', function (e) {
        var modal = $(this);
        var quantity = $('#quantity').val();
        modal.find('.modal-body .quantity-modal').html(quantity);
    });
    $('.thumbnail').on('click', function (e) {
        var target = e.target;
        if (target.children.length > 0) {
            target = $(target).find('img');
        }
        var imgPath = $(target).attr('data-image');
        var title = $(target).attr('alt');
        $('.main-image img').attr('src', 'img/' + imgPath);
        $('.title').html(title);
        $('.active').html(title);
    })
})();
