document.getElementById('bookingForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const travelType = document.getElementById('travelType').value;
    const destination = document.getElementById('destination').value;
    const checkInDate = document.getElementById('checkInDate').value;
    const checkOutDate = document.getElementById('checkOutDate').value;
    const numGuests = document.getElementById('numGuests').value;

    const bookingDetails = {
        travelType,
        destination,
        checkInDate,
        checkOutDate,
        numGuests
    };

    console.log('Booking Details:', bookingDetails);
    alert('Booking successful!');
});
