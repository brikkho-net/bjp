/* global $ */

/**
 * Shuffles array in place.
 * @param {Array} a items The array containing the items.
 */
function shuffle(a) {
    var j, x, i;
    for (i = a.length; i; i -= 1) {
        j = Math.floor(Math.random() * i);
        x = a[i - 1];
        a[i - 1] = a[j];
        a[j] = x;
    }
}

$(function () {
  console.log('ready')

  // Insert images into grid
  shuffle(window.thumbs)
  for (var i = 0; i < window.thumbs.length; i++) {
    var thumb = window.thumbs[i]
    var thumbpath = 'img/thumbs/' + thumb.fn
    var fullpath = 'img/full/' + thumb.fn

    var div = $('<div class="grid-item">')
    var link = $('<a data-gallery>').attr('href', fullpath)
    var img = $('<img width="200">').attr('height', thumb.height/2).attr('src', thumbpath)
    $('#links').append(div.append(link.append(img)))
  }

  // Masonry them
  $('#links').masonry({
    itemSelector: '.grid-item',
    columnWidth: 208
  })
})
