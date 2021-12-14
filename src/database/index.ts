import { createConnection, getConnectionOptions } from "typeorm";

interface IOptions {
  host: string;
}

// Docker database
getConnectionOptions().then((options) => {
  const newOptions = options as IOptions;
  newOptions.host = "database";
  createConnection({
    ...options,
  });
});

// Local database
// getConnectionOptions().then(options => {
//   const newOptions = options as IOptions;
//   createConnection(options)
// });
