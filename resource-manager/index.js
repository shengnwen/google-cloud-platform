var google = require('googleapis');
var crm = google.cloudresourcemanager('v1');

function authorize(callback) {
    google.auth.getApplicationDefault((err, authClient) => {
        if (err) {
            console.log('authentication failed:', err);
			return; 
        }
    });
}

console.log('test');
