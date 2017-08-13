console.log('Loaded!');

document.getElementById('me');
me.ontoggleclick = function() {
    me.style.marginLeft='200px';
    me.style.transform = 'scale(1.5)';
    me.style.transition = 'all 0.5s ease-in-out';
};