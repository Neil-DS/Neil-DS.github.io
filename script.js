$('hyperlinked_row_reuse').onclick = function(){clicked_table_row('hyperlinked_row_reuse')};
$('hyperlinked_row_brot').onclick = function(){clicked_table_row('hyperlinked_row_brot')};
$('hyperlinked_row_3').onclick = function(){clicked_table_row('hyperlinked_row_3')};
$('hyperlinked_row_4').onclick = function(){clicked_table_row('hyperlinked_row_4')};


function $(x) {return document.getElementById(x);}

function clicked_table_row(x){
    var link_urll = $(x);
    window.location = link_urll.getAttribute("data-linker");
}


