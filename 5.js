// Function to calculate and print the estimated delivery time based on package type
function getDeliveryTime(packageType) {
    let deliveryTime;

    switch (packageType.toLowerCase()) {
        case 'standard':
            deliveryTime = '3-5 days';
            break;
        case 'express':
            deliveryTime = '1-2 days';
            break;
        case 'overnight':
            deliveryTime = 'Next day';
            break;
        default:
            deliveryTime = 'Unknown package type';
    }

    console.log(`The estimated delivery time for ${packageType} package is: ${deliveryTime}`);
}

// Test cases
getDeliveryTime('standard');  // Output: The estimated delivery time for standard package is: 3-5 days
getDeliveryTime('express');   // Output: The estimated delivery time for express package is: 1-2 days
getDeliveryTime('overnight'); // Output: The estimated delivery time for overnight package is: Next day
getDeliveryTime('rush');      // Output: The estimated delivery time for rush package is: Unknown package type
