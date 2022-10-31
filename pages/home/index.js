import { filterEvent } from "../../src/scripts/filter.js";
import { getLocalStorage } from "../../src/scripts/localSotrage.js";
import { renderSelect } from "../../src/scripts/render.js";
import { getDepartaments } from "../../src/scripts/request.js";

getDepartaments()

getLocalStorage()

renderSelect(getLocalStorage())

filterEvent()