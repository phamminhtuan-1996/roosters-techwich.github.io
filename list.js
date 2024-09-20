fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const ambulanceList = document.getElementById('ambulance-list');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Function to display ambulances based on filter (default: all)
    function showAmbulances(filteredData = data.list) {
      ambulanceList.innerHTML = ''; // Clear existing list items
      filteredData.forEach(ambulance => {
        const listItem = document.createElement('div');
        listItem.classList.add('ambulance-entry'); // CSS class for styling
        listItem.innerHTML = `
          <h2>${ambulance.title}</h2>
          <p>Hospital: ${ambulance.hospital}</p>
          <p>Type: ${ambulance.type}</p>
          <p>Price: ${ambulance.price}</p>
          <img src="${ambulance.image}" alt="${ambulance.title}">
          <button>Book Now</button>
        `;
        ambulanceList.appendChild(listItem);
      });
    }

    // Call showAmbulances to display all ambulances initially
    showAmbulances();

    // Add click event listeners to filter buttons
    filterButtons.forEach(button => {
      button.addEventListener('click', () => {
        const filterType = button.textContent.toLowerCase(); // Get filter type (price or type)
        // Implement filtering logic based on filterType and update data.list
        // Example (assuming price filter): data.list.filter(ambulance => ambulance.price.includes('420.000'))
        const filteredData = data.list.filter(/* implement filtering logic here */);
        showAmbulances(filteredData);
      });
    });

    // Mobile swipe functionality (optional, using TouchSwipe.js)
    if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
      const ambulanceListContainer = document.getElementById('ambulance-list');
      let currentAmbulanceIndex = 0; // Track current ambulance index

      const swipeOptions = {
        swipe: function (event, direction, distance, duration, fingerCount) {
          if (direction === 'left') {
            currentAmbulanceIndex = Math.min(currentAmbulanceIndex + 1, data.list.length - 1);
          } else if (direction === 'right') {
            currentAmbulanceIndex = Math.max(currentAmbulanceIndex - 1, 0);
          }
          showAmbulances([data.list[currentAmbulanceIndex]]);
        }
      };

      $(ambulanceListContainer).swipe(swipeOptions);
    }

    // Add click event listener to "Book now" buttons
    const bookNowButtons = document.querySelectorAll('.ambulance-entry button');
    bookNowButtons.forEach(button => {
      button.addEventListener('click', () => {
        // Handle the click event here, e.g., display a confirmation message or redirect to a booking page
        console.log('Book now button clicked!');
      });
    });
  });