const getdate = document.getElementById('date');
const getdesc = document.getElementById('text');
const getnumber = document.getElementById('number');
const getform = document.querySelector('.form');
const getbtn = document.querySelector('.btn')
const gettable = document.querySelector('.table');
const gettbody = document.querySelector('.tbody');
const deleteicon = document.querySelector('.fa-trash');
// console.log(deletebtn);







getform.addEventListener('submit',function(e){


	newtr = document.createElement('tr');


	newtd = document.createElement('td');
		newtd.textContent = getdate.value;


	newtr.appendChild(newtd);	

	newtd = document.createElement('td');

	newtd.textContent = getdesc.value;
	

	newtr.appendChild(newtd);


	newtdnumber = document.createElement('td');

	newtdnumber.textContent = getnumber.value;
	newtdnumber.classList = 'input-number';
	

	newtr.appendChild(newtdnumber);
	newtdi = document.createElement('td');

	newi = document.createElement('i');
	newi.classList = "fa-solid fa-trash delete-icon";

	newtdi.appendChild(newi);
	

	newtr.appendChild(newtdi);
	document.querySelector('tbody').appendChild(newtr);

	// document.querySelector('table').appendChild();


		e.preventDefault();



	
		
const numbers = document.querySelectorAll('.input-number');


console.log(numbers.value);



 

	  	

   // console.log(getnumberr);
  });






















window.onclick = function(e){


	if(e.target.className == 'fa-solid fa-trash delete-icon'){



		e.target.parentElement.parentElement.remove();

		const subnumber = e.target.parentElement.previousElementSibling.textContent;

		let subnumbertoString =Number(subnumber);
		// console.log(typeof subnumbertoString);



		





	}
}




// console.log(totalamount);s


  // const total = getnumber.value;









// console.error(deletebtn);








  





























