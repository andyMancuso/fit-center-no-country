"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProvider = void 0;
const relations_1 = require("../../models/relations");
const getProvider = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const proveedores = yield relations_1.Provider.findAll({
            include: {
                model: relations_1.Elements,
                attributes: ["name"],
                include: [{
                        model: relations_1.Admin,
                        attributes: ["user"],
                    }],
            }
        });
        if (!proveedores.length) {
            return res.status(400).json({ msg: "No hay proveedores disponibles" });
        }
        else {
            return res.status(200).json(proveedores);
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.getProvider = getProvider;
