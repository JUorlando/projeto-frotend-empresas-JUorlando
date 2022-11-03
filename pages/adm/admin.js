import { getLocalStorage } from "../../src/scripts/localSotrage.js";
import { renderSelectAdmin, renderSelectCompany } from "../../src/scripts/render.js";

renderSelectCompany(getLocalStorage())

renderSelectAdmin(getLocalStorage())