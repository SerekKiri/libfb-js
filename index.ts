import { login } from "./src/FBMessenger"
require("console-stamp")(console, "[HH:MM:ss.l]")

let config
try {
    config = require("./config.json")
} catch (err) {
    console.dir(err)
    process.exit(1)
}

async function main() {
    const api = await login(config.email, config.password, {})
    api.on('message', console.dir)
    api.on('event', console.dir)
}
main()
