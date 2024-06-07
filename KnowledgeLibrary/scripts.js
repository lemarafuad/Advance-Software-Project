document.addEventListener('DOMContentLoaded', () => {
    // Fetch and display guides
    fetchGuides();

    // Add guide form submission
    const addGuideForm = document.getElementById('add-guide-form');
    if (addGuideForm) {
        addGuideForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const guide = {
                title: event.target.title.value,
                content: event.target.content.value,
                author: event.target.author.value,
                category: event.target.category.value
            };
            addGuide(guide);
        });
    }

    // Update guide form submission
    const updateGuideForm = document.getElementById('edit-guide-form');
    if (updateGuideForm) {
        updateGuideForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const guideId = event.target.id.value;
            const guide = {
                title: event.target.title.value,
                content: event.target.content.value,
                author: event.target.author.value,
                category: event.target.category.value
            };
            updateGuide(guideId, guide);
        });
    }

    
});

function fetchGuides() {
    fetch('http://localhost:3000/api/guides')
        .then(response => response.json())
        .then(guides => {
            const guidesList = document.getElementById('guides-list');
            guidesList.innerHTML = '';
            guides.forEach(guide => {
                const guideElement = document.createElement('div');
                guideElement.innerHTML = `
                <table style="width:100%">
               <tr>
                  <td>${guide.id}</td>
                  <td>${guide.author}</td>
                  <td>${guide.title}</td>
                  <td>${guide.content}</td>
                  <td>${guide.category}</td>
               </tr>
                  </table>
                
                `;
                guidesList.appendChild(guideElement);
            });
        })
        .catch(error => console.error('Error fetching guides:', error));
}

function addGuide(guide) {
    fetch('http://localhost:3000/api/guides', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(guide)
    })
    .then(response => response.json())
    .then(result => {
        if (result) {
            window.location.href = 'index.html'; // Redirect to homepage or guide list
        } else {
            console.error('Error adding guide:', result.message);
        }
    })
    .catch(error => console.error('Error adding guide:', error));
}


function updateGuide(id, guide) {
    fetch(`http://localhost:3000/api/guides/${id}`, {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(guide)
    })
    .then(response => response.json())
    .then(result => {
        if (result) {
            window.location.href = 'index.html'; // Redirect to homepage or guide list
        } else {
            console.error('Error updating guide:', result.message);
        }
    })
    .catch(error => console.error('Error updating guide:', error));
}


function deleteGuideById() {
    const guideId = document.getElementById('delete-guide-id').value;
    if (guideId) {
        fetch(`http://localhost:3000/api/guides/${guideId}`, {
            method: 'DELETE'
        })
        .then(response => response.json())
        .then(result => {
            if (result.message) {
                fetchGuides(); // Refresh guide list
            } else {
                console.error('Error deleting guide:', result.message);
            }
        })
        .catch(error => console.error('Error deleting guide:', error));
    } else {
        console.error('Please enter a valid guide ID');
    }
}


