let slider = document.querySelector('.slider');

let views = document.querySelector('.views');
let amount = document.querySelector('.amount');
let checkbox = document.querySelector('#checkbox');


slider.oninput = function(){

	let sliderValue = document.querySelector('#slider').value;


	if(sliderValue <= 10){
		
		if(checkbox.checked == true){
			 
		views.innerHTML = 10 + 'K ';
		amount.textContent = '$' + '6.00';

	}else{
		views.innerHTML = 10 + 'K ';
		amount.textContent = '$' + '8.00';
	}
	}
	
	if(sliderValue >10 && sliderValue < 25){

		if(checkbox.checked == true){
			views.innerHTML = 50 + 'K';
			amount.textContent = '$' + '8.00';
		}else{
			views.innerHTML = 50 + 'K';
			amount.textContent = '$' + '12.00';
		}

	}
	 if(sliderValue > 25 && sliderValue < 50){
		if(checkbox.checked == true){
			views.innerHTML = 100 + 'K';
			amount.textContent = '$' + '12.00';
		}else{
			
			views.innerHTML = 100 + 'K';
			amount.textContent = '$' + '16.00';
			
			
		}

	}
	 if(sliderValue > 50 && sliderValue < 75){
		if(checkbox.checked == true){
			views.innerHTML = 500 + 'K';
			amount.textContent = '$' + '18.00';
		}else{
			views.innerHTML = 500 + 'K';
			amount.textContent = '$' + '24.00';
			
			
		}

}
	 if(sliderValue > 75 && sliderValue < 100){
		if(checkbox.checked == true){
			views.innerHTML = 1000 + 'M';
			amount.textContent = '$' + '27.00';
		}else{
			views.innerHTML = 1000 + 'M';
			amount.textContent = '$' + '36.00';
			
			
		}

	}
	

}


