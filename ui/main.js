console.log('Loaded!');

document.getElementById('me');
me.onmousehover = function() {
    me.style.transform = 'scale(1.5)';
    me.style.transition = 'all 0.5s ease-in-out';
};