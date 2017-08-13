console.log('Loaded!');

document.getElementById('me');
me.onhover = function() {
    me.transform = scale(1.5);
    transition = 'all 0.5s ease-in-out';
};