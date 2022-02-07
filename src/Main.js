const WebApplication = require('express-appkit');

async function main() {
    // Create and initialize new application instance
    let webapp = new WebApplication();
    await webapp.initialize();

    // Example: SSO protected route
    webapp.get('/hello', webapp.middleware.sso, (request, response) => {
        response.send({ message: 'Protected by SSO ', user: request.session.user });
    });
}

main();