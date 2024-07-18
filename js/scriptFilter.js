document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchType = document.getElementById('searchType').value;
    const location = document.getElementById('location').value;
    const departureDate = document.getElementById('departureDate').value;
    const returnDate = document.getElementById('returnDate').value;
    const filters = {
        freeCancellation: document.getElementById('freeCancellation').checked,
        breakfastIncluded: document.getElementById('breakfastIncluded').checked,
        wifiIncluded: document.getElementById('wifiIncluded').checked
    };

    const searchItem = {
        searchType,
        location,
        departureDate,
        returnDate,
        filters
    };

    saveSearch(searchItem);
    displayLastSearches();
});

function saveSearch(searchItem) {
    let searches = JSON.parse(localStorage.getItem('searches')) || [];
    searches.push(searchItem);
    localStorage.setItem('searches', JSON.stringify(searches));
}

function displayLastSearches() {
    const searches = JSON.parse(localStorage.getItem('searches')) || [];
    const searchList = document.getElementById('searchList');
    searchList.innerHTML = '';
    searches.forEach((search, index) => {
        const li = document.createElement('li');
        li.textContent = `${search.searchType} di ${search.location} dari ${search.departureDate} sampai ${search.returnDate}`;
        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = '✖';
        deleteBtn.classList.add('delete');
        deleteBtn.onclick = function() {
            deleteSearch(index);
        };
        li.appendChild(deleteBtn);
        searchList.appendChild(li);
    });
}

function deleteSearch(index) {
    let searches = JSON.parse(localStorage.getItem('searches')) || [];
    searches.splice(index, 1);
    localStorage.setItem('searches', JSON.stringify(searches));
    displayLastSearches();
}

document.addEventListener('DOMContentLoaded', displayLastSearches);

// JavaScript to control modal
document.addEventListener('DOMContentLoaded', function() {
    var signInButton = document.getElementById('filter');
    var modal = document.getElementById('modal-login');
    var closeButton = document.querySelector('.close');
  
    // Open modal when sign in button is clicked
    signInButton.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        modal.style.display = 'block';
    });
  
    // Close modal when close button is clicked
    closeButton.addEventListener('click', function() {
        modal.style.display = 'none';
    });
  
    // Close modal when clicked outside of modal content
    window.addEventListener('click', function(event) {
        if (event.target == modal) {
            modal.style.display = 'none';
        }
    });
  });
  
  // menu login
  const modal = document.getElementById("modal-login");
  const loginBtn = document.querySelector(".navbar-extra #filter");
  const closeBtn = document.querySelector(".close");
  
  // Show the modal when the login button is clicked
  loginBtn.onclick = function() {
      modal.style.display = "flex";
  }
  
  // Hide the modal when the close button is clicked
  closeBtn.onclick = function() {
      modal.style.display = "none";
  }
  
  // Hide the modal when clicking outside of the modal content
  window.onclick = function(event) {
      if (event.target == modal) {
          modal.style.display = "none";
      }
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    // Get the modal
    var modal = document.getElementById("modal-login");

    // Get the button that opens the modal
    var btn = document.getElementById("filter");

    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];

    // When the user clicks on the button, open the modal
    btn.onclick = function() {
        modal.style.display = "block";
    }

    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // When the user clicks anywhere outside of the modal, close it
    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
});
