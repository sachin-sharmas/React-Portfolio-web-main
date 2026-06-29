// ═══════════════════════════════════════════════════════════════════════════════
//  GOOGLE APPS SCRIPT — Portfolio Contact Form → Google Sheet + Email Notify
// ═══════════════════════════════════════════════════════════════════════════════
//
//  After editing: Deploy → Manage Deployments → Edit → Version: New version → Deploy
//
// ═══════════════════════════════════════════════════════════════════════════════

const SHEET_ID          = '1PP4m4NLGI59zIN7Gpk76c5088Cao9rfMd1lJMGrnIWw';
const NOTIFICATION_EMAIL = 'sachins29200@gmail.com';

function doPost(e) {
  try {
    const data  = JSON.parse(e.postData.contents);
    const sheet = SpreadsheetApp.openById(SHEET_ID).getActiveSheet();

    // Add header row on first submission
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Phone', 'Message']);
      sheet.getRange(1, 1, 1, 5).setFontWeight('bold');
    }

    // Save submission row
    sheet.appendRow([
      data.timestamp || new Date().toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      data.name    || '',
      data.email   || '',
      data.phone   || '',
      data.message || '',
    ]);

    // Send email notification
    GmailApp.sendEmail(
      NOTIFICATION_EMAIL,
      '📬 New Portfolio Contact from ' + data.name,
      'Name: ' + data.name + '\nEmail: ' + data.email + '\nPhone: ' + (data.phone || 'N/A') + '\n\nMessage:\n' + data.message + '\n\nTimestamp: ' + data.timestamp,
      {
        htmlBody: `
          <div style="font-family:Poppins,Arial,sans-serif;max-width:600px;margin:0 auto;background:#050816;color:#fff;padding:36px;border-radius:16px;border:1px solid rgba(145,94,255,0.3);">
            <h2 style="color:#915eff;margin-top:0;">📬 New Portfolio Contact</h2>
            <p style="color:#9ca3af;font-size:14px;">Someone filled your contact form.</p>
            <hr style="border:none;border-top:1px solid rgba(145,94,255,0.2);margin:20px 0;">
            <table style="width:100%;border-collapse:collapse;">
              <tr>
                <td style="padding:10px 0;color:#00d4ff;font-size:13px;font-weight:600;width:90px;vertical-align:top;">Name</td>
                <td style="padding:10px 0;color:#fff;font-size:14px;">${data.name}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#00d4ff;font-size:13px;font-weight:600;vertical-align:top;">Email</td>
                <td style="padding:10px 0;"><a href="mailto:${data.email}" style="color:#915eff;text-decoration:none;">${data.email}</a></td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#00d4ff;font-size:13px;font-weight:600;vertical-align:top;">Phone</td>
                <td style="padding:10px 0;color:#fff;font-size:14px;">${data.phone || 'N/A'}</td>
              </tr>
              <tr>
                <td style="padding:10px 0;color:#00d4ff;font-size:13px;font-weight:600;vertical-align:top;">Message</td>
                <td style="padding:14px;color:#d1d5db;font-size:14px;line-height:1.6;background:rgba(145,94,255,0.08);border-radius:10px;border-left:3px solid #915eff;">${data.message.replace(/\n/g, '<br>')}</td>
              </tr>
            </table>
            <hr style="border:none;border-top:1px solid rgba(145,94,255,0.2);margin:20px 0;">
            <p style="color:#4b5563;font-size:12px;margin:0;">Sent from portfolio contact form • ${data.timestamp}</p>
          </div>
        `,
        replyTo: data.email,
      }
    );

    return ContentService
      .createTextOutput(JSON.stringify({ success: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ success: false, error: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
