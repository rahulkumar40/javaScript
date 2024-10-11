function calculateGrade() {
      const subject1 = parseFloat(document.getElementById('subject1').value);
      const subject2 = parseFloat(document.getElementById('subject2').value);
      const subject3 = parseFloat(document.getElementById('subject3').value);
      const subject4 = parseFloat(document.getElementById('subject4').value);
      const subject5 = parseFloat(document.getElementById('subject5').value);
    
      if (isNaN(subject1) || isNaN(subject2) || isNaN(subject3) || isNaN(subject4) || isNaN(subject5)) {
        document.getElementById('result').innerText = 'Please enter marks for all subjects.';
        return;
      }
    
      const total = subject1 + subject2 + subject3 + subject4 + subject5;
      const average = total / 5;
    
      let grade;
      if (average >= 90) {
        grade = 'A+';
      } else if (average >= 80) {
        grade = 'A';
      } else if (average >= 70) {
        grade = 'B';
      } else if (average >= 60) {
        grade = 'C';
      } else if (average >= 50) {
        grade = 'D';
      } else {
        grade = 'F';
      }
    
      document.getElementById('result').innerHTML = `
        <p>Total Marks: ${total}</p>
        <p>Average Marks: ${average.toFixed(2)}</p>
        <p>Grade: ${grade}</p>
      `;
    }
    