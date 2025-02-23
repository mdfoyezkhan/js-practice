const sections =document.querySelectorAll('section');
// console.log(sections)
for(const section of sections){
    section.style.border = '2px solid green';
    section.style.margin = '30px';
    section.style.background = '#333';
    section.style.borderRadius = '50px';
    section.style.width = '400px';
    section.style.float = 'left';
    section.style.margin = 'auto 20px';
    section.style.display = 'flex';
    section.style.padding = '30px'
}
const placesContainer =document.getElementById('places-container');
placesContainer.classList.add('beg');
// placesContainer.classList.add('large');
placesContainer.classList.remove('large')

