document.addEventListener('DOMContentLoaded', function() {
    // Active color change for menu items
    document.querySelectorAll('.menu-item').forEach(item => {
        item.addEventListener('click', function() {
            document.querySelectorAll('.menu-item').forEach(el => el.classList.remove('bg-purple-200', 'text-purple-800'));
            this.classList.add('bg-purple-200');
            this.classList.add('text-purple-800');
        });
    });

    // Toggle functionality for Project 1
    document.getElementById('toggle-btn-1').addEventListener('click', function() {
        var content1 = document.getElementById('toggle-content-1');
        var icon1 = document.getElementById('toggle-icon-1');
        content1.classList.toggle('hidden');
        icon1.classList.toggle('rotate-90');
    });

    // Toggle functionality for Project 2
    document.getElementById('toggle-btn-2').addEventListener('click', function() {
        var content2 = document.getElementById('toggle-content-2');
        var icon2 = document.getElementById('toggle-icon-2');
        content2.classList.toggle('hidden');
        icon2.classList.toggle('rotate-90');
    });


    


    // Add task modal handling
    document.getElementById('add-task-button').addEventListener('click', function() {
        document.getElementById('add-task-modal').classList.remove('hidden');
    });
  
    document.getElementById('close-modal').addEventListener('click', function() {
        document.getElementById('add-task-modal').classList.add('hidden');
    });

    // Task dropdown functionality
    // function toggleDropdown(dropdownIdToShow, dropdownIdToHide) {
    //     var dropdownToShow = document.getElementById(dropdownIdToShow);
    //     var dropdownToHide = document.getElementById(dropdownIdToHide);
        
    //     if (!dropdownToShow.classList.contains("hidden")) {
    //         dropdownToShow.classList.add("hidden");
    //     } else {
    //         dropdownToShow.classList.remove("hidden");
    //     }
        
    //     if (dropdownToHide && !dropdownToHide.classList.contains("hidden")) {
    //         dropdownToHide.classList.add("hidden");
    //     }
    // }



      // task dropdown 
      function toggleDropdown(dropdownIdToShow, dropdownIdToHide) {
        var dropdownToShow = document.getElementById(dropdownIdToShow);
        var dropdownToHide = document.getElementById(dropdownIdToHide);
        
        if (!dropdownToShow.classList.contains("hidden")) {
            dropdownToShow.classList.add("hidden");
        } else {
            dropdownToShow.classList.remove("hidden");
        }
        
        if (dropdownToHide && !dropdownToHide.classList.contains("hidden")) {
            dropdownToHide.classList.add("hidden");
        }
        }
    
        // Close the dropdown if the user clicks outside of it
        window.onclick = function(event) {
        if (!event.target.matches('.relative button') && !event.target.closest('.relative')) {
            var dropdowns = document.getElementsByClassName("origin-top-right");
            for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (!openDropdown.classList.contains('hidden')) {
                openDropdown.classList.add('hidden');
            }
            }
        }
        }
    
        // calander toggle
        // Function to toggle the visibility of the date input
        function toggleCalendar() {
            var dateInput = document.getElementById("due-date");
            dateInput.classList.toggle("hidden");
        }
    

    function toggleDropdown(dropdownId, otherDropdownId) {
        const dropdown = document.getElementById(dropdownId);
        const otherDropdown = document.getElementById(otherDropdownId);
      
        if (dropdown.classList.contains('hidden')) {
          dropdown.classList.remove('hidden');
          dropdown.classList.add('block');
          otherDropdown.classList.add('hidden');
          otherDropdown.classList.remove('block');
        } else {
          dropdown.classList.add('hidden');
          dropdown.classList.remove('block');
        }
      }
      

    // Close the dropdown if the user clicks outside of it
    window.onclick = function(event) {
        if (!event.target.matches('.relative button') && !event.target.closest('.relative')) {
            var dropdowns = document.getElementsByClassName("origin-top-right");
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (!openDropdown.classList.contains('hidden')) {
                    openDropdown.classList.add('hidden');
                }
            }
        }
    }
});



function toggleDropdown(dropdownId, otherDropdownId = null) {
    const dropdown = document.getElementById(dropdownId);
    dropdown.classList.toggle('hidden');
    dropdown.classList.toggle('scale-95');
    if (otherDropdownId) {
        const otherDropdown = document.getElementById(otherDropdownId);
        otherDropdown.classList.add('hidden');
        otherDropdown.classList.add('scale-95');
    }
}

document.getElementById('open-modal').addEventListener('click', function() {
    const modal = document.getElementById('automations');
    modal.classList.remove('hidden');
    setTimeout(() => {
        modal.classList.remove('opacity-0');
        modal.classList.remove('pointer-events-none');
        modal.firstElementChild.classList.remove('scale-95');
    }, 10);
});

document.getElementById('close-modal').addEventListener('click', function() {
    const modal = document.getElementById('automations');
    modal.classList.add('opacity-0');
    modal.classList.add('pointer-events-none');
    modal.firstElementChild.classList.add('scale-95');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 500);
});









// automation popup close model 
function closeModal() {
    const modal = document.getElementById('automations');
    modal.classList.add('opacity-0');
    modal.classList.add('pointer-events-none');
    setTimeout(() => {
        modal.classList.add('hidden');
    }, 500); // matches the duration of the opacity transition
}



// Close dropdown if clicked outside
window.addEventListener('click', function(e) {
    const projectDropdown = document.getElementById('projectDropdown');
    const taskDropdown = document.getElementById('taskDropdown');
    const priorityDropdown = document.getElementById('priorityDropdown');
    if (!projectDropdown.contains(e.target) && !taskDropdown.contains(e.target) && !priorityDropdown.contains(e.target) && !e.target.matches('button') && !e.target.matches('a')) {
        projectDropdown.classList.add('hidden');
        projectDropdown.classList.add('scale-95');
        taskDropdown.classList.add('hidden');
        taskDropdown.classList.add('scale-95');
        priorityDropdown.classList.add('hidden');
        priorityDropdown.classList.add('scale-95');
    }
});