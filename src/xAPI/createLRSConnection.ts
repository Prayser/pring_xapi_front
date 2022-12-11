import XAPI from "@xapi/xapi";
import {User} from "../store/user";

const endpoint = "http://localhost/data/xAPI/";
const username = User.username;
const password = User.password;
const auth = XAPI.toBasicAuth(username, password);
const xapi: XAPI = new XAPI({
    endpoint: endpoint,
    auth: auth
});

export const CreateLRSConnection = () => {
    return xapi
}