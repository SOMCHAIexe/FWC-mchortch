const ftList = document.getElementById('ft_list');
const newBtn = document.getElementById('newBtn');

// Load saved TODOs from cookie when page loads
loadCookie();

// Click "New" button -> prompt user -> add TODO at the TOP
newBtn.addEventListener('click', function() {
    const text = prompt('Enter a new TO DO:');
    
    // Check if input is not null and not empty spaces
    if (text && text.trim() !== '') {
        addTodo(text.trim());
        saveTodosToCookie();
    }
});

// Helper: Creates a TODO item and attaches its click-to-delete listener
function addTodo(text) {
    const todoDiv = document.createElement('div');
    todoDiv.textContent = text;

    // Click on item -> confirm dialog -> remove from DOM
    todoDiv.addEventListener('click', function() {
        if (confirm('Do you want to remove this TO DO?')) {
            todoDiv.remove(); // Removes permanently from DOM
            saveTodosToCookie();
        }
    });

    // Inserts new element at the VERY TOP of the ft_list container
    ftList.prepend(todoDiv);
}

// Helper: Converts all current TODO items to JSON and stores in document.cookie
function saveTodosToCookie() {
    const todos = [];
    const todoElements = ftList.querySelectorAll('div');

    todoElements.forEach(function(el) {
        todos.push(el.textContent);
    });

    // Save as JSON string (expire in 1 year)
    document.cookie = "ft_list=" + encodeURIComponent(JSON.stringify(todos)) + ";path=/;max-age=31536000";
}

// Helper: Parses document.cookie to recreate TODO list on refresh
function loadCookie() {
    const cookies = document.cookie.split('; ');
    let savedData = null;

    cookies.forEach(function(cookie) {
        if (cookie.startsWith('ft_list=')) {
            savedData = cookie.substring('ft_list='.length);
        }
    });

    if (savedData) {
        const todos = JSON.parse(decodeURIComponent(savedData));
        
        // Reverse array before loading because addTodo() prepends items to the top
        todos.reverse().forEach(function(text) {
            addTodo(text);
        });
    }
}