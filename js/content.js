// doctor
const doctor = [
	{
		id: 1,
		skill: 'CONSULTING DOCTOR',
		name: 'Dr. Sarah Johnson',
		phone: '+82682 2458',
		email: 'sara@gmail.com',
		address: 'santa monica, ca',
		desc: '"Comparing teeth whitening prices here and elsewhere, I picked BeClinic. The result was beyond my expectations!"',
		img: './img/team-1.jpg',
	},
	{
		id: 2,
		skill: 'DENTAL HYGIENIST',
		name: 'Dr. Greg House',
		phone: '+98564200',
		email: 'greg@gmail.com',
		address: 'santa monica, ca',
		desc: '"Comparing teeth whitening prices here and elsewhere, I picked BeClinic. The result was beyond my expectations!"',
		img: './img/team-2.jpg',
	},
	{
		id: 3,
		skill: 'PEDIATRICIAN',
		name: 'Dr. Marta Stewart',
		phone: '+0178965',
		email: 'marta@gmail.com',
		address: 'santa monica, ca',
		desc: '"Health is a state of complete physical, mental and social well-being, and not merely the absence of disease or infirmity."',
		img: './img/team-3.jpg',
	},
	{
		id: 4,
		skill: 'CARDIAC SURGEON',
		name: 'Dr. Night Shyamala',
		phone: '+826dd82 2d458',
		email: 'night@gmail.com',
		address: 'santa monica, ca',
		desc: '"Taking my kids to a dentist has never been easier. They just loved the welcoming and warm atmosphere in there!"',
		img: './img/team-4.jpg',
	},
	{
		id: 5,
		skill: 'CARDIAC SURGEON',
		name: 'Dr. Night Shyamala',
		phone: '+826dd82 2d458',
		email: 'night@gmail.com',
		address: 'santa monica, ca',
		desc: '"Taking my kids to a dentist has never been easier. They just loved the welcoming and warm atmosphere in there!"',
		img: './img/team-5.jpg',
	},
	{
		id: 6,
		skill: 'CARDIAC SURGEON',
		name: 'Dr. Night Shyamala',
		phone: '+826dd82 2d458',
		email: 'night@gmail.com',
		address: 'santa monica, ca',
		desc: '"Taking my kids to a dentist has never been easier. They just loved the welcoming and warm atmosphere in there!"',
		img: './img/team-6.jpg',
	},
	{
		id: 7,
		skill: 'CARDIAC SURGEON',
		name: 'Dr. Night Shyamala',
		phone: '+826dd82 2d458',
		email: 'night@gmail.com',
		address: 'santa monica, ca',
		desc: '"Taking my kids to a dentist has never been easier. They just loved the welcoming and warm atmosphere in there!"',
		img: './img/team-7.jpg',
	},
	{
		id: 8,
		skill: 'CARDIAC SURGEON',
		name: 'Dr. Night Shyamala',
		phone: '+826dd82 2d458',
		email: 'night@gmail.com',
		address: 'santa monica, ca',
		desc: '"Taking my kids to a dentist has never been easier. They just loved the welcoming and warm atmosphere in there!"',
		img: './img/team-8.jpg',
	},
];

const teamCenter = document.querySelector('.team-center');

window.addEventListener('DOMContentLoaded', function(){
	let displayDoctor = doctor.map(function(doctorItem){
		return `
          <div class="item-content">
            <div class="team-content">
              <div class="team-img">
                <img src=${doctorItem.img}>
                <div class="overlay">
                  <div class="team-social">
                    <ul>
                      <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                      <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                      <li><a href="#"><i class="fa fa-linkedin"></i></a></li>
                    </ul>
                  </div>
                </div>
              </div>
              <div class="team-info">
                <div class="skill">
                  <h4><a href="">${doctorItem.skill}</a></h4>
                </div>
                <div class="team-name">
                  <h4><a href="#">${doctorItem.name}</a></h4>
                </div>
                <div class="team-phone">
                  <h5><i class="fa fa-mobile"></i> ${doctorItem.phone}</h5>
                </div>
                <div class="team-email">
                  <h5><i class="fa fa-envelope"></i> ${doctorItem.email}</h5>
                </div>
              </div>
            </div>
          </div>
		`;
	});
	displayDoctor = displayDoctor.join('');
	teamCenter.innerHTML = displayDoctor;
});
