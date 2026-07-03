import viewerHtml from "../../viewer/index.html";

export interface LocalViewerServerInfo {
  origin: string;
  viewerUrl: string;
}

export class LocalViewerServer {
  private server?: import("http").Server;
  private info?: LocalViewerServerInfo;

  async start(): Promise<LocalViewerServerInfo> {
    if (this.info) {
      return this.info;
    }

    const { createServer } = require("http") as typeof import("http");

    this.server = createServer((request, response) => {
      const path = request.url ? request.url.split("?")[0].split("#")[0] : "/";

      if (request.method !== "GET" || (path !== "/" && path !== "/viewer")) {
        response.writeHead(404, {
          "content-type": "text/plain; charset=utf-8",
          "cache-control": "no-store"
        });
        response.end("Not found");
        return;
      }

      response.writeHead(200, {
        "content-type": "text/html; charset=utf-8",
        "cache-control": "no-store",
        "x-content-type-options": "nosniff"
      });
      response.end(viewerHtml);
    });

    await new Promise<void>((resolve, reject) => {
      if (!this.server) {
        reject(new Error("Local viewer server was not initialized."));
        return;
      }

      this.server.once("error", reject);
      this.server.listen(0, "127.0.0.1", () => {
        this.server?.off("error", reject);
        resolve();
      });
    });

    const address = this.server.address();
    if (!address || typeof address === "string") {
      await this.stop();
      throw new Error("Local viewer server did not expose a TCP port.");
    }

    const origin = `http://127.0.0.1:${address.port}`;
    this.info = {
      origin,
      viewerUrl: `${origin}/viewer`
    };
    return this.info;
  }

  async stop(): Promise<void> {
    const server = this.server;
    this.server = undefined;
    this.info = undefined;

    if (!server) {
      return;
    }

    await new Promise<void>((resolve, reject) => {
      server.close((error) => {
        if (error) {
          reject(error);
          return;
        }
        resolve();
      });
    });
  }
}
