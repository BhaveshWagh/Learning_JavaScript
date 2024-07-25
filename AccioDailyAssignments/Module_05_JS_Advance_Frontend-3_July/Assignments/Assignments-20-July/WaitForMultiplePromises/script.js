// Function to create a promise that resolves after a random time between 1 and 3 seconds
function createRandomPromise(index) {
    const time = Math.floor(Math.random() * 3000) + 1000; // Random time between 1000 and 3000 ms
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({ index, time });
      }, time);
    });
  }
  
  // Create an array of 3 promises
  const promises = [
    createRandomPromise(1),
    createRandomPromise(2),
    createRandomPromise(3),
  ];
  
  // By default, add a row that spans 2 columns with the exact text Loading...
  const tableBody = document.getElementById('output');
  
  
  // Wait for all promises to resolve using Promise.all()
  const startTime = performance.now();
  Promise.all(promises).then(results => {
    const endTime = performance.now();
    const totalTime = (endTime - startTime) / 1000; // Convert to seconds
  
    // Remove the loading text
    tableBody.innerHTML = '';
  
    // Populate the table with the required values
    results.forEach(result => {
      const row = document.createElement('tr');
      row.innerHTML = `<td>Promise ${result.index}</td><td>${(result.time / 1000).toFixed(3)}</td>`;
      tableBody.appendChild(row);
    });
  
    // Add the total row
    const totalRow = document.createElement('tr');
    totalRow.innerHTML = `<td>Total</td><td>${totalTime.toFixed(3)}</td>`;
    tableBody.appendChild(totalRow);
  });
  
  
  // const outputTable = document.getElementById('output');
  
  // // Add a row that spans 2 columns with the exact text Loading...
  // const loadingRow = document.createElement('tr');
  // loadingRow.id = 'loading'; // Add an id to the tr element
  // loadingRow.innerHTML = '<td colspan="2">Loading...</td>';
  // outputTable.appendChild(loadingRow);
  
  // // Create 3 promises, each of which resolves after a random time between 1 and 3 seconds
  // function getRandomTime(min, max) {
  //   return Math.floor(Math.random() * (max - min + 1) + min);
  // }
  
  // function createPromise(index) {
  //   return new Promise((resolve) => {
  //     const time = getRandomTime(1, 3);
  //     setTimeout(() => {
  //       resolve({ index, time });
  //     }, time * 1000);
  //   });
  // }
  
  // let p1 = createPromise(1);
  // let p2 = createPromise(2);
  // let p3 = createPromise(3);
  
  // // Use Promise.all to wait for all the Promises to resolve
  // Promise.all([p1, p2, p3]).then((results) => {
  //   // Remove the loading text
  //   outputTable.removeChild(loadingRow);
  
  //   // Populate the table with the required values
  //   results.forEach((result, index) => {
  //     const row = document.createElement('tr');
  //     const nameCell = document.createElement('td');
  //     const timeCell = document.createElement('td');
  
  //     nameCell.textContent = `Promise ${result.index}`;
  //     timeCell.textContent = result.time.toFixed(3);
  
  //     row.appendChild(nameCell);
  //     row.appendChild(timeCell);
  //     outputTable.appendChild(row);
  //   });
  
  //   const totalTime = results.reduce((sum, result) => sum + result.time, 0);
  //   const totalTimeRow = document.createElement('tr');
  //   const totalNameCell = document.createElement('td');
  //   const totalTimeCell = document.createElement('td');
  
  //   totalNameCell.textContent = 'Total';
  //   totalTimeCell.textContent = totalTime.toFixed(3);
  
  //   totalTimeRow.appendChild(totalNameCell);
  //   totalTimeRow.appendChild(totalTimeCell);
  //   outputTable.appendChild(totalTimeRow);
  // });
  
  
  // // const outputTable = document.getElementById('output');
  
  // // // Add a row that spans 2 columns with the exact text Loading...
  // // const loadingRow = document.createElement('tr');
  // // loadingRow.id = 'loading'; // Add an id to the tr element
  // // loadingRow.innerHTML = '<td colspan="2">Loading...</td>';
  // // outputTable.appendChild(loadingRow);
  
  // // // Create 3 promises, each of which resolves after a random time between 1 and 3 seconds
  // // function getRandomTime(min, max) {
  // //   return Math.floor(Math.random() * (max - min + 1) + min);
  // // }
  
  // // function createPromise(index) {
  // //   return new Promise((resolve) => {
  // //     const time = getRandomTime(1, 3);
  // //     setTimeout(() => {
  // //       resolve({ index, time });
  // //     }, time * 1000);
  // //   });
  // // }
  
  // // let p1 = createPromise(1);
  // // let p2 = createPromise(2);
  // // let p3 = createPromise(3);
  
  // // // Use Promise.all to wait for all the Promises to resolve
  // // Promise.all([p1, p2, p3]).then((results) => {
  // //   // Remove the loading text
  // //   outputTable.removeChild(loadingRow);
  
  // //   // Populate the table with the required values
  // //   results.forEach((result, index) => {
  // //     const row = document.createElement('tr');
  // //     const nameCell = document.createElement('td');
  // //     const timeCell = document.createElement('td');
  
  // //     nameCell.textContent = `Promise ${index + 1}`;
  // //     timeCell.textContent = result.time.toFixed(3);
  
  // //     row.appendChild(nameCell);
  // //     row.appendChild(timeCell);
  // //     outputTable.appendChild(row);
  // //   });
  
  // //   const totalTime = results.reduce((sum, result) => sum + result.time, 0);
  // //   const totalTimeRow = document.createElement('tr');
  // //   const totalNameCell = document.createElement('td');
  // //   const totalTimeCell = document.createElement('td');
  
  // //   totalNameCell.textContent = 'Total';
  // //   totalTimeCell.textContent = totalTime.toFixed(3);
  
  // //   totalTimeRow.appendChild(totalNameCell);
  // //   totalTimeRow.appendChild(totalTimeCell);
  // //   outputTable.appendChild(totalTimeRow);
  // // });
  
  
  
  
  
  
  
  
  