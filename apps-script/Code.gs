function sendRecruitmentAlerts() {
  const sheet = SpreadsheetApp.openByUrl("https://docs.google.com/spreadsheets/d/14mkq4IIdmyig_1fV1shNIveqwGUTsaJw8Z-pAXl2llk/edit?gid=0#gid=0")
                        .getSheetByName('Closures'); // Update sheet name
  const data = sheet.getDataRange().getValues();
  const today = new Date();
  const currentMonth = today.getMonth(); // 0 = Jan, 9 = Oct

  for (let i = 1; i < data.length; i++) {
    const joiningDate = data[i][9];  // Joining Month column (J = index 9)
    const candidate = data[i][0];    // Candidate Name
    const accountManager = data[i][6]; // Account Manager
    const email = "yourname@gmail.com"; // Replace with actual email
    
    if (joiningDate instanceof Date) {
      if (joiningDate.getMonth() === currentMonth) {
        MailApp.sendEmail(
          email, 
          "Upcoming Joining Reminder", 
          `Candidate ${candidate} is set to join this month. Account Manager: ${accountManager}.`
        );
      }
    }
  }
}
