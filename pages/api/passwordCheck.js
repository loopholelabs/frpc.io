import { passwordCheckHandler } from "@storyofams/next-password-protect";

const password = process.env.PASSWORD;

export default passwordCheckHandler(password, {
    cookieName: "frpc-password",
});