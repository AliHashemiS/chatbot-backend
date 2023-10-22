import { Router } from 'express';

import { createNewQuestionAndAnswer, deleteQuestionAndAnswerById, getAllQuestionsAndAnswers, getQuestionsByQuestion, updateQuestionAndAnswerById } from '../controllers/chatbot.controller';

const router = Router();

router.get('/chatbot', getAllQuestionsAndAnswers);

router.post('/chatbot/question', getQuestionsByQuestion);

router.post('/chatbot/newquestion', createNewQuestionAndAnswer);

router.delete('/chatbot/:id', deleteQuestionAndAnswerById);

router.put('/chatbot/:id', updateQuestionAndAnswerById);

export default router;