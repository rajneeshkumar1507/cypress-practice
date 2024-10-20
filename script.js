const dropdownValue = document.getElementById('dropdownValue');
        dropdownValue.addEventListener('change', function() {
            console.log("Selected by Value: ", dropdownValue.value);
        });

        const dropdownText = document.getElementById('dropdownText');
        dropdownText.addEventListener('change', function() {
            console.log("Selected by Text: ", dropdownText.options[dropdownText.selectedIndex].text);
        });

        const dropdownMultiple = document.getElementById('dropdownMultiple');
        dropdownMultiple.addEventListener('change', function() {
            const selectedOptions = Array.from(dropdownMultiple.selectedOptions).map(option => option.text);
            console.log("Selected Multiple Options: ", selectedOptions.join(', '));
        });