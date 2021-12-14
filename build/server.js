"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.post('/', (request, response) => {
    const user = request.body;
    return response.send({
        message: `Hello ${user.name}`,
    });
});
app.listen(3000, () => console.log('Listening 3000'));
