function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
 
    // Safely extract form data from POST request
    var name = e.parameter.name || '';
    var email = e.parameter.email || '';
    var phone = e.parameter.phone || '';
    var subject = e.parameter.subject || '';
    var message = e.parameter.message || '';
 
    // Log the values (optional for debugging)
    Logger.log("Received: ", { name, email, phone, subject, message });
 
    // Append to Google Sheet
    sheet.appendRow([
      new Date(),
      name,
      email,
      phone,
      subject,
      message
    ]);
 
    // Return JSON response for CORS
    return ContentService.createTextOutput(
      JSON.stringify({ result: 'success', message: 'Data saved successfully' })
    ).setMimeType(ContentService.MimeType.JSON);
   
  } catch (error) {
    Logger.log("Error: ", error);
    return ContentService.createTextOutput(
      JSON.stringify({ result: 'error', message: error.toString() })
    ).setMimeType(ContentService.MimeType.JSON);
  }
}
 
// Handle GET requests (optional - for testing)
function doGet(e) {
  return ContentService.createTextOutput(
    JSON.stringify({ message: 'Contact form endpoint is working' })
  ).setMimeType(ContentService.MimeType.JSON);
}