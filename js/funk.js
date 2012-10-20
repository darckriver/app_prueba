// JavaScript Document

	$(document).ready(function(e) {
       /* $('.btn').tap(function(){
		var boton =	(($(this).attr('class')).split(' '))[1];
		switch(boton){
			case 'b1':
				alert('beep 1');
				break;	
			case 'b2':
				alert('beep 3');
				break;	
			case 'b3':
				alert('beep 5');
				break;	
			case 'v1':
				alert('vibra');
				break;
			case 'v2':
				alert('vibra');
				alert('vibra');
				break;	
			}		
		});
		
		$('#right').swiperight(function(){
			alert('desliza a la derecha')
		});
		$('#left').swipeleft(function(){
			confirm('¿que desea hacer?')
		});
		
    });*/
	
	document.addEventListener("diviceready",function(){
		 $('.btn').tap(function(){
		var boton =	(($(this).attr('class')).split(' '))[1];
		switch(boton){
			case 'b1':
				navigator.notification.beep(1);
				break;	
			case 'b2':
				navigator.notification.beep(3);
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
			    navigator.notification.alert("Desliza a la derecha", function(){},"Practica 1","Aceptar");
		});
		$('#left').swipeleft(function(){
			    navigator.notification.confirm("¿que desea hacer?", function(boton){
					switch(boton){
						case '0':
							navigator.notification.beep(1);
							break;
						case '1':
							navigator.notification.vibrate(500);
							break;						
					}
					},"Preactica 1","Beep,Vibrar,Cancelar");
		});
		
		}, false);
		});// document ready