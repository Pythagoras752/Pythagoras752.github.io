
function showNotificationPopup() {
    var userResponse = confirm("Do you want to get browser notifications about peaches?");
    
    if (userResponse) {
        
        alert("You will receive notifications about peaches!");
        
    } else {
        
        alert("You opted not to receive notifications about peaches.");
    }
}


document.addEventListener('DOMContentLoaded', function() {
    showNotificationPopup();
});


document.addEventListener('DOMContentLoaded', function() {
    var header = document.getElementById('page1');


    header.addEventListener('mouseenter', function() {
        header.style.backgroundColor = '#FFC107'; 
    });

    header.addEventListener('mouseleave', function() {
        header.style.backgroundColor='' 
    });
});



