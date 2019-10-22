const fs = require('fs');
const admin = require('express-gateway/admin')({
  baseUrl: 'http://localhost:9876',
  verbose: false,
  headers: null
});

async function createScopes(scopes) {
  await admin.scopes.create(scopes);
}

async function createCredential(consumerId, credential) {
  let result = await admin.credentials.create(consumerId, credential.type, credential.data);
  if (credential.data.scopes) {
    await admin.credentials.setScopes(result.id, credential.type, credential.data.scopes);
  }
}

async function createUser(user) {
  let user_data = { username: user };
  let result = await admin.users.create(user_data);
  return result.id;
}

async function createApp(userId, app) {
  let app_data = { name: app }
  let result = await admin.apps.create(userId, app_data)
  return result.id;
}

async function populate(config) {
  createScopes(config.scopes);
  for (const [user, apps] of Object.entries(config.users)) {
    let userId = await createUser(user);
    for (const [app, credential] of Object.entries(apps)) {
      let appId = await createApp(userId, app);
      await createCredential(appId, credential)
    }
  }
}


populate(JSON.parse(fs.readFileSync('./config.json')))
