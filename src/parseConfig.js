// Parse SDK initialization (only once)
import Parse from "parse";

// 💡 Replace with your own Back4App keys
const PARSE_APPLICATION_ID = "dTGIRGdnKcgqYtAKhLTHEOUhCVTalXb9z9ikaZVf";
const PARSE_JS_KEY = "4rQreRCkSuCOa9jIlBidjChoVxZ9HjnNJdyUVpUO";
// const PARSE_APPLICATION_ID = "VevF000KxMnGuke7WFzxHgWyYaxhg4VtcWtlEfpj";
// const PARSE_JS_KEY = "Ok7sJ1UH88dF42UyYWoNbkw8d2l0S11JZ1V2fTCI";
const PARSE_SERVER_URL = "https://parseapi.back4app.com/";

Parse.initialize(PARSE_APPLICATION_ID, PARSE_JS_KEY);
Parse.serverURL = PARSE_SERVER_URL;
