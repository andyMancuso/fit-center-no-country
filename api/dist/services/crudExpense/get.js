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
exports.getExpensesGym = void 0;
const relations_1 = require("../../models/relations");
const getExpensesGym = (_, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        let total = 0;
        const expenses = yield relations_1.Expense.findAll({
            include: {
                model: relations_1.Admin,
                attributes: ["user"],
            },
        });
        expenses.map((el) => {
            return total += Number(el.expense);
        });
        if (!expenses.length) {
            return res.status(400).json({ msg: "De momento no se han añadido gastos mensuales" });
        }
        return res.status(200).json({ gastos: total, expenses });
    }
    catch (error) {
        return res.status(400).json({ error: "Error en getExpensesGym por:" + error, });
    }
});
exports.getExpensesGym = getExpensesGym;
