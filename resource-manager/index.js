var google = require('googleapis');
var crm = google.cloudresourcemanager('v1');

function authorize(callback) {
    google.auth.getApplicationDefault((err, authClient) => {
        if (err) {
            console.log('authentication failed:', err);
			return; 
        }
        if (authClient.createScopedRequired
            && authClient.createScopedRequired()) {
            var scopes = ['https://www.googleapis.com/auth/cloud-platform'];
			authClient = authClient.createScoped(scopes);
        }
        callback(authClient);
    });
}

authorize(function(authClient) {
    var request = {
		resource: {},
		auth: authClient
    };
	
	crm.projects.create(request, (err, response) => {
		if (err) {
			console.log('create failed:', err);
			return;
		}
		console.log(JSON.stringify(response, nll, 2));
	});
});

console.log('test');
