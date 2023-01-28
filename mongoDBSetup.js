db.createUser({
  user: "testcomposeuser",
  pwd: "Test123",
  roles: [
    {
      role: "readWrite",
      db: "ledgercoin",
    },
    {
      role: "dbAdmin",
      db: "ledgercoin",
    },
  ],
});

db = db.getSiblingDB("ledgercoin");

db.createCollection("users");
