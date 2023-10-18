module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "strapidatabase2.cvkz4d9ft8iw.us-east-2.rds.amazonaws.com"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "strapidatabase"),
      user: env("DATABASE_USERNAME", "admin"),
      password: env("DATABASE_PASSWORD", "Strapi_by_nasir123"),
    },
    useNullAsDefault: true,
  },
});