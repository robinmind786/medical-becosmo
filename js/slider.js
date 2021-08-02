const review = [
	{
		id: 1,
		name: 'Robin Mind',
		address: 'Manikganj-1800',
		desc: 'They have four boys ranging in age from ten to three years old. “I have a Blackberry just to keep their schedules straight!',
	},
	{
		id: 2,
		name: 'John Cena',
		address: 'New York',
		desc: 'Comparing teeth whitening prices here and elsewhere, I picked BeClinic. The result was beyond my expectations!',
	},
	{
		id: 3,
		name: 'Angel',
		address: 'Losangle',
		desc: 'Taking my kids to a dentist has never been easier. They just loved the welcoming and warm atmosphere',
	},

];


const description = document.getElementById('review_desc');
const name = document.getElementById('review_name');
const address = document.getElementById('review_address');

const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');

let currentItem = 0;

window.addEventListener('DOMContentLoaded', function(){
	showPerson(currentItem);
});

function showPerson(person) {
	const item = review[person];
	description.textContent = item.desc;
	name.textContent = item.name;
	address.textContent = item.address;	
}

nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > review.length - 1) {
    currentItem = 0;
  }
  showPerson(currentItem);
});

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = review.length - 1;
  }
  showPerson(currentItem);
});

