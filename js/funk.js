// JavaScript Document
// Alerta error
function alertDismissed() {
// acción, si fracasa
}
//función para mostrar alerta
function showAlert(msj) {
navigator.notification.alert(
    msj,  // mensaje
    alertDismissed,         // callback
    'Práctica 1',            // título
    'Aceptar'                  // nombre del botón
);
}
	/*	function deviceInfo(){
var s='Esto es otra prueba';
		$('#device table td').eq(1).text('android luis');
		//$('#device table td').eq(3).text(device.cordova);
		$('#device table td').eq(5).text(device.name);
		$('#device table td').eq(7).text('Adios');
		$('#device table td').eq(9).text(s);	
} */
$(document).ready(function(e) {
	/*$('.btn').tap(function(){
		var boton = (($(this).attr('class')).split(' '))[1];
		switch(boton){
			case 'b1':
				alert('beep 1');
				break;
			case 'b2':
				alert('beep 2');
				break;
			case 'b3':
				alert('beep 5');
				break;
			case 'v1':
				alert('vibrar');
				break;
			case 'v2':
				alert('vibrar');
				alert('vibrar');
				break;
		}
	});
	$('#right').swiperight(function(){
		alert('deslizó a la derecha');
	});
	$('#left').swipeleft(function(){
		confirm('¿Qué desea hacer?');
	});*/
	
	document.addEventListener("deviceready",function(){

	//	deviceInfo();
		
		
        $('.btn').tap(function(){
			var boton = (($(this).attr('class')).split(' '))[1];
			switch(boton){
				case 'b1':
					navigator.notification.beep(1);
					break;
				case 'b2':
					navigator.notification.beep(2);
					break;
				case 'b3':
					navigator.notification.beep(5);
					break;
				case 'v1':
					navigator.notification.vibrate(500);
					break;
				case 'v2':
					navigator.notification.vibrate(300);
					navigator.notification.vibrate(1000);
					break;
			}
		});
		$('#right').swiperight(function(){
			showAlert(device.name);
		});
		$('#left').swipeleft(function(){
			navigator.notification.confirm('¿Qué desea hacer?',function(boton){
				switch(boton){
					case 1:
						navigator.notification.beep(1);
						break;
					case 2:
						navigator.notification.vibrate(500);
						break;	
				}
			},"Práctica 1","Beep,Vibrar,Cancelar");
		});
	//navigator.notification.beep(1);
	//navigator.notification.vibrate(300);
	//navicator.notification.alert("Desliz&oacute; a la derecha", function(){  }, "Pr&acute;ctica 1", "Aceptar");
	}, false);
});
	