var gKeepResolve;


//delete all popup//
function deleteAllSwal() {
    closePopup();

    swal({
        title:"Are you sure?",
        text: "Once deleted, you will not be able to recover!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
    })
    .then(function (willDelete) {
        if (willDelete) {
            swal("Your search history has been deleted!", {
                icon: "success",
            });
            deleteAll();
        } else {
            swal("Your search history remains!");
        }
    });
}

function deleteAll(){
   gSearches = [];
   renderSearches(gSearches); 
}

function closePopup(){
    document.querySelector('.popup').hidden = true;
}


//change theme popup//
function changeThemeCustomPopup() {
    showConfirmPopup().then(function (isConfirmed) {
        if(isConfirmed){
            var elInput = document.querySelector('input[type=color]');
            var color = elInput.value;
            var body = document.querySelector('body');
            body.style.backgroundColor = color;
        } 
    })
}

function showConfirmPopup() {
    document.querySelector('.popup').hidden = false;

    return new Promise(function (resolve, reject) {
        gKeepResolve = resolve;
    });
}

function doCancel() {
    gKeepResolve(false);
    closePopup();
}

function doChange() {
    gKeepResolve(true);
    closePopup();
}
