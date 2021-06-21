const path = require("path");

module.exports = {
  /**
   * The port to run Nucleus Server on, if the port is in use the server will not start
   */
  port: 3030,

  /**
   * The fully qualified domain + path that Nucleus is being hosted at
   */
  baseURL: "http://localhost:8888",

  /**
   * The data store to use when persisting plugins and versions.  Current possible values
   * are "sequelize", ensure you also supply valid connection details for your
   * chosen strategy below.
   *
   * PR's welcome to add another data store.
   */
  dbStrategy: "sequelize",

  /**
   * Sequelize connection information, please note all options are required
   *
   * database: The name of the database to connect to
   * dialect: The type of SQL database this is, check sequelize docs for more info
   * username: Username to use when connecting
   * password; Password to use when connecting
   * host: Hostname of database
   * port: Port to use when connecting
   * storage: Path to sqlite file, only used for sqlite dialect
   */
  sequelize: {
    dialect: "sqlite",
    storage: path.resolve(__dirname, "db.sqlite"),
  },

  /**
   * The file store to use when persisting update files and metadata.  Current possible
   * values are "s3" and "local" ensure you also supply valid connection details if
   * required for your chosen strategy below.
   *
   * PR's welcome to add another file store.
   */
  fileStrategy: "local",

  /**
   * Local file configuration
   *
   * root: Path on disk to the root of the static file store
   * staticUrl: The HTTP url to use to access the static file store remotely
   */
  local: {
    root: path.resolve(__dirname, ".files"),
    staticUrl: "http://localhost:9999",
  },

  /**
   * There is actually no authentication config for s3, all config must be done through the standard AWS
   * environment variables or through EC2 IAM roles.
   *
   * See http://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/setting-credentials-node.html
   *
   * Bucket / Region / CloudFront config goes here though
   */
  s3: {
    // init: {
    //   endpoint: '' // The alternate endpoint to reach the S3 instance at,
    //   s3ForcePathStyle: true // Always use path style URLs
    // }

    bucketName: "", // The name for your S3 Bucket

    cloudfront: {
      // If you don't have CloudFront set up and just want to use the S3 bucket set this to "null
      distributionId: "", // The CloudFront distribution ID, used for invalidating files
      publicUrl: "", // Fully qualified URL for the root of the CloudFront proxy for the S3 bucket
    },
  },

  /**
   * The authentication strategy to use when logging users in.  Current possible values are "local",
   * "openid" and "github".  Make you also supply the required authentication details
   */
  authStrategy: "local",

  /**
   * Local authentication details
   *
   * The `adminIdentifiers` array should be a list of usernames
   *
   * DISCLAIMER: This strategy should ONLY be used for local development and NEVER
   * used in production.  Unicorns cry every time this setting is used in production.
   * Don't make the unicorns cry.
   *
   * displayName: The user friendly name of this user
   * username: A unique identifier to use when this user signs in, please note uniqueness is
   *           not enforced
   * password: Well, uhhh, their password
   * photo: A URL for their profile, entirely optional, just makes things look nicer ;)
   */
  localAuth: [
    {
      displayName: "Charlie",
      username: "charlie",
      password: "charlie",
      photo:
        "https://pbs.twimg.com/profile_images/1219364727/charlie-support_400x400.png",
    },
  ],

  /**
   * OpenID authentication details
   *
   * The `adminIdentifiers` array should be a list of email
   * addresses for users to consider admins
   *
   * realm: The domain that the server is hosted on
   * stateless: Stateless mode for openID
   * profile: Whether to fetch profile information, should normally be true
   * providerURL: Your openID provider URL
   * domain: Domain to restrict email addresses to
   */
  openid: {
    realm: "http://localhost:8888",
    stateless: true,
    profile: true,
    providerURL: "https://auth.myservice.com/openid/v2/op",
    domain: "myservice.com",
  },

  /**
   * GitHub authentication details
   *
   * The `adminIdentifiers` array should be a list of GitHub usernames
   * to consider admins
   *
   * clientID: GitHub API client ID
   * clientSecret: GitHub API clientSecret
   * realm: The domain the server is hosted on
   */
  github: {
    clientID: "",
    clientSecret: "",
  },

  /**
   * See the documentation for your authentication strategy for what this array does
   */
  adminIdentifiers: ["admin@yourdomain.com", "charlie"],

  /**
   * Session options, in development just leave this as default.
   *
   * IN PRODUCTION PLEASE USE REDIS!
   *
   * type: Can be either "redis" or null
   *
   * redis:
   *   host: The host URL for the redis instance
   *   port: The port for the redis instance
   */
  sessionConfig: {
    type: null,
    secret: "ThisIsNotSecret",

    redis: {
      host: "",
      port: "",
    },
  },

  organization: "My Company Here",

  /**
   * GPG key to use when signing APT and YUM releases
   *
   * Requires to be unlocked (no password) and have both the private and
   * public key.
   */
  gpgSigningKey: `
  -----BEGIN PGP PUBLIC KEY BLOCK-----

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
eXG99CMbgyv77s3flczJ99WHxaeq7A==
=TAzY
-----END PGP PUBLIC KEY BLOCK-----
-----BEGIN PGP PRIVATE KEY BLOCK-----

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
=U+2R
-----END PGP PRIVATE KEY BLOCK-----
`,

  /**
   * The default percentage rollout for new releases.  The first release for
   * any channel will always be 100% but all future releases will have a
   * default rollout value of this setting
   */
  defaultRollout: 0,
};
