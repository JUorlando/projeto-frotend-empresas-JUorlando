import { eventLogin } from "../../src/scripts/events.js";
import { buttonCadastro, buttonHome } from "../../src/scripts/redirect.js";
import { getLogin, getAdmAuth } from "../../src/scripts/request.js";

eventLogin()
await getAdmAuth()
buttonHome()
buttonCadastro()