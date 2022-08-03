import { loginHandler } from "@storyofams/next-password-protect";

const password = process.env.PASSWORD;

export default loginHandler(password, {
    cookieName: "frpc-password",
});