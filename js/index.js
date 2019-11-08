var element, obj;

var menu = $("#menu"),
	menu_close = $("#menu_close"),
	menu_open = $("#menu_open"),
	message = $("#message"),
	message_open = $("a.btn_text"),
	message_close = $("#message_close"),
	view = $("#view"),
	view_open = $(".wrapper_works img"),
	view_close = $("#view_close");

$('body').click(function (event) {
	element = event.target||event.srcElement;
	if(element.id == menu.attr('id') || element.id == menu_close.attr('id')){
		obj = menu;
		close();
	}

	if(element.id == menu_open.attr('id') || element.getAttribute("data-id") == menu_open.attr('id')){
		obj = menu;
		open();
	}

	if(element.getAttribute('data-id') == message_open.attr('data-id')){
		event.preventDefault();
		obj = message;
		open();
	}

	if(element.id == message.attr('id') || element.id == message_close.attr('id')){
		obj = message;
		close();
	}

	if(element.getAttribute('data-id') == view_open.attr('data-id')){
		event.preventDefault();
		obj = view;
		open();
	}

	if(element.id == view.attr('id') || element.id == view_close.attr('id')){
		obj = view;
		close();
	}
});

function open(){
	if(obj.css ("display") == "none"){
		obj.fadeIn(500);
		$("body").css('overflow', 'hidden');
	}
}

function close(){
	if(obj.css ("display") != "none"){
		obj.fadeOut(100);
		$("body").css('overflow', 'auto');
	}
	obj = undefined;
}


$(".accept").on('click', function(event) {
	event.preventDefault();
	var cook = $(".cookies");
	cook.css('display', 'none');
});

$(document).ready(function(){
	$("a.link_item").on("click", function (event) {
		
		if(menu.css('display') != "none"){
			obj = menu;
			close();
		}
		
		event.preventDefault();
		var id  = $(this).attr('href'),
		top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 1500);
	});
});