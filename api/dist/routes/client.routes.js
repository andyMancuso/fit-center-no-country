"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clientRoutes = void 0;
require("dotenv/config");
const express_1 = require("express");
const postClient_1 = require("../services/crudClients/postClient");
const getClient_1 = require("../services/crudClients/getClient");
const putClient_1 = require("../services/crudClients/putClient");
const deleteClient_1 = require("../services/crudClients/deleteClient");
const authToken_1 = require("../middlewares/authToken");
const checkRoles_1 = require("../helper/checkRoles");
const IAdmin_1 = require("../interfaces/IAdmin");
exports.clientRoutes = (0, express_1.Router)();
// ─── Usuario ─────────────────────────────────────────────────────────────────
exports.clientRoutes.get("/api/clients", authToken_1.authToken, (0, checkRoles_1.checkRoleMiddleware)(IAdmin_1.TypeRole.Client), getClient_1.getClients);
exports.clientRoutes.post("/api/client", authToken_1.authToken, postClient_1.createClient);
exports.clientRoutes.put("/api/client/:id", authToken_1.authToken, putClient_1.updateClient);
exports.clientRoutes.delete("/api/client/:id", authToken_1.authToken, deleteClient_1.deleteClient);
