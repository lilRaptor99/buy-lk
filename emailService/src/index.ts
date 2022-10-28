import { readFileSync } from "fs";
import https from "https";
import express, { Request, Response } from "express";
import bodyParser from "body-parser";
import cors from "cors";
import routes from "./routes/routes";

const app = express();

/**
 * App Configuration
 */

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(routes);

app.get("/", (req: Request, res: Response) => {
  res.json({ status: "Email service up on /api/send-email" });
});

/**
 * Server activation
 */

const PORT = process.env.PORT || 8282;

if (process.env.ENVIRONMENT === "PRODUCTION") {
  const privateKey = readFileSync(`${process.env.CERT_PATH}/privkey.pem`);
  const certificate = readFileSync(`${process.env.CERT_PATH}/fullchain.pem`);

  https
    .createServer(
      {
        key: privateKey,
        cert: certificate,
      },
      app
    )
    .listen(PORT, () => {
      console.info(`server up on port ${PORT}`);
    });
} else {
  app.listen(PORT, () => {
    console.info(`server up on port ${PORT}`);
  });
}
// function fileUpload(): any {
//   throw new Error('Function not implemented.');
// }
