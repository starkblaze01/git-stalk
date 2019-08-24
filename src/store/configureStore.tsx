let configureStore: any = null;
if (process.env.NODE_ENV === "production") {
  configureStore = require("./configureStore.prod").default;
} else {
  configureStore = require("./configureStore.dev").default;
}
export default configureStore;
