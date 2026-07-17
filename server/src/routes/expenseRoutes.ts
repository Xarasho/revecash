import { Router } from 'express';
import { createExpense, deleteExpense, getAllExpenses, getSingleExpense, updateExpense } from '../controllers/expenseControllers';


const router = Router();

// ============================================
// GET ALL EXPENSES - READ OPERATION
// ============================================
router.get("/", getAllExpenses);

// ============================================
// GET SINGLE EXPENSE BY ID
// ============================================
router.get("/:id", getSingleExpense);

// ============================================
// CREATE NEW EXPENSE - CREATE OPERATION
// ============================================
router.post("/", createExpense);

// ============================================
// UPDATE EXPENSE - UPDATE OPERATION
// ============================================
router.put("/:id", updateExpense);

// ============================================
// DELETE EXPENSE - DELETE OPERATION
// ============================================
router.delete("/:id", deleteExpense);

export default router;